//Function to get an image from an inputted image URL
function getImageUrl() {
  let inputtedImageUrl = document.getElementById("urlTextBox").value;
  let displayedImage = document.getElementById("main-image");
  displayedImage.src = inputtedImageUrl;
  displayedImage.width = 400;
  displayedImage.height = 400;
  console.log(inputtedImageUrl); 
}

//Function to change selected user
function changeUser(e) {
  let selectedUserValue = e.value;
  const selectMenu = document.getElementById("freePremUserSelect");
  const options = selectMenu.options;
  if (selectedUserValue == 0) {
    options[0].id = "selectedUser";
    options[1].id = "";
  } else {
    options[1].id = "selectedUser";
    options[0].id = "";
  }
  console.log("User changed to:", document.getElementById("selectedUser").innerHTML);
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
    console.log("Custom selected");
    //Unhide custom parameters
  } else {
    //Hide custom parameters
  }
}

//Function that will be used to call Teemill API and send selected image to t-shirt preview and grab that to send back
function sendImageToAPI() {
  let imageURL = 'images/bird.png'; //This will be changed later to grab whatever URL link has been used
  let tee = document.getElementById("generated-image-selected");
  console.log("Sending t-shirt: ");
}






