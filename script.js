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
document.getElementById('generateQRCode').addEventListener('click', function () {
    const link = document.getElementById('linkInput').value;
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
  const imageInput = document.getElementById('imageInput');
   const applyBlackAndWhite = document.getElementById('applyBlackAndWhite');
   const applyCartoonEffect = document.getElementById('applyCartoonEffect');
   const applyPixelArt = document.getElementById('applyPixelArt');
   const canvas = document.getElementById('canvas');
   const styledImage = document.getElementById('styledImage');
   const ctx = canvas.getContext('2d');
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
           ctx.drawImage(img, 0, 0, img.width, img.height);
         };
       };
       reader.readAsDataURL(file);
     }
   });
   applyBlackAndWhite.addEventListener('click', function () {
     const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
     const data = imageData.data;
     for (let i = 0; i < data.length; i += 4) {
       const gray = (data[i] + data[i + 1] + data[i + 2]) / 3;
       data[i] = gray;
       data[i + 1] = gray;
       data[i + 2] = gray;
     }
     ctx.putImageData(imageData, 0, 0);
     styledImage.src = canvas.toDataURL('image/jpeg');
   });
   applyCartoonEffect.addEventListener('click', function () {
     const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
     const data = imageData.data;
     for (let i = 0; i < data.length; i += 4) {
       const r = data[i];
       const g = data[i + 1];
       const b = data[i + 2];
       // Apply cartoon effect by reducing color levels
       const level = (r + g + b) / 3;
       data[i] = data[i + 1] = data[i + 2] = level;
     }
     ctx.putImageData(imageData, 0, 0);
     styledImage.src = canvas.toDataURL('image/jpeg');
   });
   applyPixelArt.addEventListener('click', function () {
     const pixelSize = 10; // Adjust the pixel size as needed
     for (let y = 0; y < canvas.height; y += pixelSize) {
       for (let x = 0; x < canvas.width; x += pixelSize) {
         const imageData = ctx.getImageData(x, y, pixelSize, pixelSize);
         const data = imageData.data;
         let totalR = 0;
         let totalG = 0;
         let totalB = 0;
         for (let i = 0; i < data.length; i += 4) {
           totalR += data[i];
           totalG += data[i + 1];
           totalB += data[i + 2];
         }
         const averageR = totalR / (pixelSize * pixelSize);
         const averageG = totalG / (pixelSize * pixelSize);
         const averageB = totalB / (pixelSize * pixelSize);
         for (let i = 0; i < data.length; i += 4) {
           data[i] = averageR;
           data[i + 1] = averageG;
           data[i + 2] = averageB;
         }
         ctx.putImageData(imageData, x, y);
       }
     }
     styledImage.src = canvas.toDataURL('image/jpeg');
   })
         