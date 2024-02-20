// let text=document.getElementById("message").textContent;
// console.log(text);
// document.getElementById("message").textContent='we changed it';
//  let text= document.querySelector('#message').textContent;
//     console.log(text);

// // let a=document.getElementsById("guess").value;
// // console.log(a);

let snumber=Math.trunc(Math.random()*20)+1;
console.log(snumber);
let soc=20;
let highscore=0;
function guessthegame()
{

    let guess= document.querySelector('.guess').value;
    console.log(guess);
 if(soc>0)
 {
    if(!guess)
    {
        document.querySelector('#message').textContent="❌ Number NOT Entered"; 

    }

else if(guess==snumber)
{
    document.querySelector('#message').textContent="✅ Correct Guess";
    document.querySelector('body').style.backgroundColor="green";
    document.querySelector('.number').textContent=snumber;

    if(soc>highscore)
    {
        document.querySelector('.highscore').textContent=soc;
        highscore=soc;
    }
}
    else if(guess>snumber)
    {
        soc--;
        document.querySelector('#message').textContent="⬆️ Too High";
        document.querySelector('.score').textContent=soc;
    }
else if(guess<snumber)
    {
        soc--;
        document.querySelector('#message').textContent="⬇️ Too Low";
        document.querySelector('.score').textContent=soc;
    }

}
//if ended
    else{
        document.querySelector('#message').textContent="❌Game Over";
        document.querySelector('body').style.backgroundColor="red";
    }
}

function gameReset(){
    soc=20
    snumber=Math.trunc(Math.random()*20)+1;
    console.log(snumber);
    document.querySelector('#message').textContent="Start guessing...";
    document.querySelector('body').style.backgroundColor="#000";
    document.querySelector('.guess').value='';
    document.querySelector('.score').textContent=soc;
    document.querySelector('.number').textContent='?';
}
