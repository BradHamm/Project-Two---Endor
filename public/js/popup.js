let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.remove("close-popup");
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
    popup.classList.add("close-popup");
}