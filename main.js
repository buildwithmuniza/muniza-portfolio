/* =========================================================
   MUNIZA PORTFOLIO
   MAIN JAVASCRIPT
   MOBILE NAV + FORM + LOADING + ANIMATIONS
   ========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {

    menuToggle.addEventListener('click', () => {

        navMenu.classList.toggle('open');

        const icon = menuToggle.querySelector('i');

        if (navMenu.classList.contains('open')) {

            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');

        } else {

            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');

        }

    });


    /* Close mobile menu after clicking a link */

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {

        link.addEventListener('click', () => {

            navMenu.classList.remove('open');

            const icon = menuToggle.querySelector('i');

            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');

        });

    });

}


/* =========================================================
   2. CONTACT FORM
   ========================================================= */

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {

    contactForm.addEventListener('submit', function (event) {

        /*
         * Prevent normal form submission.
         * This keeps the demo frontend-only.
         */

        event.preventDefault();


        /* Get form values */

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();


        /* Basic validation */

        if (!name || !email || !message) {

            formMessage.style.display = 'block';

            formMessage.style.color = '#ff5e36';

            formMessage.textContent =
                'Please complete all fields before sending.';

            return;

        }


        /* Success message */

        formMessage.style.display = 'block';

        formMessage.style.color = '#70e000';

        formMessage.textContent =
            `Thanks ${name}! Your message has been received.`;


        /* Clear form */

        contactForm.reset();

    });

}


/* =========================================================
   3. NAVBAR SHADOW ON SCROLL
   ========================================================= */

const navbar = document.querySelector('.navbar');

if (navbar) {

    window.addEventListener('scroll', () => {

        if (window.scrollY > 30) {

            navbar.style.boxShadow =
                '0 10px 35px rgba(0, 0, 0, 0.25)';

        } else {

            navbar.style.boxShadow = 'none';

        }

    });

}


/* =========================================================
   4. LOADING SCREEN
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    const loadingScreen = document.getElementById('loadingScreen');


    /*
     * Wait until all images, fonts and page resources
     * are completely loaded.
     */

    window.addEventListener('load', () => {

        setTimeout(() => {

            if (loadingScreen) {

                loadingScreen.classList.add('hide');

            }

            /*
             * This class activates the entrance animations
             * for the navbar, hero text and profile image.
             */

            document.body.classList.add('page-loaded');

        }, 900);

    });

});


/* =========================================================
   5. PREMIUM SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(
    '.intro-card, .project-card, .skill-progress-card, .about-image, .about-content, .contact-form-wrapper, .contact-info, .cta-box'
);


/*
 * Add reveal class to all selected elements.
 */

revealElements.forEach(element => {

    element.classList.add('reveal');

});


/*
 * Intersection Observer watches elements
 * and reveals them when they enter the screen.
 */

if ('IntersectionObserver' in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('show');

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    /*
     * Fallback for older browsers.
     */

    revealElements.forEach(element => {

        element.classList.add('show');

    });

}


/* =========================================================
   6. SMOOTH PAGE EXPERIENCE
   ========================================================= */

/*
 * Prevent accidental double-click issues on buttons
 * and give internal links a clean transition.
 */

const internalLinks = document.querySelectorAll(
    'a[href$=".html"]'
);

internalLinks.forEach(link => {

    link.addEventListener('click', () => {

        document.body.classList.add('page-changing');

    });

});


/* =========================================================
   7. ACTIVE NAVIGATION SAFETY
   ========================================================= */

/*
 * Automatically detect the current page and
 * keep the correct navigation link active.
 */

const currentPage =
    window.location.pathname.split('/').pop() || 'index.html';

const allNavLinks = document.querySelectorAll('.nav-link');

allNavLinks.forEach(link => {

    const linkPage =
        link.getAttribute('href');

    if (linkPage === currentPage) {

        allNavLinks.forEach(item => {
            item.classList.remove('active');
        });

        link.classList.add('active');

    }

});