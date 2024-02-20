const score0=document.querySelector('#score--0');
const score1=document.querySelector('#score--1');
const dice=document.querySelector('.dice');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');

const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');

let currentscore0=0;
let currentscore1=0;
let activeplayer=0;
let score;

let start=function()
{
score=[0,0];
score0.textContent=0;
score1.textContent=0;
dice.classList.add('hidden')
}
start();

const switchplayer=function()
{

    document.getElementById(`current--${activeplayer}`).textContent=0;
    currentscore0=0;
    activeplayer=activeplayer===0?1:0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');

}

btnroll.addEventListener('click',function(){

const imgurl=Math.trunc(Math.random()*6+1);
dice.classList.remove('hidden');
dice.src=`dice-${imgurl}.png`;

if(imgurl!=1)
{
    currentscore0+=imgurl;
}




})
