<?php
// Define the path to your JSON file
$jsonFilePath = 'data/pictures.json';
// Read the JSON data
$jsonData = file_get_contents($jsonFilePath);
if ($jsonData === false) {
   echo "Error reading the JSON file.";
   exit;
}
// Parse the JSON data into an array
$pictureData = json_decode($jsonData, true);
if ($pictureData === null) {
   echo "Error decoding the JSON data.";
   exit;
}
// Function to filter and sort the picture data based on options
function filterAndSortPictures($pictures, $options) {
   $filteredPictures = $pictures;
   if (isset($options['category'])) {
       $filteredPictures = array_filter($filteredPictures, function ($picture) use ($options) {
           return $picture['category'] === $options['category'];
       });
   }
   if (isset($options['popularity'])) {
       $filteredPictures = array_filter($filteredPictures, function ($picture) use ($options) {
           return $picture['popularity'] >= $options['popularity'];
       });
   }
   if (isset($options['sales'])) {
       $filteredPictures = array_filter($filteredPictures, function ($picture) use ($options) {
           return $picture['sales'] >= $options['sales'];
       });
   }
   if (isset($options['views'])) {
       usort($filteredPictures, function ($a, $b) {
           return $b['views'] - $a['views'];
       });
   }
   return array_values($filteredPictures);
}
// Define filter options
$filterOptions = [
   'views' => true,  // Sort by views (highest to lowest)
   'category' => 'Nature',  // Filter by category
   'popularity' => 4,  // Filter by popularity (4 and above)
   'sales' => 10  // Filter by sales (10 and above)
];
// Apply the filter and sorting
$filteredPictures = filterAndSortPictures($pictureData, $filterOptions);
// Output the filtered and sorted data as JSON
header('Content-Type: application/json');
echo json_encode($filteredPictures, JSON_PRETTY_PRINT);
?>