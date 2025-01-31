// gsap.from: takes you from a new specified point to the base point
// gsap.to: takes you from base point to a new specified point
// gsap.fromTo: defines thes starting and end point in (css)

// Header
// gsap.from('.header', { duration: 1, y: '-100%', ease: "bounce.out" });

// // Header Link
// gsap.from('.link', { duration: 1, opacity: 0, x: '0%', delay: 1, stagger: 0.35, ease: "bounce.out" });

// // Sidebar right
// gsap.from('.right', { duration: 2, x: '-100vw', delay: 1, ease: 'power2.in' });

// // Sidebar left
// gsap.from('.left', { duration: 1.5, x: '-100%', delay: 2 });

// // Footer
// gsap.to('.footer', { duration: 1, y: '0%', delay: 3, ease: 'elastic' });

// // Footer Links
// gsap.from('.link2', { duration: 1, opacity: 0, y: '0%', delay: 4, stagger: 0.5, });

// // Footer Individual Links
// gsap.to('.subLink', { duration: 1, y: '0%', delay: 4, stagger: 0.5, ease: "bounce.out" });

// // Button
// gsap.fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 4, opacity: 1, scale: 1, rotation: 0 })

// Redo
// Gsap Animation timeline feature to eliminate multiple delays and durations
// The animations happens one after another and the duration of 1 sec is applied to all

const timeline = gsap.timeline({ defaults: { duration: 1 } })
timeline
    .from('.header', { y: '-100%', ease: "bounce.out" })
    .from('.link', { opacity: 0, x: '0%', stagger: 0.35, ease: "bounce.out" })
    .from('.right', { x: '-100vw', ease: 'power2.in' }, 1) // Absolute delay: Starts at 1s mark
    .from('.left', { x: '-100%' }, '<0.5') // Relative delay: Starts 0.5s after '.right' starts
    .to('.footer', { y: '0%', ease: 'elastic' })
    .from('.link2', { opacity: 0, y: '0%', stagger: 0.5, })
    .to('.subLink', { y: '0%', stagger: 0.5, ease: "bounce.out" }, '<') //Start same time with .link2 animation
    .fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })

// Button to Reverse the animation
const button = document.querySelector('.button');

button.addEventListener('click', () => {
    // Makes it happen 2.5x faster
    timeline.timeScale(2.5);
    // Reverse the animation via timeline
    timeline.reverse();
});
