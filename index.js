//dice 1
var n1=Math.floor(Math.random()*6);
n1=n1+1;
var randomDice1="images/"+"dice"+n1+".png";
//dice 2
var n2=Math.floor(Math.random()*6);
n2=n2+1;
var randomDice2="images/"+"dice"+n2+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDice1);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDice2);
if(n1>n2)
{
document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if(n2>n1)
{
   document.querySelector("h1").innerHTML="Player 2 wins! 🚩"; 
}
else if (n1===n2)
{
    document.querySelector("h1").innerHTML="Draw!"; 
}