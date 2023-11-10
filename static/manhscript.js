//get the high trend print picture

var pictures=[ {
       "image": "1.jpg",
       "likes": 100,
       "comments": 50,
       "category": "Nature",
       "popularity": 4,
       "sales": 10,
       "date": "2023-03-15"
     },
     {
       "image": "2.jpg",
       "likes": 80,
       "comments": 30,
       "category": "Abstract",
       "popularity": 3,
       "sales": 5,
       "date": "2022-01-15"
     },
     {
       "image": "1.jpg",
       "likes": 120,
       "comments": 60,
       "category": "Portraits",
       "popularity": 5,
       "sales": 20,
       "date": "2023-01-14"
     },
     {
       "image": "1.jpg",
       "likes": 90,
       "comments": 40,
       "category": "Nature",
       "popularity": 4,
       "sales": 15,
       "date": "2021-01-15"
     },
     {
       "image": "1.jpg",
       "likes": 110,
       "comments": 70,
       "category": "Abstract",
       "popularity": 3,
       "sales": 8,
       "date": "2023-01-15"
     }]

     function sortPicturesBy(property) {
        return pictures.slice().sort(function (a, b) {
          return b[property] - a[property];
        });
       }

       function sortPicturesByDate(sortOption) {
        return pictures.slice().sort(function (a, b) {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          if (sortOption === 'week') {
            return dateB - dateA; // Sort by week
          } else if (sortOption === 'month') {
            return dateB.getMonth() - dateA.getMonth(); // Sort by month
          } else if (sortOption === 'year') {
            return dateB.getFullYear() - dateA.getFullYear(); // Sort by year
          } else {
            // Default: Sort by date
            return dateB - dateA;
          }
        });
       }

       // Function to display the sorted pictures in the table
       function displaySortedPictures(sortedPictures) {
        const table = document.querySelector('table');
        table.innerHTML = '';
        const headerRow = table.insertRow();
        for (const key in sortedPictures[0]) {
        if (key !== 'image') {
            const headerCell = headerRow.insertCell();
            headerCell.textContent = key;
         }
        }
        // Loop through the sorted pictures and add rows to the table
        sortedPictures.forEach(function (picture) {
            const row = table.insertRow();
            for (const key in picture) {
              if (key === 'image') {
                const cell = row.insertCell();
                const img = document.createElement('img');
                img.src = picture[key];
                img.style.width = '100px'; // Set the image width as needed
                cell.appendChild(img);
              } else {
                const cell = row.insertCell();
                cell.textContent = picture[key];
              }
            }
          });
         }
         const selectElement = document.getElementById('sort');
         selectElement.addEventListener('change', function () {
          const selectedProperty = selectElement.value;
          if (selectedProperty === 'date') {
            const sortOption = document.getElementById('dateSort').value;
            const sortedPictures = sortPicturesByDate(sortOption);
            displaySortedPictures(sortedPictures);
          } else if (selectedProperty) {
            const sortedPictures = sortPicturesBy(selectedProperty);
            displaySortedPictures(sortedPictures);
          }
         });

//qr code generate
function getCurrentURL () {
  return window.location.href
}

const url = getCurrentURL()

document.getElementById('generateQRCode').addEventListener('click', function () {
    const link = url;
    const backgroundColor = document.getElementById('backgroundColorInput').value;
     const foregroundColor = document.getElementById('foregroundColorInput').value;
    if (link) {
      const qrcode = new QRCode(document.getElementById('qrcode'), {
        text: link,
        width: 128,
        height: 128,
        colorDark: foregroundColor,
         colorLight: backgroundColor,
      });
    }
    const newDomain = "https://d1unuvan7ts7ur.cloudfront.net/";
    const parts = link.split("/");
    const path = parts.slice(5).join("/");
    const newURL = newDomain + "/" + path;
    console.log(newURL);
  });
         

   //styling effects
   const imageInput = document.getElementById('imageInput');
   const imageEffects = document.getElementById('imageEffects');
   const applyEffectButton = document.getElementById('applyEffect');
   const saveImageButton = document.getElementById('saveImage');
   const canvas = document.getElementById('canvas');
   const styledImage = document.getElementById('styledImage');
   const ctx = canvas.getContext('2d');
   let originalImage;
   imageInput.addEventListener('change', function () {
     const file = imageInput.files[0];
     if (file) {
       const reader = new FileReader();
       reader.onload = function (e) {
         const img = new Image();
         img.src = e.target.result;
         img.onload = function () {
           canvas.width = img.width;
           canvas.height = img.height;
           originalImage = img;
           ctx.drawImage(img, 0, 0, img.width, img.height);
         };
       };
       reader.readAsDataURL(file);
     }
   });
   applyEffectButton.addEventListener('click', applySelectedEffect);
   function applySelectedEffect() {
     if (originalImage) {
       const selectedEffect = imageEffects.value;
       ctx.drawImage(originalImage, 0, 0, originalImage.width, originalImage.height);
       const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
       applyEffect(imageData.data, selectedEffect);
       ctx.putImageData(imageData, 0, 0);
       styledImage.src = canvas.toDataURL('image/jpeg');
     }
     canvas.toBlob(function (blob) {
      // Create download link
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'styled_image.png';
      // Trigger download
      link.click();
      // Clean up
      URL.revokeObjectURL(link.href);
    }, 'image/png');
   }



   function applyEffect(data, effect) {
     switch (effect) {
       case 'none':
         // No effect
         break;
       case 'blackAndWhite':
         blackAndWhiteEffect(data);
         break;
       case 'sepia':
         sepiaEffect(data);
         break;
       case 'cartoon':
         cartoonEffect(data);
         break;
       case 'pixelation':
         pixelationEffect(data);
         break;
       default:
         // No effect by default
         break;
     }
   }
   function blackAndWhiteEffect(data) {
     // Black and white effect code
     for (let i = 0; i < data.length; i += 4) {
       const gray = (data[i] + data[i + 1] + data[i + 2]) / 3;
       data[i] = gray;
       data[i + 1] = gray;
       data[i + 2] = gray;
     }
   }
   function sepiaEffect(data) {
     // Sepia effect code
     for (let i = 0; i < data.length; i += 4) {
       const r = data[i];
       const g = data[i + 1];
       const b = data[i + 2];
       data[i] = (r * 0.393) + (g * 0.769) + (b * 0.189);
       data[i + 1] = (r * 0.349) + (g * 0.686) + (b * 0.168);
       data[i + 2] = (r * 0.272) + (g * 0.534) + (b * 0.131);
     }
   }
   function cartoonEffect(data) {
    const width = canvas.width;
    const height = canvas.height;
    const threshold = 50;
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      // Convert to grayscale
      const gray = (r + g + b) / 3;
      // Apply edge detection
      const newValue = gray < threshold ? 0 : 255;
      data[i] = data[i + 1] = data[i + 2] = newValue;
    }
   }
   function pixelationEffect(data) {
    const pixelSize = 10; 
    const width = canvas.width;
 const height = canvas.height;
 for (let y = 0; y < height; y += pixelSize) {
   for (let x = 0; x < width; x += pixelSize) {
     let totalR = 0;
     let totalG = 0;
     let totalB = 0;
     for (let i = y; i < y + pixelSize && i < height; i++) {
       for (let j = x; j < x + pixelSize && j < width; j++) {
         const index = (i * width + j) * 4;
         totalR += data[index];
         totalG += data[index + 1];
         totalB += data[index + 2];
       }
     }
     const pixelAvgR = totalR / (pixelSize * pixelSize);
     const pixelAvgG = totalG / (pixelSize * pixelSize);
     const pixelAvgB = totalB / (pixelSize * pixelSize);
     for (let i = y; i < y + pixelSize && i < height; i++) {
       for (let j = x; j < x + pixelSize && j < width; j++) {
         const index = (i * width + j) * 4;
         data[index] = pixelAvgR;
         data[index + 1] = pixelAvgG;
         data[index + 2] = pixelAvgB;
       }
     }
   }
 }
}

function myFunction() {
  var x = document.getElementById("myGrid");
  if (x.className === "w3-row") {
    x.className = "w3-row-padding";
  } else { 
    x.className = x.className.replace("w3-row-padding", "w3-row");
  }
}

// Open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}