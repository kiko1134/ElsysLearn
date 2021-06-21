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

        if (q1 === "Option4"){grade++}
        if (q2 === "Option1"){grade++}
        if (q3 === "Option2"){grade++}
        if (q4 === "Option3"){grade++}
        if (q5 === "Option1"){grade++}
        if (q6 === "Option2"){grade++}

        if(grade < 2){
                grade = 2
        }

        $.ajax({
            url:server + '/OverallDB5',
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
                    <p>1. Коя от долупосочените е връзка между таблици?</p>
                    <p><input type="radio" name="question1" value="Option1"/>a) One to many</p>
                    <p><input type="radio" name="question1" value="Option2"/>b) One to one</p>
                    <p><input type="radio" name="question1" value="Option3"/>c) Many to many</p>
                    <p><input type="radio" name="question1" value="Option4"/>d) И трите отговора са верни</p>
                </div>

                <div id="question">
                    <p>2. Как имплементираме връзката One to one?</p>
                    <p><input type="radio" name="question2" value="Option1"/>a) Като направим unique foreign key във втората таблица</p>
                    <p><input type="radio" name="question2" value="Option2"/>b) Като направим foreign key във втората таблица</p>
                    <p><input type="radio" name="question2" value="Option3"/>c) Като си направим трета таблица, чрез която се осъществява връзката ,между главните две</p>
                    <p><input type="radio" name="question2" value="Option4"/>d) Нито един от посочените</p>
                </div>

                <div id="question">
                    <p>3. Как имплементираме връзката Many to many?</p>
                    <p><input type="radio" name="question3" value="Option1"/>a) Като направим unique foreign key във втората таблица</p>
                    <p><input type="radio" name="question3" value="Option2"/>b) Като направим foreign key във втората таблица</p>
                    <p><input type="radio" name="question3" value="Option3"/>c) Като си направим трета таблица, чрез която се осъществява връзката ,между главните две</p>
                    <p><input type="radio" name="question3" value="Option4"/>d) Нито един от посочените</p>
                </div>

                <div id="question">
                    <p>4. Как имплементираме връзката One to many?</p>
                    <p><input type="radio" name="question4" value="Option1"/>a) Като направим unique foreign key във втората таблица</p>
                    <p><input type="radio" name="question4" value="Option2"/>b) Като направим foreign key във втората таблица</p>
                    <p><input type="radio" name="question4" value="Option3"/>c) Като си направим трета таблица, чрез която се осъществява връзката ,между главните две</p>
                    <p><input type="radio" name="question4" value="Option4"/>d) Нито един от посочените</p>
                </div>

                <div id="question">
                    <p>5. Ако имаме задача, в която се казва, че един човек може да има много оценки, коя връзка трябва да изпозлваме?</p>
                    <p><input type="radio" name="question5" value="Option1"/>a) One to many</p>
                    <p><input type="radio" name="question5" value="Option2"/>b) One to one</p>
                    <p><input type="radio" name="question5" value="Option3"/>c) Нито едно от посочените</p>
                    <p><input type="radio" name="question5" value="Option4"/>d) Many to many</p>
                </div>

                <div id="question">
                    <p>5. Ако имаме задача, в която се казва, че един човек може да има само една оценка, коя връзка трябва да изпозлваме?</p>
                    <p><input type="radio" name="question6" value="Option1"/>a) One to many</p>
                    <p><input type="radio" name="question6" value="Option2"/>b) One to one</p>
                    <p><input type="radio" name="question6" value="Option3"/>c) Нито едно от посочените</p>
                    <p><input type="radio" name="question6" value="Option4"/>d) Many to many</p>
                </div>

                <input type="button" name="" value="Предай" id="button" onClick={this.Check}/>
            </form>
        )
    }
}