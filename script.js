// Scroll-triggered Animations

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Trigger Mission section when scrolling down
    if (scrollPosition > 200) {
        document.querySelector('.initial-header').classList.add('hidden');
        document.querySelector('.mission-section').classList.remove('hidden');
    }

    // Trigger Main content section
    if (scrollPosition > 600) {
        document.querySelector('.mission-section').classList.add('hidden');
        document.querySelector('.main-content').classList.remove('hidden');
    }
});
