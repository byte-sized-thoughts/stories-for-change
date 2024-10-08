// GSAP Scroll Animation
  gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollDist',
      start: '0 0',
      end: '100% 100%',
      scrub: 1
    }
  })
  .fromTo('.background', { y: 0 }, { y: -200 }, 0)
  .fromTo('.cloud1', { y: 100 }, { y: -800 }, 0)
  .fromTo('.cloud2', { y: -150 }, { y: -500 }, 0)
  .fromTo('.cloud3', { y: -50 }, { y: -650 }, 0)
  .fromTo('.river', { y: -10 }, { y: -100 }, 0)
  .fromTo('.bridge', { y: -30 }, { y: -250 }, 0)
  .fromTo('.book', { y: -50 }, { y: -600 }, 0)
  .fromTo('.butterfly', { y: -50 }, { y: -600 }, 0)  /* New Element */
  .fromTo('.birdCloud', { y: -30 }, { y: -250 }, 0);  /* New Element */

  // Arrow Button Animations
  const arrowBtn = document.querySelector('#arrow-btn');

  arrowBtn.addEventListener('mouseenter', () => {
    gsap.to('.arrow', { y: 10, duration: 0.8, ease: 'back.inOut(3)', overwrite: 'auto' });
  });

  arrowBtn.addEventListener('mouseleave', () => {
    gsap.to('.arrow', { y: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
  });

  arrowBtn.addEventListener('click', () => {
    gsap.to(window, { scrollTo: innerHeight, duration: 1.5, ease: 'power1.inOut' });
  });
