
// when content is loaded (makes sure the code is executed only after the HTML doc has finished loading)
document.addEventListener('DOMContentLoaded', function() {
    //declare variables photos, nextButton, prevButton, navDots
    const photos = document.querySelectorAll('.slider-item');
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    const navDots = document.querySelectorAll('.nav-dot');
    let currentIndex = 0;

    //update slider to show the photo at the index
    function showPhoto(index) {
        photos.forEach((photo, i) => {
            photo.classList.toggle('active', i === index);
        });
        navDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % photos.length;
        showPhoto(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        showPhoto(currentIndex);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showPhoto(currentIndex);
        });
    });

    // show the first photo initially
    showPhoto(currentIndex);

    // sptional: Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);
});