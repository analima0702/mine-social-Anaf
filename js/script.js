let likeCount = 0;
let curtido = false; // flag booleana

let descurtirCount = 0;
let descurtido = false; // flag booleana

function curtir() {

 if(curtido == false){
    likeCount++;
    curtido = true;
    document.getElementById("likeCount").innerText = likeCount;
 }else{
    likeCount--;
    curtido = false;
    document.getElementById("likeCount").innerText = likeCount;
 }

function descurtir(){
 if(descurtir == false){
    descurtirCount++;
    descurtir = true;
    document.getElementById("descurtirCount").innerText = liketirCount;
 }else{
   descurtirCount --;
    descurtir = false;
    document.getElementById("descurtirCount").innerText = descurtirCountt;


}
  
}

document.getElementById("likeBtn").addEventListener("click", curtir);
document.getElementById("destirlikeBtn").addEventListener("click", descurtir);