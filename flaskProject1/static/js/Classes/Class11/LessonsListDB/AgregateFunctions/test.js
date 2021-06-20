function Liked() {
    const likeBtn = document.querySelector(".like__btn");
    let likeIcon = document.querySelector("#icon"),
        count = document.querySelector("#count");

    let clicked = false;


    likeBtn.addEventListener("click", () => {
        if (!clicked) {
            clicked = true;
            likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
            count.textContent++;
        } else {
            clicked = false;
            likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
            count.textContent--;
        }

    });
}


function Check() {
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

    if (grade > 4) {
        alert("Поздравления! Оценка: " + grade)
    } else if (grade > 2 && grade < 5) {
        alert("Вашата оценка е: " + grade + ". Може би бихте искали да изгледате видеото наново?")
    } else {
        alert("Лошо! Изкарахте: 2. Не се предавайте! Изгледайте видеото отново и направете теста пак!")
    }
}


