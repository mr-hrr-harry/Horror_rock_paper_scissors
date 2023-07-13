const buttonPlay = new Audio("./AudioFiles/button_click_pop.mp3")
const crrtClick = new Audio("AudioFiles/crrt_fill_click.mp3")
const wrongClick = new Audio("./AudioFiles/wrong_click.mp3")
const winApplaud = new Audio("./AudioFiles/winning_applasue.mp3")
const winTrumpet = new Audio("./AudioFiles/winning_trumpets.mp3")
const failure = new Audio("./AudioFiles/failure_sound.mp3")

function init(){
    buttonPlay.play()
    document.getElementById('mainDiv').removeAttribute('style')
    let optGrp = document.getElementById('optGrp')
    optGrp.removeAttribute('style')
    
    document.getElementById('scoreBoard').removeAttribute('style')
    document.getElementById('startBtn').setAttribute('style', 'display: none')
    document.getElementById('refBtn').removeAttribute('hidden')
    document.getElementById('statusBar').removeAttribute('style')

    console.log("Points Table:\nRound    UserInput    CompInput    User    Comp")
}

function refresh(){
    buttonPlay.play()
    location.reload()
}

let ct=0, Act=0, Bct=0, user, comp, uCt=0, cCt=0, st
let btnId

let ar=['Rock', 'Papr', 'Scis']

let scoreU = document.getElementById("scoreA")
let scoreC = document.getElementById("scoreB")

let lead = document.getElementById("lead")
let turn = document.getElementById("turn")
let curr = document.getElementById("curr")

const rps = (event)=>{
    if(ct==9){
        wrongClick.play()
        alert("Match over. Start again!")
        return;
    }
    else{   
        ct++
        btnId = event.target.id 
        // console.log(btnId)
        let btnName = document.getElementById(btnId)

        crrtClick.play()
        if(btnName.innerHTML=="✊🏻"){
            document.getElementById("playerDiv").innerHTML="✊🏻"
            //document.getElementById("playerSymbol").innerText="ROCK"
            user=0
        }
        else if(btnName.innerHTML=="🖐🏻"){
            document.getElementById("playerDiv").innerHTML="🖐🏻"
            //document.getElementById("playerSymbol").innerText="PAPER"
            user=1
        }
        else{
            document.getElementById("playerDiv").innerHTML="✌🏻"
            //document.getElementById("playerSymbol").innerText="SCISSORS"
            user=2
        }

        comp = Math.floor(Math.random() * (Math.floor(Math.random()*100)) ) % 3

        if(comp==0){
            document.getElementById("computerDiv").innerHTML="✊🏻"
        }
        else if(comp==1){
            document.getElementById("computerDiv").innerHTML="🖐🏻"
        }
        else{
            document.getElementById("computerDiv").innerHTML="✌🏻"
        }

        st='x'
        if(user==0){
            if(comp==1){
                st='c'
                cCt++
                scoreC.innerText=cCt
            }
            else if(comp==2){
                st='u'
                uCt++
                scoreU.innerText=uCt
            }
        }
        else if(user==1){
            if(comp==0){
                st='u'
                uCt++
                scoreU.innerText=uCt
            }
            else if(comp==2){
                st='c'
                cCt++
                scoreC.innerText=cCt
            }
        }
        else{
            if(comp==0){
                st='c'
                cCt++
                scoreC.innerText=cCt
            }
            else if(comp==1){
                st='u'
                uCt++
                scoreU.innerText=uCt
            }
        }

        lead.innerText = `Lead: ${uCt>cCt ? "You" : uCt<cCt ? "Computer" : "None"}`
        turn.innerText = `Round: ${ct}/9`
        curr.innerText = `Status: ${st=='u' ? "Your luck!" : st=='c' ? "Computer luck!" : "Tie round!"}`

        console.log(`   ${ct}       ${ar[user]}          ${ar[comp]}        ${uCt}       ${cCt}`)

        if(ct == 9){
            terminate()
        }
    }
}

function terminate(){
    if(uCt > cCt){

        const gify = document.createElement("IMG")
        gify.id = "gifImg"
        gify.setAttribute("src", "./Images/winner_popper.gif")
        document.getElementById("mainDiv").prepend(gify)

        winTrumpet.play()
        winApplaud.play()
        
        curr.style.color = "#00ff00"
        curr.innerHTML = "You won!"

    }
    else{
        failure.play()
        curr.style.color = "#ff0000"
        if(uCt==cCt){
            curr.innerHTML = "Match draw!"
        }
        else{
            curr.innerHTML = "Computer won!"
        }
    }
    console.log("Match Over!")
}
