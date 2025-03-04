let ys=0;  // user's score
let cs=0;  // computer's score

const choices=document.querySelectorAll(".choice");  // selecting all choice elements
const msg=document.querySelector("#msg");  // selecting message container
const us=document.querySelector("#you");  // selecting user's score element
const Cs=document.querySelector("#comp");  // selecting computer's score element

const gencompchoice=()=>{  
    const op=["rock","paper","scissor"];  // array of choices
    let x=Math.floor(Math.random()*3);  // generating random index between 0 and 2
    return op[x];  // returning random choice
}
const showwin=(uw)=>{  
    if(uw){  // if user wins
        msg.innerText="You won";  
        msg.style.backgroundColor="green";  
        ys+=1;  // increasing user's score
        us.innerText=ys;  // updating user's score display
    }
    else{  // if computer wins
        msg.innerText="Computer Won";  
        msg.style.backgroundColor="red";  
        cs+=1;  // increasing computer's score
        Cs.innerText=cs;  // updating computer's score display
    }
}
const drawGame=()=>{  
    msg.innerText="Draw";  // setting draw message
    msg.style.backgroundColor="#081b31";  // setting draw background color
}
const playgame=(userchoice)=>{  
   // console.log(userchoice);
    let compchoice=gencompchoice();  // getting computer's choice
   // console.log(compchoice);
    if(userchoice==compchoice){  // checking if game is a draw
        drawGame();
    }
    else{  
        let uw=true;  // assuming user wins
        if(userchoice=="rock"){  
            if(compchoice=="paper"){ uw=false;}  // rock loses to paper
        }
        else if(userchoice=="paper"){  
            if(compchoice=="scissor"){ uw=false;}  // paper loses to scissors
        }
        else{  
            if(compchoice=="rock"){ uw=false;}  // scissors lose to rock
        }
        showwin(uw);  // calling function to update result
    }
}
choices.forEach((choice)=>{  
   // console.log(choice);
    choice.addEventListener("click",()=>{  // adding event listener to each choice
        const choiceid=choice.getAttribute("id");  // getting the id of clicked choice
       // console.log("Choice clicked",choiceid);
        playgame(choiceid);  // starting game with user's choice
    });
});
