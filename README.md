# Adding a test form

In this POC I will show how to add a QA test form in your site.

## 1. Getting our questions

To make a test, we first need to write our questions.\
For that purpose we make an html form where we add all our questions.\


Your code must should look like this:

```html
<form name="quiz" id="quiz">
     <div id="question">
           <p>1. Какво правят джойн заявките?</p>
     <div id="question">                       
</form>
```
## 2. Adding answer

For the answers we will use an input form too see if the answer is selected or not. \

You code should look like this:

```html
<div id="question">
      <p>1. Какво правят джойн заявките?</p>
      <p><input type="radio" name="question1" value="Option1"/>a) Служат за обединяване на бази</p>
      <p><input type="radio" name="question1" value="Option2"/>b) Служат за комбиниране на редове от две или повече таблици</p>
      <p><input type="radio" name="question1" value="Option3"/>c) Служат за добавяне на елементи в таблица</p>
      <p><input type="radio" name="question1" value="Option4"/>d) И трите отговора са верни</p>
</div>             
```

## 3. Getting the grade after solving the test

The logic behind this test form is simple.

### A.Taking the results from every question

We assign the value from every question to a variable:

```java
        var q1 = document.quiz.question1.value;
```
We create a variale where we will store the result (the grade):
```java
        var grade = 0;
```

### B. Checking if the given answer is correct

To check if the answer is correct we verrify wheater the input is correct or not. \
If the answer is correct we increment the variable that we used to asign the grade. \

Here is an implementation: 

```java
            if (q1 === "Option4"){grade++}
```
### C. Show every user their grade

To show every user's result we make a pop-up screen. \
For this purpose we used the alert function.\

Here is an example:
```java
if (grade>4)
   {
        alert("Excellent. Your grade is : " + grade)
   }
```
### D. The code
```java
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
```
