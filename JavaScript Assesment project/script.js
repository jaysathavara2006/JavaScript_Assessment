// Array of image paths
const images = [
    '1000340959_x16_drawing.jpg',
    'a-tour-package-to-city-of-lakes-udaipur-JustWravel-1597390787.jpg',
    'wp6865116.webp',
    'virat-kohli-4k-sports-wallpaper-preview.jpg',
    'premium_photo-1661884752233-eac0b5efe655.jpeg'
];

// Get references to DOM elements
const mainImage = document.getElementById('main-image');
const thumbnailsContainer = document.getElementById('thumbnails');
const prevArrow = document.getElementById('prev');
const nextArrow = document.getElementById('next');

let currentIndex = 0;

/**
 * Initialize the slider by dynamically creating thumbnails
 */
function initSlider() {
    images.forEach((src, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = src;
        thumbnail.classList.add('thumbnail');
        if (index === currentIndex) {
            thumbnail.classList.add('active');
        }

        // Add click event to set the main image
        thumbnail.addEventListener('click', () => setCurrentImage(index));

        // Append thumbnail to the container
        thumbnailsContainer.appendChild(thumbnail);
    });

    // Set the initial main image
    setCurrentImage(currentIndex);
}

/**
 * Update the main image and highlight the selected thumbnail
 * @param {number} index - Index of the selected image
 */
function setCurrentImage(index) {
    currentIndex = index;
    mainImage.src = images[currentIndex];

    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach((thumb, idx) => {
        thumb.classList.toggle('active', idx === currentIndex);
    });
}

/**
 * Navigate through the images
 * @param {number} direction - Direction of navigation (-1 for prev, 1 for next)
 */
function navigate(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    setCurrentImage(currentIndex);
}

// Add event listeners for navigation arrows
prevArrow.addEventListener('click', () => navigate(-1));
nextArrow.addEventListener('click', () => navigate(1));

// Initialize the slider
initSlider();
