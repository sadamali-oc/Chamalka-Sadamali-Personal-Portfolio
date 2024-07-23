    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menuIcon.onclick = () => {
        menuIcon.classList.toggle("bi-x");
        // menuIcon.classList.toggle("bi bi-list"); // Toggle between the two icons
        navbar.classList.toggle("active");
    };

    // // Scroll section active link
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });

    //     // Sticky navbar
        let header = document.querySelector('.header');
      
            header.classList.toggle('sticky', window.scrollY > 100);
        

    //     // Initialize icon state and navbar
        menuIcon.classList.remove('bi-x');
    //     // menuIcon.classList.add('bi bi-list'); // Set initial icon state
        navbar.classList.remove('active');




    };



    //scroll reveal

    ScrollReveal({


        distance:'80px',
        duartion:2000,
        delay:200,
    

     });



     ScrollReveal().reveal('.home-content,heading', { origin:'top'});
     ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,.contact form', { origin: 'buttom' });
     ScrollReveal().reveal('.home-contentt h1, .about-img', { origin: 'left'});
     ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right' });

     //typed js

     

const typed =new Typed('.multiple-text',{

    strings:['Frontend Developer','Web Designer', 'IT Undergraduate','Tech Enthusiast'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
}
)