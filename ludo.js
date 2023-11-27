let dice=document.querySelector(".dice");
const lockera=document.querySelector(".fcbox1");
const lockerb=document.querySelector(".srbox8");
var chance=0;
let tockena1=0;
let tockena2=0;
let tockenb1=0;
let tockenb2=0;
const firstrow=document.querySelectorAll("#firstrow .frbox");
const secondcolumn=document.querySelectorAll("#secondcolumn .scbox");
const firstcolumn=document.querySelectorAll("#firstcolumn .fcbox");
const secondrow=document.querySelectorAll("#secondrow .srbox");
var n=0;
dice.addEventListener('click',()=>{
    var n=dice.innerHTML=Math.floor((Math.random()*6)+1);
});
const ab=document.querySelector(".chance");
while((tockena1==32 && tockena2==32)||(tockenb1==18 && tockenb2==18)){
    dice.addEventListener('click',()=>{
        var n=dice.innerHTML=Math.floor((Math.random()*6)+1);
    });
    if(chance%2==0){
        ab.innerHTML="Chance is A";
        if(tockena1==1){
            if(n!=6){
                chance++;
            }
            if(n=6){
                tockena1=tockena1+n;
            }
        }     
        tockena1=tockena1+n;
        if(n!=6){
            chance++;
        }
        if(tockena1==tockenb1|| tockena2==tockenb1){
            tockenb1=17;
        }
        else if(tockena1==tockenb2 || tockena2==tockenb2){
            tockenb2=17;
        }
        for(var i=0;i<7;i++){
            if(firstrow[i].innerHTML==tockena1){
                firstrow[i].style.backgroundColor="pink";
                firstrow[i].innerHTML="Token A1";
                break;
            }
            if(firstrow[i].innerHTML==tockena2){
                firstrow[i].style.backgroundColor="pink";
                firstrow[i].innerHTML="Token A2";
                break;
            }
        }
        for(var i=0;i<7;i++){
            if(firstcolumn[i].innerHTML==tockena1){
                firstcolumn[i].style.backgroundColor="pink";
                firstcolumn[i].innerHTML="Token A1";
                break;
            }
            if(firstcolumn[i].innerHTML==tockena2){
                firstcolumn[i].style.backgroundColor="pink";
                firstcolumn[i].innerHTML="Token A2";
                break;
            }
        }
        for(var i=0;i<7;i++){
            if(secondrow[i].innerHTML==tockena1){
                secondrow[i].style.backgroundColor="pink";
                secondrow[i].innerHTML="Token A1";
                break;
            }
            if(secondrow[i].innerHTML==tockena2){
                secondrow[i].style.backgroundColor="pink";
                secondrow[i].innerHTML="Token A2";
                break;
            }
        }
        for(var i=0;i<7;i++){
            if(firstcolumn[i].innerHTML==tockena1){
                firstcolumn[i].style.backgroundColor="pink";
                firstcolumn[i].innerHTML="Token A1";
                break;
            }
            if(firstcolumn[i].innerHTML==tockena2){
                firstcolumn[i].style.backgroundColor="pink";
                firstcolumn[i].innerHTML="Token A2";
                break;
            }
        }
    }
    else if(chance%2!=0){
        ab.innerHTML="Chance is B";
        if(tockena1==1){
            if(n!=6){
                chance++;
            }
            if(n=6){
                tockena1=tockena1+n;
            }
        }  
        tockenb1=tockenb1+n;
        if(n!=6){
            chance++;
        }
        if(tockenb1==tockena1|| tockenb2==tockena1){
            tockena1=1;
        }
        else if(tockenb2==tockena2 || tockenb2==tockena2){
            tockena2=1;
        }
        for(var i=0;i<7;i++){
            if(firstrow[i].innerHTML==tockena1){
                firstrow[i].style.backgroundColor="pink";
                firstrow[i].innerHTML="Token B1"
                break;
            }
            if(firstrow[i].innerHTML==tockena2){
                firstrow[i].style.backgroundColor="pink";
                firstrow[i].innerHTML="Token B2"
                break;
            }
        }
        for(var i=0;i<7;i++){
            if(firstcolumn[i].innerHTML==tockenb1){
                firstcolumn[i].style.backgroundColor="pink";
                firstcolumn[i].innerHTML="Token B1"
                break;
            }
            if(firstcolumn[i].innerHTML==tockenb2){
                firstcolumn[i].style.backgroundColor="pink";
                firstcolumn[i].innerHTML="Token B2"
                break;
            }
        }
        for(var i=0;i<7;i++){
            if(secondrow[i].innerHTML==tockenb1){
                secondrow[i].style.backgroundColor="pink";
                secondrow[i].innerHTML="Token B1"
                break;
            }
            if(secondrow[i].innerHTML==tockenb1){
                secondrow[i].style.backgroundColor="pink";
                secondrow[i].innerHTML="Token B2"
                break;
            }
        }
        for(var i=0;i<7;i++){
            if(firstcolumn[i].innerHTML==tockenb1){
                firstcolumn[i].style.backgroundColor="pink";
                firstcolumn[i].innerHTML="Token B1"
                break;
            }
            if(firstcolumn[i].innerHTML==tockenb1){
                firstcolumn[i].style.backgroundColor="pink";
                firstcolumn[i].innerHTML="Token B2"
                break;
            }
        }
    }

}
if(tockena1==32 && tockena2==32){
    alert("A wins");
}
else if(tockenb1==18 && tockenb2==18){
    alert("B wins");
}