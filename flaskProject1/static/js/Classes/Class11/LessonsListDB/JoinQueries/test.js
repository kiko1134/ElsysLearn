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
        if (q2 === "Option1"){grade++}
        if (q3 === "Option2"){grade++}
        if (q4 === "Option3"){grade++}
        if (q5 === "Option1"){grade++}
        if (q6 === "Option2"){grade++}

        if (grade>4){
            alert("Поздравления, Васил! Вие сте гений! Оценка: " + grade)
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
                    <p>1. Какво правят джойн заявките?</p>
                    <p><input type="radio" name="question1" value="Option1"/>a) Служат за обединяване на бази</p>
                    <p><input type="radio" name="question1" value="Option2"/>b) Служат за комбиниране на редове от две или повече таблици</p>
                    <p><input type="radio" name="question1" value="Option3"/>c) Служат за добавяне на елементи в таблица</p>
                    <p><input type="radio" name="question1" value="Option4"/>d) И трите отговора са верни</p>
                </div>

                <div id="question">
                    <p>2. Какво прави Inner join?</p>
                    <p><input type="radio" name="question2" value="Option1"/>a) Взима общите елементи на две таблици</p>
                    <p><input type="radio" name="question2" value="Option2"/>b) Взима всички елементи от лявата таблица и общите между двете</p>
                    <p><input type="radio" name="question2" value="Option3"/>c) Взима всички елементи от дясната таблица и общите между двете</p>
                    <p><input type="radio" name="question2" value="Option4"/>d) Нито един от посочените</p>
                </div>

                <div id="question">
                    <p>2. Какво прави Left join?</p>
                    <p><input type="radio" name="question2" value="Option1"/>a) Взима общите елементи на две таблици</p>
                    <p><input type="radio" name="question2" value="Option2"/>b) Взима всички елементи от лявата таблица и общите между двете</p>
                    <p><input type="radio" name="question2" value="Option3"/>c) Взима всички елементи от дясната таблица и общите между двете</p>
                    <p><input type="radio" name="question2" value="Option4"/>d) Нито един от посочените</p>
                </div>

                <div id="question">
                    <p>2. Какво прави Right join?</p>
                    <p><input type="radio" name="question2" value="Option1"/>a) Взима общите елементи на две таблици</p>
                    <p><input type="radio" name="question2" value="Option2"/>b) Взима всички елементи от лявата таблица и общите между двете</p>
                    <p><input type="radio" name="question2" value="Option3"/>c) Взима всички елементи от дясната таблица и общите между двете</p>
                    <p><input type="radio" name="question2" value="Option4"/>d) Нито един от посочените</p>
                </div>

                <div id="question">
                    <p>5. Кое е жизненоважно, за да можем да осъществим join между две таблици?</p>
                    <p><input type="radio" name="question2" value="Option1"/>a) Да имат еднакъв брой променливи</p>
                    <p><input type="radio" name="question2" value="Option2"/>b) Да имат колона, която и в двете таблици играе една и съща роля</p>
                    <p><input type="radio" name="question2" value="Option3"/>c) Да имат timestamp</p>
                    <p><input type="radio" name="question2" value="Option4"/>d) Нито един от посочените</p>
                </div>

                <div id="question">
                    <p>5. Може ли в една джойн заявка да вкараме друга?</p>
                    <p><input type="radio" name="question2" value="Option1"/>a) Да</p>
                    <p><input type="radio" name="question2" value="Option2"/>b) Не</p>
                    <p><input type="radio" name="question2" value="Option3"/>c) Само в някои случаи</p>
                    <p><input type="radio" name="question2" value="Option4"/>d) Нито един от посочените</p>
                </div>

                <input type="button" name="" value="I'm done!" id="button" onClick={this.Check}/>
            </form>
        )
    }
}