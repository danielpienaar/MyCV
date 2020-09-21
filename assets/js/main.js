document.addEventListener("DOMContentLoaded", function () {
    // Show nav menu (mobile)
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId);

        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
                toggle.classList.toggle('close'); // Applies css class to rotate 90 degrees clockwise
            });
        }
    }
    showMenu('nav_toggle', 'nav_menu');

    // Hide nav menu when an item is clicked (mobile)
    const navLink = document.querySelectorAll('.nav-link');

    function linkAction() {
        const navmenu = document.getElementById('nav_menu');
        const toggle = document.getElementById('nav_toggle');
        navmenu.classList.remove('show');
        toggle.classList.toggle('close'); // Applies css class to rotate 90 degrees clockwise
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));

    // Change active nav menu link when scrolling through sections
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', scrollActive);

    function scrollActive() {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute('id');
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-menu a[href*=' + sectionId + "]").classList.add('active');
            }
            else {
                document.querySelector('.nav-menu a[href*=' + sectionId + "]").classList.remove('active');
            }
        });
    }

    // JS Scroll Reveal Animation
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });
    // Scroll Reveal Home
    sr.reveal('.home-title', {});
    sr.reveal('.home-scroll', { delay: 200 });
    sr.reveal('.home-img', { origin: 'right', delay: 400, viewOffset: { top: 0, right: 0, bottom: -300, left: 0 } });
    // Scroll Reveal About
    sr.reveal('.about-img', { delay: 300 });
    sr.reveal('.about-subtitle', { delay: 100 });
    sr.reveal('.about-profession', { delay: 200 });
    sr.reveal('.about-text', { delay: 300 });
    sr.reveal('.about-social-icon', { delay: 600, interval: 200 });
    // Scroll Reveal Skills
    sr.reveal('.skills-subtitle', {});
    sr.reveal('.skills-name', { distance: '20px', delay: 50, interval: 100 });
    sr.reveal('.skills-img', { delay: 400 });
    // Scroll Reveal Portfolio
    sr.reveal('.portfolio-img', { interval: 200 });
    // Scroll Reveal Contact
    sr.reveal('.contact-subtitle', {});
    sr.reveal('.contact-text', { interval: 200 });
    sr.reveal('.contact-input', { delay: 200 });
    sr.reveal('.contact-button', { delay: 400 });
});