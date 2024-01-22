var startSection = document.querySelector(".startSection")
var startBtn = document.querySelector(".start")
var quizSection = document.querySelector(".quizsection")
var questionEl = document.querySelector(".question")
var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
var btn3 = document.querySelector("#btn3")
var btn4 = document.querySelector("#btn4")
var scoreSection = document.querySelector(".scoreSection")
var scoreList = document.querySelector("#score")
var restartBtn = document.querySelector(".restart")

var questions = [
    {
question:"What does HTML stand for?",
Option1:"Hitmonlee",
Option2:"Hyper Text Markup Language",
Option3:"Hot Meal",
Option4:"Hotmail"
    },
    {
question:"What does CSS stand for?",
Option1:"Hitmonlee",
Option2:"Cascading Style Sheets",
Option3:"Hot Meal",
Option4:"Hotmail"
    },
    {
question:"What does JS stand for?",
Option1:"Hitmonlee",
Option2:"JavaScript",
Option3:"Hot Meal",
Option4:"Hotmail"
    },
]
var index = 0
var seconds = 60
startBtn.addEventListener("click", function(){
    startSection.style="display:none"
    quizSection.style="display:block"
    questionEl.textContent=questions[index].question
    btn1.textContent=questions[index].Option1
    btn2.textContent=questions[index].Option2
    btn3.textContent=questions[index].Option3
    btn4.textContent=questions[index].Option4
    btn1.addEventListener("click",nextQuestion)
    btn2.addEventListener("click",nextQuestion)
    btn3.addEventListener("click",nextQuestion)
    btn4.addEventListener("click",nextQuestion)
})

function nextQuestion(){
    index++ 
    if (index == questions.length){
        quizSection.style="display:none"
        scoreSection.style="display:block"
        var initals= prompt("enter your initals")
        var li = document.createElement("li")
        li.textContent=initals+": "+seconds
        scoreList.appendChild(li)
    } else{

        questionEl.textContent=questions[index].question
        btn1.textContent=questions[index].Option1
        btn2.textContent=questions[index].Option2
        btn3.textContent=questions[index].Option3
        btn4.textContent=questions[index].Option4
    }
}

function timer(){
    setInterval(function(){
seconds--
document.querySelector("#timer").textContent=seconds
    },1000)
}

restartBtn.addEventListener("click", function(){
    window.location.reload()
})