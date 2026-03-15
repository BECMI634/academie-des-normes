
let score=0
let level=1

const questions=[
{
q:"Bonjour! Comment vas-tu?",
answers:[
"Bonjour! Comment vas-tu?",
"Bonjour ! Comment vas-tu ?",
"Bonjour ! Comment vas-tu?"
],
correct:2
},
{
q:"Total:25€",
answers:[
"Total:25€",
"Total : 25 €",
"Total :25€"
],
correct:1
},
{
q:"Objet:Demande d'information",
answers:[
"Objet : Demande d'information",
"Objet: Demande d'information",
"Objet :Demande d'information"
],
correct:0
}
]

let current=0

function showScreen(id){

document.querySelectorAll('.screen').forEach(s=>s.classList.add('hidden'))
document.getElementById(id).classList.remove('hidden')

}

function loadQuestion(){

let q=questions[current]

document.getElementById("question").innerText=q.q

let answersDiv=document.getElementById("answers")
answersDiv.innerHTML=""

q.answers.forEach((a,i)=>{

let btn=document.createElement("div")
btn.className="answer"
btn.innerText=a

btn.onclick=function(){

if(i===q.correct){

document.getElementById("feedback").innerText="✔ Correct"
score+=10

}else{

document.getElementById("feedback").innerText="❌ Incorrect"

}

document.getElementById("score").innerText=score

}

answersDiv.appendChild(btn)

})

}

function nextQuestion(){

current++

if(current>=questions.length){

current=0
level++
document.getElementById("level").innerText=level

}

loadQuestion()

}

function startLevel(l){

level=l
document.getElementById("level").innerText=l
showScreen("entrainement")
loadQuestion()

}

loadQuestion()
