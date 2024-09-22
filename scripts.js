// GSAP Animations for Home Section
gsap.from(".home-section h1", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power3.out",
});

gsap.from(".home-section p, .home-section a", {
    duration: 1.5,
    delay: 0.5,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.3
});

// Smooth scroll for navbar links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax scrolling effect for background images
gsap.to('.home-section', {
    scrollTrigger: {
        trigger: '.home-section',
        start: 'top top',
        scrub: true
    },
    y: '10%', // Adjust for parallax effect
    ease: 'none'
});
