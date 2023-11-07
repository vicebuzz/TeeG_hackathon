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
//ai system draft
const imageInput = document.getElementById('imageInput');
const generateASCII = document.getElementById('generateASCII');
const generateCartoon = document.getElementById('generateCartoon');
const generateBlackAndWhite = document.getElementById('generateBlackAndWhite');
const generateCustomEffect = document.getElementById('generateCustomEffect');
const outputImage = document.getElementById('outputImage');
function loadAndProcessImage(imageProcessor) {
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.src = e.target.result;
      img.onload = function () {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
        imageProcessor(canvas, context);
      };
    };
    reader.readAsDataURL(file);
  }
}
generateASCII.addEventListener('click', () => {
  loadAndProcessImage((canvas, context) => {
    // You can implement ASCII conversion here
    // Replace the following line with your ASCII conversion logic
    outputImage.src = canvas.toDataURL('image/jpeg');
  });
});
generateCartoon.addEventListener('click', () => {
  loadAndProcessImage((canvas, context) => {
    // You can implement cartoon effect here
    // Replace the following line with your cartoon effect logic
    outputImage.src = canvas.toDataURL('image/jpeg');
  });
});
generateBlackAndWhite.addEventListener('click', () => {
  loadAndProcessImage((canvas, context) => {
    context.fillStyle = 'rgba(0, 0, 0, 1)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    outputImage.src = canvas.toDataURL('image/jpeg');
  });
});
generateCustomEffect.addEventListener('click', () => {
  loadAndProcessImage((canvas, context) => {
    // You can implement your custom effect here
    // Replace the following line with your custom effect logic
    outputImage.src = canvas.toDataURL('image/jpeg');
  });
});
imageInput.addEventListener('change', () => {
  outputImage.src = '';
});

//qr code generate
document.getElementById('generateQRCode').addEventListener('click', function () {
    const link = document.getElementById('linkInput').value;
    if (link) {
      const qrcode = new QRCode(document.getElementById('qrcode'), {
        text: link,
        width: 128,
        height: 128,
      });
    }
  });
         