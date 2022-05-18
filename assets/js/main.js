//Current popup
let popup = "none";

document.addEventListener("DOMContentLoaded", function () {
    // If viewing on phone, skill buttons scroll to skills image
    window.addEventListener('scroll', () => {
        console.log(window.innerWidth);
        if (window.innerWidth < 768) {
            var skillsButtons = document.querySelectorAll('.skills-button')
            skillsButtons.forEach((skill) => {
                skill.setAttribute("href", "#view-skill")
            });
        } else if (window.innerWidth > 768) {
            var skillsButtons = document.querySelectorAll('.skills-button')
            skillsButtons.forEach((skill) => {
                skill.removeAttribute("href");
            });
        }
    });

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
    sr.reveal('#view-skill', { distance: '40px', delay: 50, interval: 100 });
    sr.reveal('.skills-img', { delay: 400 });
    // Scroll Reveal Portfolio
    sr.reveal('.portfolio-img', { interval: 200 });
    // Scroll Reveal Contact
    sr.reveal('.contact-subtitle', {});
    sr.reveal('.contact-text', { interval: 200 });
    sr.reveal('.contact-input', { delay: 200 });
    sr.reveal('.contact-button', { delay: 400 });
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function switcher(id, desc) {
    switch (id) {
        case "HTML":
            desc.innerHTML = "<p>(Competency: Comfortable with the basics) <br><br> I started learning HTML in 2020 from an online course. I have since used my knowledge to create a few projects, and keep this CV updated with information and new features.</p>";
            break;
        case "CSS":
            desc.innerHTML = "<p>(Competency: Comfortable with the basics) <br><br> I started learning CSS in 2020 and have used it alongside HTML.</p>";
            break;
        case "JavaScript":
            desc.innerHTML = "<p>(Competency: Comfortable with the basics) <br><br> I started learning JavaScript in 2020 and have used it alongside HTML.</p>";
            break;
        case "JQuery":
            desc.innerHTML = "<p>(Competency: Basic situational understanding) <br><br> I started learning JQuery in 2020 alongside JavaScript, but have used it less frequently. So far I have used it mainly when I find a convenient function that can help me achieve something specific.</p>";
            break;
        case "Java":
            desc.innerHTML = "<p>(Competency: Confident with the basics, have tutored at highschool level) <br><br> Java was the language that introduced me to coding. I started learning it in 2016 when I was in Grade 10.</p>";
            break;
        case "C#":
            desc.innerHTML = "<p>(Competency: Confident with the basics) <br><br> I picked up C# quickly as it is similar to Java. I started learning in 2019, and am currently using it in my degree.</p>";
            break;
        case "SQL":
            desc.innerHTML = "<p>(Competency: Comfortable with the basics) <br><br> I started learning SQL in 2017 in Grade 11, before currently using it in my degree. I have used it to create and query relational database systems for my applications. I also have basic knowledge with creating various modelling diagrams.</p>";
            break;
        case "Git":
            desc.innerHTML = "<p>(Competency: Basic functional knowledge) <br><br> I started learning Git in 2020 in order to upload my projects and host my CV.</p>";
            break;
        default:
            desc.innerHTML = "<p>(Competency: ) <br><br> </p>";
            break;
    }
}

async function skillSelected(element) {
    //console.log(element.id);
    var descriptionElement = document.getElementById("skills-link");

    if (descriptionElement.classList.contains("skill-selected")) {
        descriptionElement.classList.remove("skill-selected");
        await sleep(500);
        switcher(element.id, descriptionElement);
        descriptionElement.classList.add("skill-selected");
    } else {
        switcher(element.id, descriptionElement);
        descriptionElement.classList.add("skill-selected");
    }
}

//Skills popups (UNUSED FOR NOW)
/*

async function openPopup(id) {
    if (popup != "none" && popup != id) {
        closePopup(popup);
    }
    if (popup != id) {
        document.getElementById(id).style.animationName = 'pop-out';
        document.getElementById(id+"Close").style.animationName = 'show-close';
        document.getElementById(id).style.display = 'block';
        document.getElementById(id+"Close").style.display = 'block';
    } 
    popup = id;
}
async function closePopup(id) {
    popup = "none";
    document.getElementById(id).style.animationName = 'pop-in';
    document.getElementById(id+"Close").style.animationName = 'hide-close';
    await sleep(500);
    document.getElementById(id).style.display = 'none';
    document.getElementById(id+"Close").style.display = 'none';
}
function test() {
    alert("Hello");
}


//JQuery
$(document).ready(function(){
    $(window).on('scroll',function(){
        //Close currently open popup is page is scrolled
        if (popup != "none") {
            setTimeout(() => {
                closePopup(popup);
            }, 250)
        }
    });
});

*/