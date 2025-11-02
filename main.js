const shareContainer = document.querySelector(".share-container");
const shareBtn = document.querySelector(".share-btn");

// Toggle share container when share button is clicked
shareBtn.addEventListener("click", (event) => {
    event.stopPropagation();    // Prevent click from bubbling to document
    shareContainer.classList.toggle("show");
});

// Hide share container when clicking anywhere else on the page
document.addEventListener("click", () => {
    shareContainer.classList.remove("show");
});

// Optional: prevent hiding when clicking inside the share container itself
shareContainer.addEventListener("click", (event) => {
    event.stopPropagation();
});

