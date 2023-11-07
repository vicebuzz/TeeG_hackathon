//get the high trend print picture

var pictures=[ {
       "image": "1.jpg",
       "likes": 100,
       "comments": 50,
       "category": "Nature",
       "popularity": 4,
       "sales": 10
     },
     {
       "image": "2.jpg",
       "likes": 80,
       "comments": 30,
       "category": "Abstract",
       "popularity": 3,
       "sales": 5
     },
     {
       "image": "image3.jpg",
       "likes": 120,
       "comments": 60,
       "category": "Portraits",
       "popularity": 5,
       "sales": 20
     },
     {
       "image": "image4.jpg",
       "likes": 90,
       "comments": 40,
       "category": "Nature",
       "popularity": 4,
       "sales": 15
     },
     {
       "image": "image5.jpg",
       "likes": 110,
       "comments": 70,
       "category": "Abstract",
       "popularity": 3,
       "sales": 8
     }]

     function sortPicturesBy(property) {
        return pictures.slice().sort(function (a, b) {
          return b[property] - a[property];
        });
       }
       // Function to display the sorted pictures in the table
       function displaySortedPictures(sortedPictures) {
        const table = document.querySelector('table');
        table.innerHTML = ''; // Clear the table
        // Create a table header row
        const headerRow = table.insertRow();
        for (const key in sortedPictures[0]) {
          const headerCell = headerRow.insertCell();
          headerCell.textContent = key;
        }
        // Loop through the sorted pictures and add rows to the table
        sortedPictures.forEach(function (picture) {
          const row = table.insertRow();
          for (const key in picture) {
            if (key === 'image') {
              const cell = row.insertCell();
              const img = document.createElement('img');
              img.src = picture[key];
              cell.appendChild(img);
            } else {
              const cell = row.insertCell();
              cell.textContent = picture[key];
            }
          }
        });
       }
       // Event listener for the select element
       const selectElement = document.getElementById('sort');
       selectElement.addEventListener('change', function () {
        const selectedProperty = selectElement.value;
        if (selectedProperty) {
          const sortedPictures = sortPicturesBy(selectedProperty);
          displaySortedPictures(sortedPictures);
        }
       });
       // Initial display of pictures
       displaySortedPictures(pictures);