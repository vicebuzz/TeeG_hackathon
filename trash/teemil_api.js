'use strict'

// script to generate t shirt using teemil API

const fetch = require("node-fetch");

function getImageTShirt (img_url, price) {
    fetch(img_url)
    .then((response) => {
        if (response.ok) {
        return response.arrayBuffer();
        } else {
        throw new Error("Failed to retrieve the image from the URL.");
        }
    })
    .then((imageData) => {
        // Convert the image data to a Base64-encoded string
        const imageBase64 = Buffer.from(imageData).toString("base64");

        // Construct the API request with the image as a text parameter
        const formData = new FormData();
        formData.append("image_url", imageBase64);
        //formData.append();
        formData.append("name", "Custom T-shirt");
        formData.append("price", price);


        // Send the request to the API
        return fetch('https://teemill.com/omnis/v3/product/create', {
        method: "POST",
        body: formData,
        });
    })
    .then((apiResponse) => {
        if (apiResponse.ok) {
        return apiResponse.json();
        } else {
        throw new Error("Failed to upload the image to the API.");
        }
    })
    .then((data) => {
        console.log("Image uploaded successfully.");
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
}

function convertImageToBase64 (img_url){
    
}