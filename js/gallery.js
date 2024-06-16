const image = document.getElementById('image');
const previews = document.getElementsByClassName('preview');
let focus = false;

window.onload = function() {
  console.log("Page loaded"); 
  addTabindexAttributes(); 
}

function upDate(previewPic){
  if (!focus){
    image.style.backgroundImage = `url(${previewPic.src})`;
    image.innerHTML = previewPic.alt;
  }
}

function unDo(){
  if (!focus){
    image.style.backgroundImage = 'none';
    image.innerHTML = 'Hover over an image below to display here.';
  }
}

function addTabindexAttributes() {
  for (let i = 0; i < previews.length; i++) {
    previews[i].setAttribute('tabindex', '0');
    previews[i].addEventListener('focus', function() {
      upDate(this);
      focus = true;
    });
    previews[i].addEventListener('blur', function() {
      focus = false;
      unDo()
    });
  }
}



