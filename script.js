// GSAP Scroll Animation for SVG Elements
gsap.timeline({
  scrollTrigger: {
    trigger: '.scrollDist',
    start: '0 0',
    end: '100% 100%',
    scrub: 1
  }
})

.fromTo('.clouds', { y: 170 }, { y: -400 }, 0)
.fromTo('.cloud_main', { y: 170 }, { y: -300 }, 0)
.fromTo('.balloon', { y: 0 }, { y: -200 }, 0)
.fromTo('.sky', { y: 0 }, { y: -200 }, 0)
.fromTo('.book', { y: 0 }, { y: -600 }, 0);

<svg viewBox="0 0 1200 1600" xmlns="http://www.w3.org/2000/svg">

  
  <!-- Define the mask -->
  <mask id="textMask">
    <image xlink:href="assets/story_Cloud 1.svg" width="1200" height="800"/>
  </mask>

  <!-- Elements that move with the scroll -->
  <image class="background" xlink:href="assets/story_Background.svg" width="1200" height="800" />
  <image class="sky" xlink:href="assets/story_Sky.svg" width="1200" height="800"/>
  <image class="book" xlink:href="assets/story_Book.svg" width="1200" height="1600"/>
  <image class="balloon" xlink:href="assets/story_Balloon.svg" width="1200" height="800"/>
  <image class="clouds" xlink:href="assets/story_Cloud 2.svg" width="1200" height="800"/>
  
  <!-- Group for cloud_main and masked text effect -->
  <g class="cloud_main">
    <image xlink:href="assets/story_Cloud 1.svg" width="1200" height="800"/>
    <g mask="url(#textMask)">
      <!-- Original Text -->
      <text x="50%" y="50%" fill="#162a43" font-size="100" text-anchor="middle" dominant-baseline="middle">
        Stories for Change
      </text>
      <!-- New Text for Transition -->
      <text x="50%" y="50%" fill="#ffffff" font-size="100" text-anchor="middle" dominant-baseline="middle" dy="120">
        Explore Further
      </text>
    </g>
    <polyline class="arrow" fill="#fff" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />
  </g>
</svg>


// GSAP Animation for Glow Effect
gsap.timeline({
  scrollTrigger: {
    trigger: '.scrollDist',
    start: '0 0',
    end: '100% 100%',
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
