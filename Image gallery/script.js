// const filterButtons = document.querySelectorAll("#filter-buttons button");
// const filterableCards = document.querySelectorAll("#filterable-cards .card");
// const filterCards = (e) => {
//     document.querySelector("#filter-buttons .active").classList.remove("active");
//     e.target.classList.add("active");
//     filterableCards.forEach(card => {
//         if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
//             return card.classList.replace("hide", "show");
//         }
//         card.classList.add("hide");
//     });
// }
// filterButtons.forEach(button => button.addEventListener("click", filterCards));
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");
    filterableCards.forEach(card => {
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
};
filterButtons.forEach(button => button.addEventListener("click", filterCards));

// Fullscreen Image View Logic
const imageOverlay = document.getElementById('image-overlay');
const overlayImage = document.getElementById('overlay-image');
const closeOverlayButton = document.getElementById('close-overlay');

filterableCards.forEach(card => {
    const img = card.querySelector('img');
    img.addEventListener('click', () => {
        overlayImage.src = img.src;
        imageOverlay.classList.remove('hide');
    });
});

// Close Overlay Button
closeOverlayButton.addEventListener('click', () => {
    imageOverlay.classList.add('hide');
});
