from flask import Flask, render_template, request, url_for, redirect, session
import pymongo
import bcrypt

app = Flask(__name__)
app.secret_key = "testing"
client = pymongo.MongoClient("mongodb+srv://kris:1234567890@cluster0.vjdqy.mongodb.net/mongotest?retryWrites=true&w=majority")
db = client.get_database('total_records')
records = db.register


@app.route("/")
def home():
    return render_template("mainpages/home.html")


@app.route("/register", methods=['post', 'get'])
def index():
    # message = ''
    # if "email" in session:
    #     return redirect(url_for("logged_in"))

    if request.method == "POST":
        user = request.form.get("fullname")
        email = request.form.get("email")

        password1 = request.form.get("password1")
        password2 = request.form.get("password2")

        user_found = records.find_one({"name": user})
        email_found = records.find_one({"email": email})
        if user_found:
            message = 'There already is a user by that name'
            return render_template('Login&Register/register.html', message=message)
        if email_found:
            message = 'This email already exists in database'
            return render_template('Login&Register/register.html', message=message)
        if password1 != password2:
            message = 'Passwords should match!'
            return render_template('Login&Register/register.html', message=message)

        else:
            hashed = bcrypt.hashpw(password2.encode('utf-8'), bcrypt.gensalt())
            user_input = {'name': user, 'email': email, 'password': hashed}
            records.insert_one(user_input)

            user_data = records.find_one({"email": email})
            new_email = user_data['email']

            return render_template('mainpages/home.html', email=new_email)
    return render_template('Login&Register/register.html')


@app.route("/login", methods=["POST", "GET"])
def login():
    message = 'Please login to your account'
    # if "email" in session:
    #     return redirect(url_for("logged_in"))

    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        email_found = records.find_one({"email": email})
        if email_found:
            email_val = email_found['email']
            passwordcheck = email_found['password']

            if bcrypt.checkpw(password.encode('utf-8'), passwordcheck):
                session["email"] = email_val
                return redirect(url_for('logged_in'))
            else:
                if "email" in session:
                    return redirect(url_for("logged_in"))
                message = 'Wrong password'
                return render_template('Login&Register/login.html', message=message)
        else:
            message = 'Email not found'
            return render_template('Login&Register/login.html', message=message)
    return render_template('Login&Register/login.html', message=message)


@app.route('/logged_in')
def logged_in():
    if "email" in session:
        email = session["email"]
        return render_template('mainpages/logged_in.html', email=email)
    else:
        return redirect(url_for("login"))


@app.route("/logout", methods=["POST", "GET"])
def logout():
    if "email" in session:
        session.pop("email", None)
        return render_template("mainpages/home.html")
    else:
        return render_template('Login&Register/register.html')


@app.route("/class11")
def elevenklass():
    return render_template("Classes/Class11/class11.html")

@app.route("/dblist")
def dblist():
    return render_template("Classes/Class11/Subjects/Databases/dblessons.html")

@app.route("/OverallDB1")
def overall():
    return render_template("Classes/Class11/Subjects/Databases/Lessons/IntoduceInSQL.html")


@app.route("/OverallDB2")
def overall1():
    return render_template("Classes/Class11/Subjects/Databases/Lessons/TablesDB.html")

@app.route("/OverallDB3")
def overall2():
    return render_template("Classes/Class11/Subjects/Databases/Lessons/BasicQueries.html")

@app.route("/OverallDB4")
def overall3():
    return render_template("Classes/Class11/Subjects/Databases/Lessons/AgregateFunctions.html")


if __name__ == "__main__":
    app.run(debug=True)
