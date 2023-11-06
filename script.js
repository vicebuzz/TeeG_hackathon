// Sample picture data with properties: views, category, popularity, and sales
const pictureData = [
    { views: 500, category: 'Nature', popularity: 4, sales: 10, image: 'image1.jpg' },
    { views: 300, category: 'Abstract', popularity: 3, sales: 5, image: 'image2.jpg' },
    { views: 800, category: 'Portraits', popularity: 5, sales: 20, image: 'image3.jpg' },
    { views: 600, category: 'Nature', popularity: 4, sales: 15, image: 'image4.jpg' },
    { views: 700, category: 'Abstract', popularity: 3, sales: 8, image: 'image5.jpg' }
];
// Function to filter and sort the picture data based on options
function filterAndSortPictures(pictures, options) {
    let filteredPictures = [...pictures];
    if (options.category) {
        filteredPictures = filteredPictures.filter(picture => picture.category === options.category);
    }
    if (options.popularity) {
        filteredPictures = filteredPictures.filter(picture => picture.popularity >= options.popularity);
    }
    if (options.sales) {
        filteredPictures = filteredPictures.filter(picture => picture.sales >= options.sales);
    }
    if (options.views) {
        filteredPictures.sort((a, b) => b.views - a.views);
    }
    return filteredPictures;
}
// Define filter options
const filterOptions = {
    views: true,  // Sort by views (highest to lowest)
    category: 'Nature',  // Filter by category
    popularity: 4,  // Filter by popularity (4 and above)
    sales: 10  // Filter by sales (10 and above)
};
// Apply the filter and sorting
const filteredPictures = filterAndSortPictures(pictureData, filterOptions);
// Display the filtered pictures
const filteredPicturesContainer = document.getElementById('filtered-pictures');
filteredPictures.forEach(picture => {
    const pictureElement = document.createElement('div');
    pictureElement.innerHTML = `<img src="${picture.image}" alt="${picture.category}">`;
    filteredPicturesContainer.appendChild(pictureElement);
});
