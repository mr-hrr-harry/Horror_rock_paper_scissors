const buttonPlay = new Audio("./AudioFiles/button_click_pop.mp3")

function init(){
    buttonPlay.play()
    document.getElementById('mainDiv').removeAttribute('style')
    let optGrp = document.getElementById('optGrp')
    optGrp.removeAttribute('style')
    
    document.getElementById('scoreBoard').removeAttribute('style')
    document.getElementById('startBtn').setAttribute('style', 'display: none')
    document.getElementById('refBtn').removeAttribute('hidden')
}

function refresh(){
    buttonPlay.play()
    location.reload()
}

let ct=0

const rps = (event)=>{
    if(ct==9){
        alert("Match over. Start again!")
        return;
    }
    else{

        ct++
    }
}

function terminate(){

}