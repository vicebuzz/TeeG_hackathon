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
  let selectedCustomGenerator = e.value;
  console.log("Custom generator selected option:", selectedCustomGenerator);
  if (selectedCustomGenerator == "custom") {
    document.getElementById("custom-text").hidden = false;
  } else {
    document.getElementById("custom-text").hidden = true;
  }
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

//Function that will be used to call Teemill API and send selected image to t-shirt preview and grab that to send back
function sendImageToAPI() {
  //TBD
}






