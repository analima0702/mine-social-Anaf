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
}

function descurtir(){
 if(descurtido == false){
    descurtirCount++;
    descurtido = true;
    document.getElementById("descurtirCount").innerText = descurtirCount;
 }else{
   descurtirCount--;
   descurtido = true;
    document.getElementById("descurtirCount").innerText = descurtirCount;
}
  
}

document.getElementById("likeBtn").addEventListener("click", curtir);
document.getElementById("deslikeBtn").addEventListener("click", descurtir);