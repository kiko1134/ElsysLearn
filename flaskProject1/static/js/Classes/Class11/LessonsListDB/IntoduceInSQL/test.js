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

        if (q1 === "Option1"){grade++}
        if (q2 === "Option1"){grade++}
        if (q3 === "Option1"){grade++}
        if (q4 === "Option1"){grade++}
        if (q5 === "Option1"){grade++}
        if (q6 === "Option1"){grade++}

        if (grade>4){
            alert("Поздравления, Васил! Вие сте гений! Оценка: " + grade)
        }
        else if(grade>2 && grade<5){
            alert("Вашата оценка е: " + grade + ". Мооже би бихте искали да изгледате видеото наново?")
        }
        else {
            alert("Лошо! Изкарахте: " + grade + ". Не се предавайе! Изгледайте видеото отново и направете теста пак!")
        }
    }


    render() {
        return (
            <form name="quiz" id="quiz">
                <div id="question">
                    <p>1.Question1?</p>
                    <p><input type="radio" name="question1" value="Option1"/>a) Option1</p>
                    <p><input type="radio" name="question1" value="Option2"/>b) Option2</p>
                    <p><input type="radio" name="question1" value="Option3"/>c) Option3</p>
                    <p><input type="radio" name="question1" value="Option4"/>d) Option4</p>
                </div>

                <div id="question">
                    <p>2.Question2?</p>
                    <p><input type="radio" name="question2" value="Option1"/>a) Option1</p>
                    <p><input type="radio" name="question2" value="Option2"/>b) Option2</p>
                    <p><input type="radio" name="question2" value="Option3"/>c) Option3</p>
                    <p><input type="radio" name="question2" value="Option4"/>d) Option4</p>
                </div>

                <div id="question">
                    <p>3.Question3?</p>
                    <p><input type="radio" name="question3" value="Option1"/>a) Option1</p>
                    <p><input type="radio" name="question3" value="Option2"/>b) Option2</p>
                    <p><input type="radio" name="question3" value="Option3"/>c) Option3</p>
                    <p><input type="radio" name="question3" value="Option4"/>d) Option4</p>
                </div>

                <div id="question">
                    <p>4.Question4?</p>
                    <p><input type="radio" name="question4" value="Option1"/>a) Option1</p>
                    <p><input type="radio" name="question4" value="Option2"/>b) Option2</p>
                    <p><input type="radio" name="question4" value="Option3"/>c) Option3</p>
                    <p><input type="radio" name="question4" value="Option4"/>d) Option4</p>
                </div>

                <div id="question">
                    <p>5.Question5?</p>
                    <p><input type="radio" name="question5" value="Option1"/>a) Option1</p>
                    <p><input type="radio" name="question5" value="Option2"/>b) Option2</p>
                    <p><input type="radio" name="question5" value="Option3"/>c) Option3</p>
                    <p><input type="radio" name="question5" value="Option4"/>d) Option4</p>
                </div>

                <div id="question">
                    <p>6.Question6?</p>
                    <p><input type="radio" name="question6" value="Option1"/>a) Option1</p>
                    <p><input type="radio" name="question6" value="Option2"/>b) Option2</p>
                    <p><input type="radio" name="question6" value="Option3"/>c) Option3</p>
                    <p><input type="radio" name="question6" value="Option4"/>d) Option4</p>
                </div>

                <input type="button" name="" value="I'm done!" id="button" onClick={this.Check}/>
            </form>
        )
    }
}