class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    Check(){
        var server = "http://127.0.0.1:5000/"
        var q1 = document.quiz.question1.value;
        var q2 = document.quiz.question2.value;
        var q3 = document.quiz.question3.value;
        var q4 = document.quiz.question4.value;
        var q5 = document.quiz.question5.value;
        var q6 = document.quiz.question6.value;
        var grade = 0;

        if (q1 === "Option2"){grade++}
        if (q2 === "Option3"){grade++}
        if (q3 === "Option1"){grade++}
        if (q4 === "Option4"){grade++}
        if (q5 === "Option3"){grade++}
        if (q6 === "Option2"){grade++}

        if(grade < 2){
                grade = 2
        }

        $.ajax({
            url:server + 'OverallDB1',
            type:'POST',
            data:{'Grade':grade},
            success: function (response){
                console.log(response);
            },
            error: function (error){
                console.log(error);
            }

        })

        if (grade>4){
            alert("Поздравления! Оценка: " + grade)
        }
        else if(grade>2 && grade<5){
            alert("Вашата оценка е: " + grade + ". Може би бихте искали да изгледате видеото наново?")
        }
        else {
            alert("Лошо! Изкарахте: 2. Не се предавайте! Изгледайте видеото отново и направете теста пак!")
        }
    }


    render() {
        return (
            <form name="quiz" id="quiz">
                <div id="question">
                    <p>1. Какво означава съкращението SQL?</p>
                    <p><input type="radio" id="1.1" name="question1" value="Option1"/>a) Standart Query Language</p>
                    <p><input type="radio" id="1.2" name="question1" value="Option2"/>b) Structured Query Language</p>
                    <p><input type="radio" id="1.3" name="question1" value="Option3"/>c) Styled Question Language</p>
                    <p><input type="radio" id="1.4" name="question1" value="Option4"/>d) Stylistic Query Language</p>
                </div>

                <div id="question">
                    <p>2.Кое не представлява база данни?</p>
                    <p><input type="radio" id="2.1"  name="question2" value="Option1"/>a) Mysql</p>
                    <p><input type="radio" id="2.2"  name="question2" value="Option2"/>b) MongoDB</p>
                    <p><input type="radio" id="2.3" name="question2" value="Option3"/>c) PHP</p>
                    <p><input type="radio" id="2.4" name="question2" value="Option4"/>d) SQLite</p>
                </div>

                <div id="question">
                    <p>3.Коя команда, ако бъде изпълнена, ще създаде база?</p>
                    <p><input type="radio" id="3.1" name="question3" value="Option1"/>a) create database dbname</p>
                    <p><input type="radio" id="3.2" name="question3" value="Option2"/>b) create db dbname</p>
                    <p><input type="radio" id="3.3" name="question3" value="Option3"/>c) insert database dbname</p>
                    <p><input type="radio" id="3.4" name="question3" value="Option4"/>d) put db dbname</p>
                </div>

                <div id="question">
                    <p>4.Коя команда казва, че ще изпозлваме дадена база?</p>
                    <p><input type="radio" id="4.1" name="question4" value="Option1"/>a) using dbname</p>
                    <p><input type="radio" id="4.2" name="question4" value="Option2"/>b) run dbname</p>
                    <p><input type="radio" id="4.3" name="question4" value="Option3"/>c) try dbname</p>
                    <p><input type="radio" id="4.4" name="question4" value="Option4"/>d) use dbname</p>
                </div>

                <div id="question">
                    <p>5.Кой от тези типове е число със запетая?</p>
                    <p><input type="radio" id="5.1" name="question5" value="Option1"/>a) int</p>
                    <p><input type="radio" id="5.2" name="question5" value="Option2"/>b) smallint</p>
                    <p><input type="radio" id="5.3" name="question5" value="Option3"/>c) float</p>
                    <p><input type="radio" id="5.4" name="question5" value="Option4"/>d) real</p>
                </div>

                <div id="question">
                    <p>6.Какъв тип база е MySQL?</p>
                    <p><input type="radio" id="6.1" name="question6" value="Option1"/>a) Hierarchical database</p>
                    <p><input type="radio" id="6.2" name="question6" value="Option2"/>b) Relational database</p>
                    <p><input type="radio" id="6.3" name="question6" value="Option3"/>c) Document database</p>
                    <p><input type="radio" id="6.4" name="question6" value="Option4"/>d) NoSQL database</p>
                </div>

                <input type="button" name="" value="Предай" id="button" onClick={this.Check}/>
            </form>
        )
    }
}