function start(){
    document.getElementById("start").style.visibility="hidden";
    document.getElementById("back").style.visibility="hidden";
    document.getElementById("rock").style.visibility="visible";
    document.getElementById("paper").style.visibility="visible";
    document.getElementById("scissors").style.visibility="visible";
}
clickedHand=["<img src='stone.png' id='img1'>","<img src='paper.png' id='img1'>","<img src='scissors.png' id='img1'>"];

clickedRightHand=["<img src='stone.png' id='img2'>","<img src='paper.png' id='img2'>","<img src='scissors.png' id='img2'>"];

function game(position){
    document.getElementById("img1").style.animation='shakeLeft 0.7s 3 ease-in-out';
    
    
    document.getElementById("img2").style.animation='shakeRight 0.7s 3 ease-in-out';
    var random=Math.floor(Math.random()*3);
    setTimeout(()=>{
        document.getElementById("hand2").innerHTML=clickedRightHand[random];
        document.getElementById("hand1").innerHTML=clickedHand[position];
    },2000);
    setTimeout(()=>{
        if(random==position){
            alert("MATCH DRAW !!");
            window.location.reload();
        }
        else if(position==1 && random==0){
            alert("CONGRATS! YOU WIN");
            window.location.reload();
        }
        else if(position==2 && random==1){
            alert("CONGRATS! YOU WIN");
            window.location.reload();
        }
        else if(position==0 && random==2){
            alert("CONGRATS! YOU WIN");
            window.location.reload();
        }
        else{
            alert("COMPUTER WIN,BETTER LUCK NEXT TIME");
            window.location.reload();
        }
    },2500);
}
