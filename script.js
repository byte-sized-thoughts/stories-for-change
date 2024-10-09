// GSAP Scroll Animation for SVG Elements
gsap.timeline({
  scrollTrigger: {
    trigger: '.scrollDist',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1
  }
})
.fromTo('.book', { y: 0 }, { y: -600 }, 0)
.fromTo('.mirrow', { y: -800 }, { y: -300 }, 0)  // Positioned to start above and scroll into alignment with .book
.fromTo('.cloud_main', { y: 170 }, { y: -300 }, 0)
.fromTo('.clouds', { y: 170 }, { y: -400 }, 0);

// GSAP Animation for Glow Effect
gsap.timeline({
  scrollTrigger: {
    trigger: '.scrollDist',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1
  }
})
.fromTo('.glow', { y: 0 }, { y: -800 }, 0); // Moves the glow up with scrolling

// Arrow Button Animations
const arrowBtn = document.querySelector('.arrow');

arrowBtn.addEventListener('mouseenter', () => {
  gsap.to('.arrow', { y: 10, duration: 0.8, ease: 'back.inOut(3)', overwrite: 'auto' });
});

arrowBtn.addEventListener('mouseleave', () => {
  gsap.to('.arrow', { y: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
});

arrowBtn.addEventListener('click', () => {
  gsap.to(window, { scrollTo: innerHeight, duration: 1.5, ease: 'power1.inOut' });
});
