// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


// 1 modal tugadi

// Get the modal
var modall = document.getElementById("myModall");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgg = document.getElementById("myImgg");
var modalImgg = document.getElementById("img011");
var captionTextt = document.getElementById("captionn");
imgg.onclick = function(){
  modall.style.display = "block";
  modalImgg.src = this.src;
  captionTextt.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var spann = document.getElementsByClassName("closee")[0];

// When the user clicks on <span> (x), close the modal
spann.onclick = function() { 
  modall.style.display = "none";
}
// 2 modal tugadi///////////////////////////////////////////////////////////

// Get the modal
var modalll = document.getElementById("myModalll");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imggg = document.getElementById("myImggg");
var modalImggg = document.getElementById("img0111");
var captionTexttt = document.getElementById("captionnn");
imggg.onclick = function(){
  modalll.style.display = "block";
  modalImggg.src = this.src;
  captionTexttt.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var spannn = document.getElementsByClassName("closeee")[0];

// When the user clicks on <span> (x), close the modal
spannn.onclick = function() { 
  modalll.style.display = "none";
}
