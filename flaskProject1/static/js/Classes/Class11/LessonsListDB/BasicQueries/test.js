class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    Check(){
        var q1 = document.quiz.question1.value;
        var q2 = document.quiz.question2.value;
        var q3 = document.quiz.question3.value;
        var q4 = document.quiz.question4.value;
        var q5 = document.quiz.question5.value;
        var q6 = document.quiz.question6.value;
        var grade = 0;

        if (q1 === "Option4"){grade++}
        if (q2 === "Option3"){grade++}
        if (q3 === "Option1"){grade++}
        if (q4 === "Option1"){grade++}
        if (q5 === "Option2"){grade++}
        if (q6 === "Option2"){grade++}

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
                    <p>1. Коя заявка служи за извеждане на цялото съдържание от една таблица?</p>
                    <p><input type="radio" name="question1" value="Option1"/>a) select all from table;</p>
                    <p><input type="radio" name="question1" value="Option2"/>b) select everything from table;</p>
                    <p><input type="radio" name="question1" value="Option3"/>c) select * from table</p>
                    <p><input type="radio" name="question1" value="Option4"/>d) select * from table; </p>
                </div>

                <div id="question">
                    <p>2. Има ли значение изписването на думите?</p>
                    <p><input type="radio" name="question2" value="Option1"/>a) Да, всички трябва да са с главни букви</p>
                    <p><input type="radio" name="question2" value="Option2"/>b) Да, всички трябва да са с малки букви</p>
                    <p><input type="radio" name="question2" value="Option3"/>c) Не</p>
                    <p><input type="radio" name="question2" value="Option4"/>d) Нито едно от посочените</p>
                </div>

                <div id="question">
                    <p>3. Как е правилно да се запълни таблица?</p>
                    <p><input type="radio" name="question3" value="Option1"/>a) insert into table_name(col1) values(val1);</p>
                    <p><input type="radio" name="question3" value="Option2"/>b) insert in table_name(col1) values(val1);</p>
                    <p><input type="radio" name="question3" value="Option3"/>c) insert in col values(val1);</p>
                    <p><input type="radio" name="question3" value="Option4"/>d) нито едно от посочените</p>
                </div>

                <div id="question">
                    <p>4. Можем ли да създаден база без да имаме заявки в нея</p>
                    <p><input type="radio" name="question4" value="Option1"/>a) Да</p>
                    <p><input type="radio" name="question4" value="Option2"/>b) Само в определени случаи</p>
                    <p><input type="radio" name="question4" value="Option3"/>c) Не</p>
                    <p><input type="radio" name="question4" value="Option4"/>d) Нито едно от посочените</p>
                </div>

                <div id="question">
                <p>5. Какво означава съкращението SQL?</p>
                    <p><input type="radio" name="question5" value="Option1"/>a) Standart Query Language</p>
                    <p><input type="radio" name="question5" value="Option2"/>b) Structured Query Language</p>
                    <p><input type="radio" name="question5" value="Option3"/>c) Styled Question Language</p>
                    <p><input type="radio" name="question5" value="Option4"/>d) Stylistic Query Language</p>
                </div>

                <div id="question">
                    <p>6.Какъв тип база е MySQL?</p>
                    <p><input type="radio" name="question6" value="Option1"/>a) Hierarchical database</p>
                    <p><input type="radio" name="question6" value="Option2"/>b) Relational database</p>
                    <p><input type="radio" name="question6" value="Option3"/>c) Document database</p>
                    <p><input type="radio" name="question6" value="Option4"/>d) NoSQL database</p>
                </div>

                <input type="button" name="" value="Предай" id="button" onClick={this.Check}/>
            </form>
        )
    }
}