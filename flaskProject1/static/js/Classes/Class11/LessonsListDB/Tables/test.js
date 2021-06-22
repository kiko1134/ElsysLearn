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

        if (q1 === "Option3"){grade++}
        if (q2 === "Option1"){grade++}
        if (q3 === "Option3"){grade++}
        if (q4 === "Option2"){grade++}
        if (q5 === "Option4"){grade++}
        if (q6 === "Option2"){grade++}

        if(grade < 2){
                grade = 2
        }

        $.ajax({
            url:server + 'OverallDB2',
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
                    <p>1. Коя е основната градивна единица на една база в MySQL?</p>
                    <p><input type="radio" name="question1" value="Option1"/>a) редове</p>
                    <p><input type="radio" name="question1" value="Option2"/>b) документи</p>
                    <p><input type="radio" name="question1" value="Option3"/>c) таблици</p>
                    <p><input type="radio" name="question1" value="Option4"/>d) колекции</p>
                </div>

                <div id="question">
                    <p>2.Кое е правилно изписано?</p>
                    <p><input type="radio" name="question2" value="Option1"/>a) create table t(...);</p>
                    <p><input type="radio" name="question2" value="Option2"/>b) get table(...);</p>
                    <p><input type="radio" name="question2" value="Option3"/>c) create table[...]</p>
                    <p><input type="radio" name="question2" value="Option4"/>d) use table[...];</p>
                </div>

                <div id="question">
                    <p>3.Как се отделят елементите в таблица?</p>
                    <p><input type="radio" name="question3" value="Option1"/>a) С растояние</p>
                    <p><input type="radio" name="question3" value="Option2"/>b) С точка и запетая</p>
                    <p><input type="radio" name="question3" value="Option3"/>c) Със запетая</p>
                    <p><input type="radio" name="question3" value="Option4"/>d) С наклонена черта</p>
                </div>

                <div id="question">
                    <p>4.Има ли значение подредбата на името и типа когато задаваме елемент в таблица?</p>
                    <p><input type="radio" name="question4" value="Option1"/>a) Не</p>
                    <p><input type="radio" name="question4" value="Option2"/>b) Да, първо се пише типа и след това името</p>
                    <p><input type="radio" name="question4" value="Option3"/>c) Да, първо се пише името и след това типа</p>
                    <p><input type="radio" name="question4" value="Option4"/>d) Подребата зависи от вида на таблицата</p>
                </div>

                <div id="question">
                    <p>5.Каква е разликата между char и varchar?</p>
                    <p><input type="radio" name="question5" value="Option1"/>a) Няма разлика</p>
                    <p><input type="radio" name="question5" value="Option2"/>b) varchar е по голямо от char</p>
                    <p><input type="radio" name="question5" value="Option3"/>c) varchar е с фиксирана дължина, докато char е с променлива</p>
                    <p><input type="radio" name="question5" value="Option4"/>d) varchar е с променлива дължина, докато char е с фиксирана</p>
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