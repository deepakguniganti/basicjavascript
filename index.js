var randomNumber1=Math.floor(((Math.random())*6)+1)
var randomNumber2=Math.floor(((Math.random())*6)+1)
function play1()
{
if (randomNumber1===1 ){
  document.querySelector(".img1").setAttribute("src","images/dice1.png")
}
else if(randomNumber1===2 ){
  document.querySelector(".img1").setAttribute("src","images/dice2.png")
}
else if(randomNumber1===3){
  document.querySelector(".img1").setAttribute("src","images/dice3.png")
}
else if(randomNumber1===4){
  document.querySelector(".img1").setAttribute("src","images/dice4.png")
}
else if(randomNumber1===5){
  document.querySelector(".img1").setAttribute("src","images/dice5.png")
}
else if(randomNumber1===6){
  document.querySelector(".img1").setAttribute("src","images/dice6.png")
}
}
function play2()
{
if (randomNumber2===1 ){
    document.querySelector(".img2").setAttribute("src","images/dice1.png")
}
else if(randomNumber2===2 ){
  document.querySelector(".img2").setAttribute("src","images/dice2.png")
}
else if(randomNumber2===3){
  document.querySelector(".img2").setAttribute("src","images/dice3.png")
}
else if(randomNumber2===4){
  document.querySelector(".img2").setAttribute("src","images/dice4.png")
}
else if(randomNumber2===5){
  document.querySelector(".img2").setAttribute("src","images/dice5.png")
}
else if(randomNumber2===6){
  document.querySelector(".img2").setAttribute("src","images/dice6.png")
}
}
function winner()
{
  if(randomNumber1>randomNumber2)
  {
    document.querySelector("h1").innerHTML="🚩player 1 is the winner"
  }
  else if(randomNumber1<randomNumber2)
  {
    document.querySelector("h1").innerHTML="🚩player 2 is the winner"

  }
  else{
    document.querySelector("h1").innerHTML="Draw 🏳match"
  }
}

play1();
play2();
winner();
