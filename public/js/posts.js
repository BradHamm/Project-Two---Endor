let postTitle = "";
let postContent = "";

// Function to handle input changes for post title
function handleTitleChange() {
    const titleInput = document.getElementById("postTitle");
    postTitle = titleInput.value;
}

// Function to handle input changes for post content
function handleContentChange() {
    const contentInput = document.getElementById("postContent");
    postContent = contentInput.value;
}

// Function to save the post with the entered title and content
function savePost() {
    if (postTitle && postContent) {
        displayPost();
    } else {
        alert("Please enter both post title and content.");
    }
}

// Function to display the saved post
function displayPost() {
    const postTitleElement = document.getElementById("savedPostTitle");
    const postContentElement = document.getElementById("savedPostContent");

    postTitleElement.textContent = postTitle;
    postContentElement.textContent = postContent;
}

// Add event listeners
document.getElementById("postTitle").addEventListener("input", handleTitleChange);
document.getElementById("postContent").addEventListener("input", handleContentChange);
document.getElementById("savePostButton").addEventListener("click", savePost);
