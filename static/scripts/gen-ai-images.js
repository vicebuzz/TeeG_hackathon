//Function to get an image from an inputted image URL
const imageOneList = {
  qr : "../static/images/image_one/image-1-qr-code.png",
  original : "../static/images/image_one/oscar-image-1-original.png",
  ascii : ["../static/images/image_one/ascii/image-1-ascii-1.png", "../static/images/image_one/ascii/image-1-ascii-2.png", "../static/images/image_one/ascii/image-1-ascii-3.png"],
  cartoon : ["../static/images/image_one/cartoon/image-1-cartoon-1.png", "../static/images/image_one/cartoon/image-1-cartoon-2.png", "../static/images/image_one/cartoon/image-1-cartoon-3.png"],
  bw : ["../static/images/image_one/black_and_white/image-1-bw-1.png", "../static/images/image_one/black_and_white/image-1-bw-2.png"],

  //Semantic Image Info 
  title : 'Campfire',
  desc : 'Campfire on the beach', 
  date : '6th March 2023', 
  category: 'Nature', 
  tags : ['Nature', 'Fire', 'Fireplace', 'Beach', 'Flames'],
  views: 82, 
  comments: 12
};
const imageTwoList = {
  qr : "../static/images/image_two/image-2-qr-code.png",
  original : "../static/images/image_two/oscar-image-2-original.png",
  ascii : ["../static/images/image_two/ascii/image-2-ascii-1.png", "../static/images/image_two/ascii/image-2-ascii-2.png", "../static/images/image_two/ascii/image-2-ascii-3.png"],
  cartoon : ["../static/images/image_two/cartoon/image-2-cartoon-1.png", "../static/images/image_two/cartoon/image-2-cartoon-2.png", "../static/images/image_two/cartoon/image-2-cartoon-3.png"],
  bw : ["../static//images/image_two/black_and_white/image-2-bw-1.png", "../static/images/image_two/black_and_white/image-2-bw-2.png"],

   //Semantic Image Info 
   title : 'Rock Pile',
   desc : 'Taken on the Faroe Islands, a rock pile that we came across in late 2021. In the background the sea, in one of the worlds more natural corners.re on the beach', 
   date : '6th March 2023', 
   category: 'Landscape', 
   tags : ['Nature', 'Sea', 'Ocean', 'Travel', 'Faroe Islands'],
   views: 33, 
   comments: 3
};
const imageThreeList = {
  qr : "../static/images/image_three/image-3-qr-code.png",
  original : "../static/images/image_three/oscar-image-3-original.png",
  ascii : ["../static/images/image_three/ascii/image-3-ascii-1.png", "../static/images/image_three/ascii/image-3-ascii-2.png", "../static/images/image_three/ascii/image-3-ascii-3.png"],
  cartoon : ["../static/images/image_three/cartoon/image-3-cartoon-1.png", "../static/images/image_three/cartoon/image-3-cartoon-2.png", "../static/images/image_three/cartoon/image-3-cartoon-3.png"],
  bw : ["../static/images/image_three/black_and_white/image-3-bw-1.png", "../static/images/image_three/black_and_white/image-3-bw-2.png"],

 //Semantic Image Info 
 title : 'Kolding Lake',
 desc : 'Kolding Lake behind Kolding Hus, DK, birds floating on the lake with the clear blue skies up above.', 
 date : '8th March 2023', 
 category: 'Landscape', 
 tags : ['Lake', 'Sea', 'Ocean', 'dk', 'Water'],
 views: 106, 
 comments: 20
};
const imageFourList = {
  qr : "../static/images/image_four/image-4-qr-code.png",
  original : "../static/images/image_four/oscar-image-4-original.png",
  ascii : ["../static/images/image_four/ascii/image-4-ascii-1.png", "../static/images/image_four/ascii/image-4-ascii-2.png", "../static/images/image_four/ascii/image-4-ascii-3.png"],
  cartoon : ["../static/images/image_four/cartoon/image-4-cartoon-1.png", "../static/images/image_four/cartoon/image-4-cartoon-2.png", "../static/images/image_four/cartoon/image-4-cartoon-3.png"],
  bw : ["../static/images/image_four/black_and_white/image-4-bw-1.png", "../static/images/image_four/black_and_white/image-4-bw-2.png"],

  //Semantic Image Info 
  title : 'Beach Sunset',
  desc : 'The sun setting over bournemouth down across a cliffside path. In the background there is bournemouth pier, and in the foreground the sea. Clear skies with a plain trail goes across the top of the picture. Clear day with great weather.', 
  date : '7th March 2023', 
  category: 'Nature', 
  tags : ['Sunset', 'Sun', 'Evening', 'Beach', 'Ocean'],
  views: 48, 
  comments: 6
};

let selectedCustomGenerator;
let indexToChangeTo = 1;

//Function to get an image from an imputted image URL ()
function getImageUrl() {
  let inputtedImageUrl = document.getElementById("imageSelection").value;
  let mainImage = document.getElementById("main-image");
  let originalImage = document.getElementById("original-image");
  let customImage = document.getElementById("custom-image");
  let asciiImage = document.getElementById("ascii-image");
  let cartoonImage = document.getElementById("cartoon-image");
  let bwImage = document.getElementById("black-and-white-image");
  let customGenImage = document.getElementById("custom-generated-image");
  let mainImageToDisplay;
  let asciiImageToDisplay;
  let cartoonImageToDisplay;
  let bwImageToDisplay;
  console.log(inputtedImageUrl);
  switch (inputtedImageUrl) {
    case "Image 1":
      mainImageToDisplay = imageOneList["original"];
      asciiImageToDisplay = imageOneList["ascii"][0];
      cartoonImageToDisplay = imageOneList["cartoon"][0];
      bwImageToDisplay = imageOneList["bw"][0];
      break;
    case "Image 2":
      mainImageToDisplay = imageTwoList["original"];
      asciiImageToDisplay = imageTwoList["ascii"][0];
      cartoonImageToDisplay = imageTwoList["cartoon"][0];
      bwImageToDisplay = imageTwoList["bw"][0];
      break;
    case "Image 3":
      mainImageToDisplay = imageThreeList["original"];
      asciiImageToDisplay = imageThreeList["ascii"][0];
      cartoonImageToDisplay = imageThreeList["cartoon"][0];
      bwImageToDisplay = imageThreeList["bw"][0];
      break;
    case "Image 4":
      mainImageToDisplay = imageFourList["original"];
      asciiImageToDisplay = imageFourList["ascii"][0];
      cartoonImageToDisplay = imageFourList["cartoon"][0];
      bwImageToDisplay = imageFourList["bw"][0];
      break;
  }
  mainImage.src = mainImageToDisplay.replace('images', 'images_tshirts');
  originalImage.src = mainImageToDisplay.replace('images', 'images_tshirts');
  customImage.src = mainImageToDisplay.replace('images', 'images_tshirts');
  customGenImage.src = mainImageToDisplay.replace('images', 'images_tshirts');
  asciiImage.src = asciiImageToDisplay.replace('images', 'images_tshirts');
  cartoonImage.src = cartoonImageToDisplay.replace('images', 'images_tshirts');
  bwImage.src = bwImageToDisplay.replace('images', 'images_tshirts');
  document.getElementById("generated-images-free").hidden = true;
  document.getElementById("generated-images-prem").hidden = true;
  document.getElementById("custom-options").hidden = true;
  removeAllHighlighted();
}

//Function to change selected user
function changeUser(e) {
  document.getElementById("custom-options").hidden = true;
  document.getElementById("generated-images-free").hidden = true;
  document.getElementById("generated-images-prem").hidden = true;
  let selectedUserValue = e.value;
  const userSelectMenu = document.getElementById("freePremUserSelect");
  const userOptions = userSelectMenu.options;
  if (selectedUserValue == 0) {
    userOptions[0].id = "selectedUser";
    userOptions[1].id = "";
  } else {
    userOptions[1].id = "selectedUser";
    userOptions[0].id = "";
  }
  console.log("User changed to:", document.getElementById("selectedUser").innerHTML);
}

//Function to change custom generator options
function changeCustomGenerator(e) {
  selectedCustomGenerator = e.value;
  console.log("Custom generator selected option:", selectedCustomGenerator);
  if (selectedCustomGenerator == "custom") {
    document.getElementById("custom-text").hidden = false;
  } else {
    document.getElementById("custom-text").hidden = true;
  }
}

//Function to generate new random AI image
function generateNewImage() {
  let currentGenerator = selectedCustomGenerator;
  let currentImageNumber = document.getElementById("imageSelection").value;
  let imageDict;
  let genType;

  //Get generator type
  if (currentGenerator == "ascii") {
    genType = "ascii";
  } else if (currentGenerator == "cartoon") {
    genType = "cartoon";
  } else if (currentGenerator == "black-and-white") {
    genType = "bw";
  } 

  //Get correct image dictionary
  if (currentImageNumber == "Image 1") {
    imageDict = imageOneList;
  } else if (currentImageNumber == "Image 2") {
    imageDict = imageTwoList;
  } else if (currentImageNumber == "Image 3") {
    imageDict = imageThreeList;
  } else if (currentImageNumber == "Image 4") {
    imageDict = imageFourList;
  }

  let imageToChange = document.getElementById("custom-generated-image");
  let imageToChangeTwo = document.getElementById("custom-image");
  if ((indexToChangeTo == 2 && imageList == "bw") || indexToChangeTo == 3) {
    indexToChangeTo = 0;
  } 
  imageToChange.src = imageDict[imageList][indexToChangeTo];
  imageToChangeTwo.src = imageDict[imageList][indexToChangeTo];
  indexToChangeTo += 1;
  console.log("generated new image");
  
  if (genType == "ascii" || genType == "cartoon" || genType == "bw") {
    if ((indexToChangeTo == 2 && genType == "bw") || indexToChangeTo == 3) {
      indexToChangeTo = 0;
    } 
    imageToChange.src = imageDict[genType][indexToChangeTo];
    indexToChangeTo += 1;
  } else if (genType == "original") {
    imageToChange.src = imageDict[genType];
  } else {
    imageToChange.src = imageDict["original"];
    let customText = document.getElementById("custom-text-input").value;
    console.log(customText);
    alert("Custom image would be generated using AI ( mix of original image and your words: " + customText + " )")
  }
  console.log("Generate new image button pressed.");
}

//Function to show a list of generated images
function showGenImages(user) {
  removeAllHighlighted();
  selectedUser = user.innerHTML;
  document.getElementById("generated-images-free").hidden = false;
  if (selectedUser == "PREMIUM") {
    document.getElementById("generated-images-prem").hidden = false;
    console.log("PREMIUM generated images shown");
  } else {
    document.getElementById("generated-images-prem").hidden = true;
    console.log("FREE generated images shown");
  }
}

//Function to clear anything currently highlighted
function removeAllHighlighted() {
  const elements = document.querySelectorAll('.highlighted');
  elements.forEach((el) => {
    el.classList.remove('highlighted');
  });
}

//Function to highlight the selected image you want
function selectGenImage(e) {
  // Remove the 'highlighted' class from all elements
  removeAllHighlighted();

  // Add the 'highlighted' class to the selected element
  e.classList.add('highlighted');
  console.log("Item highlighted");
  if (document.getElementById("generated-image-4").classList.contains('highlighted')) {
    document.getElementById("custom-options").hidden = false;
  } else {
    document.getElementById("custom-options").hidden = true;
  }
}

const tShirtGenerateButton = document.getElementById('buy-shirt-button')
tShirtGenerateButton.addEventListener('click', sendImageToAPI)

//Function that will be used to call Teemill API and send selected image to t-shirt preview and grab that to send back
function sendImageToAPI() {

  let imageHighlighted = document.querySelector('.highlighted img');

  let payload = {};
  payload.url = imageHighlighted.src.replace('images_tshirts', 'images')
  payload.local = 1

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      let response = JSON.parse(this.responseText)

      let image_url = response['image']
      let url = response['url']

      console.log(image_url)
      console.log(url)

      window.open(url, '_blank');

    }
  }

  xhr.open("POST", "/generate-t-shirt", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  let sendData = JSON.stringify(payload);
  xhr.send(sendData);

}

//Function to test Importing
function testReturn() {
  return true;
}

function testReturnNonModule() {
  return true; 
}

function returnImageList(num) {
  switch (num) {
    case 1: 
      return imageOneList; 
      break;
    case 2: 
      return imageTwoList; 
      break;
    case 3: 
      return imageThreeList; 
      break;
    case 4: 
      return imageFourList;
      break; 
    default: 
      console.log('Returning image list failed.'); 
  }
}

//Have to export every function. 
export { testReturn, testReturnNonModule, returnImageList };  





