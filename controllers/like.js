// defining the id's to connect the functions of the like and dislike buttons to index file
var thumbsUpButton = document.getElementById('thumbsUpButton');
var thumbsUpCount = document.getElementById('thumbsUpCount');
var thumbsDownButton = document.getElementById('thumbsDownButton');
var thumbsDownCount = document.getElementById('thumbsDownCount');
var upCount = localStorage.getItem('thumbsUpCount') || 0;
var downCount = localStorage.getItem('thumbsDownCount') || 0;

// Added event listener to communicate on click to add a number to the like and dislike count
thumbsUpButton.addEventListener('click', function() {
    upCount++;
    thumbsUpCount.innerText = upCount;
    localStorage.setItem('thumbsUpCount', upCount);
 // Saved the previous likes and dislikes to the local storage so they still populate even when the page is refreshed   
});

thumbsDownButton.addEventListener('click', function() {
    downCount++;
    thumbsDownCount.innerText = downCount;
    localStorage.setItem('thumbsDownCount', downCount);

});