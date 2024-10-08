window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let maxScroll = document.body.scrollHeight - window.innerHeight;

    let scrollFraction = scrollTop / maxScroll;

    // Adjust animation speeds or positions based on scrollFraction
    document.querySelector('.horizontal-strings').style.top = `${scrollFraction * 100}%`;
    document.querySelector('.vertical-strings').style.left = `${scrollFraction * 100}%`;
});
