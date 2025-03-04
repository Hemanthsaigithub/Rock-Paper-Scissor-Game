let ys=0;
let cs=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const us=document.querySelector("#you")
const Cs=document.querySelector("#comp");

const gencompchoice=()=>{
    const op=["rock","paper","scissor"];
    let x=Math.floor(Math.random()*3);
    return op[x];
}
const showwin=(uw)=>{
    if(uw){
        msg.innerText="You won";
        msg.style.backgroundColor="green";
        ys+=1;
        us.innerText=ys;
    }
    else{
        msg.innerText="Computer Won";
        msg.style.backgroundColor="red";
        cs+=1;
        Cs.innerText=cs;
    }
}
const drawGame=()=>{
    msg.innerText="Draw";
    msg.style.backgroundColor="#081b31";

}
const playgame=(userchoice)=>{
   // console.log(userchoice);
    let compchoice=gencompchoice();
   // console.log(compchoice);
    if(userchoice==compchoice){
        drawGame();
    }
    else{
        let uw=true;
        if(userchoice=="rock"){
            if(compchoice=="paper"){ uw=false;}
        }
        else if(userchoice=="paper"){
            if(compchoice=="scissor"){ uw=false;}
        }
        else{
            if(compchoice=="rock"){ uw=false;}
        }
        showwin(uw);
    }
}
choices.forEach((choice)=>{
   // console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceid=choice.getAttribute("id");
       // console.log("Choice clicked",choiceid);
        playgame(choiceid);
    });
});