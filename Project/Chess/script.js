const score0=document.querySelector('#score--0');
const score1=document.querySelector('#score--1');
const dice=document.querySelector('.dice');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');

const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');

let currentscore=0;
let activeplayer=0; //o or 1
let score;

let start=function()
{
score=[0,0];
score0.textContent=0;
score1.textContent=0;
dice.classList.add('hidden');
}
start();
function switchPlayer()
{
currentscore=0;
document.querySelector(`#current--${activeplayer}`).textContent=currentscore;
document.querySelector(`.player--${activeplayer}`).classList.remove('player--active')
activeplayer=activeplayer==0?1:0;
document.querySelector(`.player--${activeplayer}`).classList.add('player--active');

}

btnroll.addEventListener('click',function(){

const imgurl=Math.trunc(Math.random()*6+1);
dice.classList.remove('hidden');
dice.src=`dice-${imgurl}.png`

if(imgurl!=1)
{
currentscore+=imgurl;
document.querySelector(`#current--${activeplayer}`).textContent=currentscore;
}
else{
    switchPlayer();
}
})

btnhold.addEventListener('click',function()
{

score[activeplayer]+=currentscore;
document.querySelector(`#score--${activeplayer}`).textContent=score[activeplayer];
switchPlayer();


})