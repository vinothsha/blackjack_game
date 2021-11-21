let n1=createRandom()
let n2=createRandom()
let ar=[n1,n2]
let isNextCard=true
let hasLeft=true
let sum=0
let player={
    pName:'Vinoth',
    chips:2000
}
var cardCat=document.querySelector('#card-el')
var wantCat=document.getElementById('want')
var sumCat=document.getElementById('sum-el')
document.querySelector('#player-name').textContent='Name :'+player.pName
document.getElementById('player-chips').innerHTML='Chips :$'+player.chips
function createRandom(){
    return Math.floor(Math.random()*13)+1
    //math.floor(math.random)*13-->0-12
    //(math.floor(math.random)*13)+1-->1-13
}
const renderGame=()=>{
    startGame()
}
const startGame=()=>{
    if(sum<=21){
    for(i of ar)
    {
        sum+=i
    }
    sumCat.innerHTML='sum :'+sum
    cardCat.innerHTML='card :'+ar[0]+" "+ar[1]+" "
    if(sum<21){
        wantCat.textContent='Do you want a next card'

    }
    else if(sum==21){
        wantCat.innerText='wohoo!,you have got a blackJack'
        isNextCard=false
    }
    else{
        wantCat.textContent='You Loss and Out of the Game or you are run out of the game'
        hasLeft=false
    }}
}

function nextGame(){
    let n3=createRandom()
    ar.push(n3)
    if(isNextCard==true && hasLeft==true && sum<=21)
      {  sum=0
        startGame()
    cardCat.innerHTML+=ar[2]
    sumCat.textContent='sum :'+sum}
}




