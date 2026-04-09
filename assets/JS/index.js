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

// Gift Cards: Payment modal UI
(() => {
    const continueButton = document.getElementById('gift-continue');
    const modal = document.getElementById('gift-payment-modal');
    const amountSelect = document.getElementById('gift-amount');
    const amountOutput = document.getElementById('gift-payment-amount');

    if (!continueButton || !modal) {
        return;
    }

    const closeTargets = modal.querySelectorAll('[data-gift-payment-close]');
    const methodButtons = modal.querySelectorAll('[data-gift-method]');
    const panels = modal.querySelectorAll('[data-gift-panel]');

    const openModal = () => {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('gift-payment-open');

        if (amountSelect && amountOutput) {
            const selected = amountSelect.value || amountSelect.options?.[amountSelect.selectedIndex]?.textContent;
            if (selected) {
                amountOutput.textContent = selected;
            }
        }

        const focusTarget = modal.querySelector('.gift-payment-close');
        if (focusTarget) {
            focusTarget.focus();
        }
    };

    const closeModal = () => {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('gift-payment-open');
        continueButton.focus();
    };

    const setActiveMethod = (method) => {
        methodButtons.forEach((button) => {
            const isActive = button.getAttribute('data-gift-method') === method;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-selected', String(isActive));
        });

        panels.forEach((panel) => {
            const isActive = panel.getAttribute('data-gift-panel') === method;
            panel.classList.toggle('is-active', isActive);
            panel.hidden = !isActive;
        });
    };

    continueButton.addEventListener('click', openModal);

    closeTargets.forEach((node) => {
        node.addEventListener('click', closeModal);
    });

    methodButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const method = button.getAttribute('data-gift-method');
            if (!method) {
                return;
            }
            setActiveMethod(method);
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') {
            return;
        }
        if (!modal.classList.contains('is-open')) {
            return;
        }
        closeModal();
    });
})();