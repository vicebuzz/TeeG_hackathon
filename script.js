//ai assistant system
const recognition = new webkitSpeechRecognition();
recognition.onresult = function(event) {
 const transcript = event.results[0][0].transcript;
 const command = transcript.toLowerCase();
 handleCommand(command);
};
function handleCommand(command) {
 if (command.includes("hello")) {
   speak("Hello! How can I assist you?");
 } else if (command.includes("time")) {
   const now = new Date();
   const time = now.toLocaleTimeString();
   speak(`The current time is ${time}`);
 } else if (command.includes("your_name")) {
   speak("I am the AI Assistance");
 } else {
   speak("Sorry, I didn't understand that command.");
 }
}
function speak(text) {
 const utterance = new SpeechSynthesisUtterance(text);
 speechSynthesis.speak(utterance);
}
recognition.start();


//create a new trending array
const existingPictures= []
function createNewPictureArray(existiongArray){
    const newArray = existingArray.map((url, index)=>{
        return'new_image${index +1}.jpg';
    });
    return newArray;
}
const newPictures = createNewPictureArray(existingPictures);
console.log(newPictures)
//trending picture function
const pictureData=[
    {url:'1.jpg',likes:100, comments:50},
    {url:'2.jpg',likes:900, comments:60}
]

function calsulateTrendingScore(picture)
{
    return picture.likes+ picture.comments;
}
function getTrendingPicture(pictures){
    return pictures.sort((a,b)=>calculateTrendingScore(b)-calculateTrendingScore(a));
}

const trendingPictures = getTrendingPictures(pictureData);
conslode.log(trendingPictures);
