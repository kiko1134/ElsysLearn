
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

    if (q1 === "Option3") {
        grade++
    }
    if (q2 === "Option2") {
        grade++
    }
    if (q3 === "Option1") {
        grade++
    }
    if (q4 === "Option2") {
        grade++
    }
    if (q5 === "Option3") {
        grade++
    }
    if (q6 === "Option2") {
        grade++
    }

    if(grade < 2){
        grade = 2
    }

    $.ajax({
        url:server + 'OverallDB4',
        type:'POST',
        data:{'Grade':grade},
        success: function (response){
            console.log(response);
        },
        error: function (error){
            console.log(error);
        }

    })

    if (grade > 4) {
        alert("Поздравления! Оценка: " + grade)
    } else if (grade > 2 && grade < 5) {
        alert("Вашата оценка е: " + grade + ". Може би бихте искали да изгледате видеото наново?")
    } else {
        alert("Лошо! Изкарахте: 2. Не се предавайте! Изгледайте видеото отново и направете теста пак!")
    }
    }


    render() {
        return (
            <form name="quiz" id="quiz">
                <div id="question">
                    <p>1. Колко на брой са агрегатните функции, които разглеждаме в този видео урок?</p>
                    <p><input type="radio" name="question1" value="Option1"/>a) 2</p>
                    <p><input type="radio" name="question1" value="Option2"/>b) 3</p>
                    <p><input type="radio" name="question1" value="Option3"/>c) 5</p>
                    <p><input type="radio" name="question1" value="Option4"/>d) Нито един от посочените</p>
                </div>

                <div id="question">
                    <p>2. Кои от изброените по долу са агрегатни функции?</p>
                    <p><input type="radio" name="question2" value="Option1"/>a) SUM</p>
                    <p><input type="radio" name="question2" value="Option2"/>b) MULT</p>
                    <p><input type="radio" name="question2" value="Option3"/>c) MIN</p>
                    <p><input type="radio" name="question2" value="Option4"/>d) MAX</p>
                </div>

                <div id="question">
                    <p>3. Коя заявка е написана правилно?</p>
                    <p><input type="radio" name="question3" value="Option1"/>a) select COUNT() from table;</p>
                    <p><input type="radio" name="question3" value="Option2"/>b) get count() from table;</p>
                    <p><input type="radio" name="question3" value="Option3"/>c) select *COUNT() from table;</p>
                    <p><input type="radio" name="question3" value="Option4"/>d) select COUNT() where condition;</p>
                </div>

                <div id="question">
                    <p>4.Какво прави агрегатната функция AVG?</p>
                    <p><input type="radio" name="question4" value="Option1"/>a) Взима средно аритметично от целия ред</p>
                    <p><input type="radio" name="question4" value="Option2"/>b) Взима средно аритметично от цялата колона</p>
                    <p><input type="radio" name="question4" value="Option3"/>c) Не прави нищо</p>
                    <p><input type="radio" name="question4" value="Option4"/>d) Нито едно от посочените</p>
                </div>

                <div id="question">
                    <p>5.Какво пишем когато искаме да зададем условност на агрегатна функция?</p>
                    <p><input type="radio" name="question5" value="Option1"/>a) Не пишем нищо</p>
                    <p><input type="radio" name="question5" value="Option2"/>b) when condition</p>
                    <p><input type="radio" name="question5" value="Option3"/>c) where condition</p>
                    <p><input type="radio" name="question5" value="Option4"/>d) нито едно от изброените</p>
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




