// boxes selection 

let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset_box");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg =document.querySelector("#msg");
// turn ko bana lete hai 
let turn0=true;

//wininhg pattern set 
 const winpattern=[
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8]
 ]
 const resetGame =()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
 }

 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

        // 0 0r X selector
       if(turn0){
        box.innerText="0";
        turn0=false;
       }
       else{
        box.innerText="x";
        turn0=true;
       }
       // box ke ander jo bhi aaye usko fix kar denge
       box.disabled=true;

       // checking winner 
       checkwinner();

    });
 });

 //after winner is dicided so all boxes are should undisplayed 
 let disableboxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }
 let enableboxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }





  const showwinner =(winner)=>{
    msg.innerText=`congratulation,winner is ${winner}`;
    //hide is removed by down function 
    msgcontainer.classList.remove("hide");
    // call disabled boxes arrow function 
       disableboxes();
  }
 const checkwinner=()=>{
    for(pattern of winpattern){
        //box selector or box numbering in game
        
   let pos1val= boxes[pattern[0]].innerText;
   let pos2val= boxes[pattern[1]].innerText;
   let pos3val= boxes[pattern[2]].innerText;
   if(pos1val!=""&& pos2val!= "" && pos3val !=""){
    if(pos1val===pos2val && pos2val===pos3val){
        // winner showing function 
        showwinner(pos1val);
    }
   }
        
    }
 };

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


 