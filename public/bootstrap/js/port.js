// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// modal 2

var modal = document.getElementById("myModal");
var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
};
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
};

// modal 3

var modal = document.getElementById("myModal");
var img = document.getElementById("myImg3");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
};
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
};

// modal 4

var modal = document.getElementById("myModal");
var img = document.getElementById("myImg4");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
};
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
};

