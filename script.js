// Scroll animations for about section
window.addEventListener("scroll", function() {
    const aboutSection = document.getElementById("about");
    const aboutPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (aboutPosition < screenPosition) {
        document.querySelector(".slide-left").style.opacity = "1";
        document.querySelector(".slide-left").style.transform = "translateX(0)";
        document.querySelector(".slide-right").style.opacity = "1";
        document.querySelector(".slide-right").style.transform = "translateX(0)";
    }
});

// Option menu - Update main image and product name on thumbnail click
document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    const mainImage = document.getElementById("product-img");
    const productName = document.getElementById("product-name");
    const thumbnails = document.querySelectorAll(".product-thumbnail");

    // Function to handle thumbnail click for main image and product name
    function updateMainImage(event) {
        // Remove 'active' class from all thumbnails
        thumbnails.forEach((thumbnail) => thumbnail.classList.remove("active"));

        // Add 'active' class to clicked thumbnail
        event.target.classList.add("active");

        // Update the main image's src and alt attributes
        mainImage.src = event.target.src;
        mainImage.alt = event.target.alt;

        // Update the product name
        productName.textContent = event.target.alt;

        // Remove and re-add the 'drop-animation' class to trigger the drop animation
        mainImage.classList.remove("drop-animation");
        void mainImage.offsetWidth; // Trigger reflow to restart animation
        mainImage.classList.add("drop-animation");
    }

    // Add click event listeners to all thumbnails
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", updateMainImage);
    });

    // Dynamically change the background image on thumbnail click for our-products-section
    const productThumbnails = document.querySelectorAll(".product-thumbnail");
    const productsSection = document.getElementById("our-products-section");

    // Function to update the background image of our-products-section based on clicked thumbnail
    function changeBackground(event) {
        // Get the background image URL from the clicked thumbnail's data attribute
        const backgroundImage = event.target.getAttribute("data-background");

        // Update the background image for the ::before pseudo-element of #our-products-section
        productsSection.style.setProperty('--background-image', `url(${backgroundImage})`);

        // Optionally, update the active class on thumbnails
        productThumbnails.forEach(thumbnail => thumbnail.classList.remove("active"));
        event.target.classList.add("active");
    }

    // Add event listener to all product thumbnails to change background image
    productThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", changeBackground);
    });
});

// Slider - Expand or collapse the card on click
function expandCard(card) {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(c => {
        // Remove the "expanded" class from all other cards
        if (c !== card) {
            c.classList.remove('expanded');
        }
    });
    // Toggle the "expanded" class on the clicked card
    card.classList.toggle('expanded');
}