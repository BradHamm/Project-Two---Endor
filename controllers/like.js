var thumbsUpButton = document.getElementById('thumbsUpButton');
var thumbsUpCount = document.getElementById('thumbsUpCount');
var thumbsDownButton = document.getElementById('thumbsDownButton');
var thumbsDownCount = document.getElementById('thumbsDownCount');
var upCount = 0;
var downCount = 0;

thumbsUpButton.addEventListener('click', function() {
    upCount++;
    thumbsUpCount.innerText = upCount;
});

thumbsDownButton.addEventListener('click', function() {
    downCount++;
    thumbsDownCount.innerText = downCount;
});