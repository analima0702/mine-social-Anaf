let likeCount = 0;
let curtido = false; //flag booleana


function curtir() {
 
if(curtido == false){
  likeCount++;
  curtido = true;
  DocumentType.getElementById("LikeCount").innerText = likeCount;
} else{
  likeCount--;
  curtido = false;
  DocumentType.getElementById("LikeCount").innerText = likeCount;
}


}

document.getElementById("likeBtn").addEventListener("click", curtir);
