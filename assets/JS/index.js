const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

if (hamMenu && offScreenMenu) {
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
}

//makes sure a date that has passed can't be selected in reserveTable.html
const input = document.getElementById('dateInput');
const now = new Date();
const today =
now.getFullYear() + '-' +
String(now.getMonth() + 1).padStart(2, '0') +
'-' +
String(now.getDate()).padStart(2, '0');

if (input) {
    input.min = today;   // sets min attribute
}

//sends alert over message being sent in contact form.
const contactForm = document.querySelector('.contact-form form');
const contactButton = document.querySelector('.contact-btn');

if (contactForm && contactButton) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert("Okay. Your message was delivered.");
    });
} //THIS CODE ISN'T WORKING!!!!!!!

//reveals sections in menu page.
function showSection(id) {
// Hide all sections
const sections = document.querySelectorAll('.category');
sections.forEach(sec => sec.classList.remove('active'));

// Show the requested section
document.getElementById(id).classList.add('active');
}


//join team FAQ
const buttons = document.querySelectorAll('.toggleBtn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const qaItem = btn.closest('.qa-item');
        const content = qaItem ? qaItem.querySelector('.slide-container') : null;

        if (!content) {
            return;
        }

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.classList.remove('open');
            btn.innerHTML = '&#8964;';
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.classList.add('open');
            btn.innerHTML = '&#8963;';
        }
    });
});
