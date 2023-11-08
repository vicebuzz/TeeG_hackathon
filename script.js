//Base file re-created from deletion since it was empty upon my previous merge -- Jack

//Scroll Button Functionality of Image Showcase: 

//Default image (Campfire)
let imageCount = 1;
let imageCountMax = 4; //Set to current max number of images
let imageURL = ''; 

function setImageURL(imageCount) {
  switch (imageCount) {
    case 1: 
      imageURL = './images/image_one/oscar-image-1-original.png';
      break;
    case 2: 
      imageURL = './images/image_two/oscar-image-2-original.png';
      break;
    case 3: 
      imageURL = './images/image_three/oscar-image-3-original.png';
      break;
    case 4: 
      imageURL = './images/image_four/oscar-image-4-original.png';
      break; 
    default: 
      imageURL = './images/image_one/oscar-image-1-original.png';
  }

  //Set picture URL within html document
  let el = document.getElementById('picture-showcase-main-image'); 
  el.setAttribute('src', imageURL); 
}

setImageURL(imageCount); 
console.log(imageURL); 

//Set Event Listeners on Scroll Buttons
let el = document.getElementById("scroll-left"); 
el.addEventListener("click", scrollLeftOnClick); 

el = document.getElementById("scroll-right"); 
el.addEventListener("click", scrollRightOnClick); 

el = document.getElementById("hackathon-functionality-button");
console.log(el); 
el.addEventListener("click", showHackathonFunctionality);

//Click Functions
function scrollLeftOnClick() {
  console.log('Click'); 
  if (imageCount < imageCountMax) {
    imageCount++; 
    console.log('Image Count: ' + imageCount); 
  } else if (imageCount === 4) {
    console.log('Image Count at Max, looping to 1');
    imageCount = 1; 
  }

  setImageURL(imageCount); 
}

function scrollRightOnClick() {
  console.log('Click right'); 
  if (imageCount === 1) {
    imageCount = imageCountMax;
    console.log('Image Count at minimum, looping to max'); 
  } else {
    imageCount--;
    console.log('Image Count: ' + imageCount);
  }

  setImageURL(imageCount); 
}

//Show Hackathon Functionality
function showHackathonFunctionality() {
  let el = document.getElementById('hackathon-functionality');
  console.log(el.style.display)

  if (el.hidden === true) {
    el.hidden = false;
  } else {
    el.hidden = true; 
  }
}
