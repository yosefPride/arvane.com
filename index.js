const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    const isActive = hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    hamMenu.setAttribute('aria-expanded', isActive);
    hamMenu.setAttribute('aria-label', isActive ? 'Close navigation menu' : 'Open navigation menu');
    document.body.classList.toggle('menu-open', isActive);
});

offScreenMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
        hamMenu.setAttribute('aria-expanded', 'false');
        hamMenu.setAttribute('aria-label', 'Open navigation menu');
        document.body.classList.remove('menu-open');
    });
});

//makes sure a date that has passed can't be selected in reserveTable.html
const input = document.getElementById('dateInput');
const now = new Date();
const today =
now.getFullYear() + '-' +
String(now.getMonth() + 1).padStart(2, '0') +
'-' +
String(now.getDate()).padStart(2, '0');

input.min = today;   // sets min attribute

//sends alert over message being sent in contact form.
const contactForm = document.querySelector('.contact-form form');
const contactButton = document.querySelector('.contact-btn');

if (contactForm && contactButton) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert("Okay. Your message was delivered.");
    });
} //THIS CODE ISN'T WORKING!!!!!!!