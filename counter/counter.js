const DEC=document.getElementById("dec");
const INC=document.getElementById("inc");
const RES=document.getElementById("res");
 
const CL=document.getElementById("cl");

let count=0;

INC.onclick=function(){
    count++;
    CL.textContent=count;
}
DEC.onclick=function(){
    count--;  
    CL.textContent=count;
}
RES.onclick=function(){
    count=0;
    CL.textContent=count;
}