document.addEventListener('DOMContentLoaded', function () {
    const grid = document.getElementById('features-carousel-grid');
    const cards = Array.from(grid.children);
    const prevBtn = document.getElementById('features-prev');
    const nextBtn = document.getElementById('features-next');
    let current = 0;
    const visible = window.innerWidth >= 700 ? 3 : 1;

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 32; // card + margin
        grid.style.transform = `translateX(-${current * cardWidth}px)`;
    }

    function showPrev() {
        if (current > 0) {
            current--;
            updateCarousel();
        }
    }

    function showNext() {
        if (current < cards.length - visible) {
            current++;
            updateCarousel();
        }
    }

    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    window.addEventListener('resize', () => {
        updateCarousel();
    });

    updateCarousel();
});
