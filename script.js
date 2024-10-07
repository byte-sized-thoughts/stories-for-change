window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const tapestry = document.querySelector(".tapestry-graphic");
    
    // Add a parallax effect to the tapestry background
    tapestry.style.transform = "translateY(" + scrollPosition * 0.2 + "px)";
});
