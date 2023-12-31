//Base file re-created from deletion since it was empty upon my previous merge -- Jack

//Two types of import
//import {testReturn} from './gen-ai-images.js'; 
import * as genai from '../scripts/gen-ai-images.js'; 

//Scroll Button Functionality of Image Showcase: 

//Default image (Campfire)
let imageCount = 1;
let imageCountMax = 4; //Set to current max number of images
let imageURL = '';
let imageInfo;

let userType = 'Standard'; 

function setImageURL(imageCount) {
  
  imageInfo = genai.returnImageList(imageCount);
  imageURL = imageInfo.original;

  //Set picture URL within html document
  let el = document.getElementById('picture-showcase-main-image'); 
  el.setAttribute('src', imageURL); 

  el = document.getElementById('original-image');
  el.setAttribute('src', imageURL.replace('images', 'images_tshirts'));

  el = document.getElementById('ascii-image');
  el.setAttribute('src', imageInfo.ascii[0].replace('images', 'images_tshirts'));

  el = document.getElementById('cartoon-image');
  el.setAttribute('src', imageInfo.cartoon[0].replace('images', 'images_tshirts'));

  el = document.getElementById('black-and-white-image');
  el.setAttribute('src', imageInfo.bw[0].replace('images', 'images_tshirts'));

  el = document.getElementById('custom-image');
  el.setAttribute('src', imageURL.replace('images', 'images_tshirts'));

  el = document.getElementById('custom-image-regenerated');
  el.setAttribute('src', imageURL.replace('images', 'images_tshirts')); 

  el = document.getElementById('title'); 
  el.innerHTML = imageInfo.title; 

  el = document.getElementById('description');
  el.innerHTML = imageInfo.desc;

  el = document.getElementById('date'); 
  el.innerHTML = imageInfo.date; 

  el = document.getElementById('category'); 
  el.innerHTML = imageInfo.category; 

  el = document.getElementById('info-views-actual'); 
  el.innerHTML = imageInfo.views; 

  el = document.getElementById('info-comments-actual'); 
  el.innerHTML = imageInfo.comments; 

  //set tags
  for (let i = 0; i < 5; i++) {
    el = document.getElementById('tag-' + (i+1)); 
    el.innerHTML = imageInfo.tags[i]; 
  }

  //console.log(genai.returnImageList(imageCount)); 
}

setImageURL(imageCount); 
//console.log(imageURL); 

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
  let buyShirtEl = document.getElementById('buy-shirt-div');
  let customOptionsEl = document.getElementById('custom-options');

  if (el.hidden === true) {
    el.hidden = false;
    buyShirtEl.hidden = false;
  } else {
    el.hidden = true;  
    buyShirtEl.hidden = true;
    if (customOptionsEl.hidden === false) {
      customOptionsEl.hidden = true;
    }
  }
}

//Change user Type: Standard and Premium
function userTypeOnClick() {
  let textEl = document.getElementById('user-type-actual'); 
  let customEl = document.getElementById('generated-custom-image'); 
  let customOptionsEl = document.getElementById('custom-options');

  if (userType === 'Standard') {
    //Set user type to premium
    userType = 'Premium';     
    textEl.innerHTML = userType; 
    customEl.hidden = false; 
  } else if (userType === 'Premium') {
    //Set user type to standard
    userType = 'Standard';  
    textEl.innerHTML = userType; 
    customEl.hidden = true; 
    if (customOptionsEl.hidden === false) {
      customOptionsEl.hidden = true; 
    }
  } else {
    console.log('Error changing user type'); 
  }
}

//Set Event Listeners on Scroll Buttons
let el = document.getElementById("scroll-left"); 
el.addEventListener("click", scrollLeftOnClick); 

el = document.getElementById("scroll-right"); 
el.addEventListener("click", scrollRightOnClick); 

el = document.getElementById("hackathon-functionality-button");
el.addEventListener("click", showHackathonFunctionality);

el = document.getElementById('user-type');
el.addEventListener("click", userTypeOnClick);

//Check if custom option is selected
const customSelection = document.getElementById("hackathon-functionality");
customSelection.addEventListener("click", toggleCustomSection);

function toggleCustomSection() {
  const customSectionToToggle = document.getElementById("custom-options");
  const highlightedElement = document.querySelectorAll('.highlighted');
  highlightedElement.forEach((el) => {
    if (el.id == "generated-custom-image") {
      customSectionToToggle.hidden = false;
    } else {
      customSectionToToggle.hidden = true;
    }
  });
}

//Jack added below
//Event listeners and function to highlight t-shirt design
const originalChoice = document.getElementById("generated-original-image");
originalChoice.addEventListener("click", highlightImage);
const asciiChoice = document.getElementById("generated-ascii-image");
asciiChoice.addEventListener("click", highlightImage)
const cartoonChoice = document.getElementById("generated-cartoon-image");
cartoonChoice.addEventListener("click", highlightImage)
const bwChoice = document.getElementById("generated-black-and-white-image");
bwChoice.addEventListener("click", highlightImage)
const customChoice = document.getElementById("generated-custom-image");
customChoice.addEventListener("click", highlightImage)

function highlightImage() {
  let pastHighligted = document.querySelectorAll('.highlighted');
  pastHighligted.forEach((el) => {
    el.classList.remove('highlighted');
  });
  this.classList.add("highlighted");
}

//Event listener to check selected custom regernate option (premium user)
const aiOptions = document.getElementById("choose-ai-select");
aiOptions.addEventListener("change", getAIGenerator)
let selectedAI;
let imagesToLoop;
let currentRegeneratorIndex = 0;

function getAIGenerator() {
  let imageToChange = document.getElementById("custom-image-regenerated");
  let secondImageToChange = document.getElementById("custom-image");
  let customInputBox = document.getElementById("custom-text");
  customInputBox.hidden = false;
  selectedAI = aiOptions.value;
  if (selectedAI == "black-and-white") {
    selectedAI = "bw";
  }
  if (selectedAI != "custom") {
    customInputBox.hidden = true;
    imagesToLoop = imageInfo[selectedAI];
    for (let idx in imagesToLoop) {
      imagesToLoop[idx] = imagesToLoop[idx].replace("/images/", "/images_tshirts/");
    }
    imageToChange.src = imagesToLoop[0];
    secondImageToChange.src = imagesToLoop[0];
  } else {
    console.log("Custom clicked");
    customInputBox = false;
  }
}

//Event listener on regenerate button and function to regenerate a new image
el = document.getElementById("regenButton");
el.addEventListener("click", regenerateImage);

function regenerateImage() {
  currentRegeneratorIndex += 1;
  if (selectedAI != "custom") {
    let imageToChange = document.getElementById("custom-image-regenerated");
    let secondImageToChange = document.getElementById("custom-image");
    if (selectedAI == "bw" && currentRegeneratorIndex == 2 || currentRegeneratorIndex == 3) {
      currentRegeneratorIndex = 0;
    }
    imageToChange.src = imagesToLoop[currentRegeneratorIndex];
    secondImageToChange.src = imagesToLoop[currentRegeneratorIndex];
  }
}