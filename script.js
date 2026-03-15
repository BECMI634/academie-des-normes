
let score = 0
let level = 1
let current = 0
let questions = []

function showScreen(id){

document.querySelectorAll('.screen').forEach(s=>s.classList.add('hidden'))
document.getElementById(id).classList.remove('hidden')

}

function loadLevel(n){

level = n
document.getElementById("level").innerText = level

fetch("data/questions.json")
.then(r=>r.json())
.then(data=>{

questions = data.filter(q=>q.level===level)
current = 0

showScreen("training")

loadQuestion()

})

}

function loadQuestion(){

let q = questions[current]

document.getElementById("question").innerText = q.question

let answers = document.getElementById("answers")
answers.innerHTML = ""

q.answers.forEach((a,i)=>{

let div = document.createElement("div")
div.className="answer"
div.innerText=a

div.onclick=function(){

if(i===q.correct){

score += 10
document.getElementById("feedback").innerText="✔ Bonne réponse"

checkBadges()

}else{

document.getElementById("feedback").innerText="❌ Mauvaise réponse"

}

document.getElementById("score").innerText = score

}

answers.appendChild(div)

})

}

function nextQuestion(){

current++

if(current>=questions.length){

current=0

}

loadQuestion()

}

function checkBadges(){

let badge = ""

if(score>=50) badge="Typographe débutant"
if(score>=100) badge="Maître des ponctuations"
if(score>=200) badge="Gardien des normes"

document.getElementById("badges").innerText = badge

}

