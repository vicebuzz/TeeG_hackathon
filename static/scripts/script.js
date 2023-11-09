//Base file re-created from deletion since it was empty upon my previous merge -- Jack

//Two types of import
//import {testReturn} from './gen-ai-images.js'; 
import * as genai from '../scripts/gen-ai-images.js'; 

//Scroll Button Functionality of Image Showcase: 

//Default image (Campfire)
let imageCount = 1;
let imageCountMax = 4; //Set to current max number of images
let imageURL = ''; 

function setImageURL(imageCount) {
  
  let imageInfo = genai.returnImageList(imageCount);
  imageURL = imageInfo.original; 

  //Set picture URL within html document
  let el = document.getElementById('picture-showcase-main-image'); 
  el.setAttribute('src', imageURL); 

  el = document.getElementById('title'); 
  el.innerHTML = imageInfo.title; 

  el = document.getElementById('description');
  el.innerHTML = imageInfo.desc;

  el = document.getElementById('date'); 
  el.innerHTML = imageInfo.date; 

  el = document.getElementById('category'); 
  el.innerHTML = imageInfo.category; 

  //set tags
  for (let i = 0; i < 5; i++) {
    el = document.getElementById('tag-' + (i+1)); 
    el.innerHTML = imageInfo.tags[i]; 
  }

  //console.log(genai.returnImageList(imageCount)); 
}

setImageURL(imageCount); 
//console.log(imageURL); 

//Set Event Listeners on Scroll Buttons
let el = document.getElementById("scroll-left"); 
el.addEventListener("click", scrollLeftOnClick); 

el = document.getElementById("scroll-right"); 
el.addEventListener("click", scrollRightOnClick); 

el = document.getElementById("hackathon-functionality-button");
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

//Scroll Button Functionality of Image Showcase: 
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

//Jack added below
/*const originalChoice = document.getElementById("generated-original-image");
originalChoice.addEventListener("click", highlightImage);
const asciiChoice = document.getElementById("generated-ascii-image");
asciiChoice.addEventListener("click", highlightImage)
const cartoonChoice = document.getElementById("generated-cartoon-image");
cartoonChoice.addEventListener("click", highlightImage)
const bwChoice = document.getElementById("generated-black-and-white-image");
bwChoice.addEventListener("click", highlightImage)
const customChoice = document.getElementById("generated-custom-image");
customChoice.addEventListener("click", highlightImage)*/

function highlightImage() {
  let pastHighligted = document.querySelectorAll('.highlighted');
  pastHighligted.forEach((el) => {
    el.classList.remove('highlighted');
  });
  this.classList.add("highlighted");
}
