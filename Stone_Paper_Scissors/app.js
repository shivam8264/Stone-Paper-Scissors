let user=0;
let comp=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore=document.querySelector("#user-score");
const comScore=document.querySelector("#com-score");
const restart=document.querySelector("#restart");

const Draw=()=>{
    msg.innerText="Game Was Draw,Play Again!";
    msg.style.backgroundColor="#081b31";
}

const updateScore=()=>{
    userScore.innerHTML=user;
    comScore.innerText=comp;
}

const showWinner=(userWin,userChoice,comp_choice)=>{
    if (userWin){
        user++;
        msg.innerText=`You Win! Your ${userChoice} beats ${comp_choice}`;
        msg.style.backgroundColor="#0BDA51";
    }
    else{
        comp++;
        msg.innerText=`You lose, ${comp_choice} beats your ${userChoice}`;
        msg.style.backgroundColor="#FF3800";
    }
    updateScore();
}

const playGame=(userChoice)=>{
    const random_no=Math.floor(Math.random()*3);
    const options=["Stone","Paper","Scissors"];
    const comp_choice=options[random_no];
    if(userChoice===comp_choice){
        Draw();
    }
    else{
        let userWin =true;
        if (userChoice==="Stone"){
            //paper,scissors
            userWin=comp_choice==="Scissors" ? true : false;
        }
        else if(userChoice==="Paper"){
            //stone,scissors
            userWin=comp_choice==="Stone" ? true : false;
        }
        else{
            //stone,paper
            userWin=comp_choice==="Paper" ? true : false;
        }
        showWinner(userWin,userChoice,comp_choice);
    }
}

restart.addEventListener("click",()=>{
    user=0;
    comp=0;
    userScore.innerText="0";
    comScore.innerText="0";
});

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});