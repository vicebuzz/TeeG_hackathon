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