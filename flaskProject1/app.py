from typing import Any

from flask import Flask, render_template, request, url_for, redirect, session
import pymongo
import bcrypt
from flask_cors import CORS, cross_origin
from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer

app = Flask(__name__)
app.config['SECRET_KEY'] = "testing"
mail = Mail(app)
cors = CORS(app)
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'elsyslearn4@gmail.com'
app.config['MAIL_PASSWORD'] = 'Elsys007'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)
serializer = URLSafeTimedSerializer(app.config["SECRET_KEY"])

client = pymongo.MongoClient("mongodb+srv://kris:1234567890@cluster0.vjdqy.mongodb.net/mongotest?retryWrites=true&w=majority")
db = client.get_database('total_records')
records = db.register

DBList = []

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
            token = serializer.dumps(email, salt='email-confirm-key')
            # confirm_url = url_for(
            #     'func',
            #     token=token,
            #     _external=True)
            msg = Message('ElsysLearm Registration', sender='elsyslearn@gmail.com', recipients=[email])
            msg.body = "You have successfully registered to ElsysLearn."
            mail.send(msg)

            user_data = records.find_one({"email": email})
            new_email = user_data['email']

            return render_template('mainpages/home.html', email=new_email)
    return render_template('Login&Register/register.html')

# @app.route("/confirm/<token>")
# def func(token):
#     email = serializer.loads(token, salt="email-confirm-key", max_age=86400)
#
#     user = session
#
#     user.confirmed = True
#
#     user.confirm()
#     app.logger.info("Successfully registered a new user!")
#
#     return redirect('/login')

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
            username = email_found['name']

            if bcrypt.checkpw(password.encode('utf-8'), passwordcheck):
                session["email"] = email_val
                session["name"] = username
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

@app.route("/OverallDB1", methods=["GET","POST"])
def overall():
    if request.method == "POST":
        name = session["name"]
        email = session["email"]
        grade = request.form["Grade"]
        print(grade)
        DBList.append(int(grade))
        avrg = 0
        for x in range(0, len(DBList)):
            curr = DBList[x]
            avrg = avrg + int(curr)
        avrg = avrg / float(len(DBList))
        g = records.update_one({"email": email}, {"$set":{"grade": avrg}})
        # session["grade"] = avrg
        print(avrg)
    return render_template("Classes/Class11/Subjects/Databases/Lessons/IntoduceInSQL.html")


@app.route("/OverallDB2", methods=["GET", "POST"])
def overall1():
    if request.method == "POST":
        grade = request.form["Grade"]
        print(grade)
        DBList.append(int(grade))
        avrg = 0
        for x in range(0, len(DBList)):
            curr = DBList[x]
            avrg = avrg + int(curr)
        avrg = avrg / float(len(DBList))
        print(avrg)
        Message = {"Message": "Done!"}
        return Message
    return render_template("Classes/Class11/Subjects/Databases/Lessons/TablesDB.html")

@app.route("/OverallDB3", methods=["GET", "POST"])
def overall2():
    if request.method == "POST":
        grade = request.form["Grade"]
        print(grade)
        DBList.append(int(grade))
        avrg = 0
        for x in range(0, len(DBList)):
            curr = DBList[x]
            avrg = avrg + int(curr)
        avrg = avrg / float(len(DBList))
        print(avrg)
        Message = {"Message": "Done!"}
        return Message
    return render_template("Classes/Class11/Subjects/Databases/Lessons/BasicQueries.html")

@app.route("/OverallDB4", methods=["GET", "POST"])
def overall3():
    if request.method == "POST":
        grade = request.form["Grade"]
        print(grade)
        DBList.append(int(grade))
        avrg = 0
        for x in range(0, len(DBList)):
            curr = DBList[x]
            avrg = avrg + int(curr)
        avrg = avrg / float(len(DBList))
        print(avrg)
        Message = {"Message": "Done!"}
        return Message
    return render_template("Classes/Class11/Subjects/Databases/Lessons/AgregateFunctions.html")

@app.route("/OverallDB5", methods=["GET", "POST"])
def overall4():
    if request.method == "POST":
        grade = request.form["Grade"]
        print(grade)
        DBList.append(int(grade))
        avrg = 0
        for x in range(0, len(DBList)):
            curr = DBList[x]
            avrg = avrg + int(curr)
        avrg = avrg / float(len(DBList))
        print(avrg)
        Message = {"Message": "Done!"}
        return Message
    return render_template("Classes/Class11/Subjects/Databases/Lessons/ConnectionTable.html")

@app.route("/OverallDB6", methods=["GET", "POST"])
def overall5():
    if request.method == "POST":
        grade = request.form["Grade"]
        print(grade)
        DBList.append(int(grade))
        avrg = 0
        for x in range(0, len(DBList)):
            curr = DBList[x]
            avrg = avrg + int(curr)
        avrg = avrg / float(len(DBList))
        print(avrg)
        Message = {"Message": "Done!"}
        return Message
    return render_template("Classes/Class11/Subjects/Databases/Lessons/JoinQueries.html")


@app.route("/grades")
def grades():
    if session["email"]:
        grade = session["grade"]
        email = session["email"]
        name = session['name']
    return render_template("mainpages/grades.html",email = email, name = name, grade=grade)

if __name__ == "__main__":
    app.run(debug=True)
