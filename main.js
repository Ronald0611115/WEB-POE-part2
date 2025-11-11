/* =======================
MAIN.JS - Project Interactivity
======================= */

/* ===== AUTOMATIC DATE & TIME ===== */
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer p');
    if(footer){
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        footer.textContent = `Prestige Serve Solutions © 2025 | ${now.toLocaleDateString('en-ZA', options)} All Rights Reserved`;
    }
});

/* ===== ACCORDIONS (Services Page) ===== */
const accordions = document.querySelectorAll('.package h3, .package h4');
accordions.forEach(header => {
    header.style.cursor = 'pointer';
    const content = header.nextElementSibling;
    if(content) content.style.display = 'none'; // hide by default

    header.addEventListener('click', () => {
        if(content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

/* ===== ENQUIRY FORM HANDLER (Contact Page) ===== */
const form = document.querySelector('form');
if(form){
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const now = new Date();
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            address: document.getElementById('address').value.trim(),
            service: document.getElementById('service').value,
            source: Array.from(document.querySelectorAll('input[name="source"]:checked')).map(cb => cb.value),
            message: document.getElementById('message').value.trim(),
            submittedAt: now.toISOString()
        };

        if(!formData.name || !formData.email || !formData.address){
            alert('Please fill all required fields!');
            return;
        }

        console.log('Form Submitted:', formData);
        alert(`Thank you ${formData.name}! Your request has been received on ${now.toLocaleString()}.`);
        form.reset();
    });
}

/* ===== MOBILE MENU TOGGLE ===== */
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.main-nav ul');

if(navToggle && navMenu){
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

/* ===== GALLERY LIGHTBOX ===== */
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach(img => {
    img.addEventListener('onclick', () => {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.style.position = 'floating';
        lightbox.style.top = '100px';
        lightbox.style.left = '100px';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.background = 'rgba(0,0,0,0.8)';
        lightbox.style.display = 'flex';
        lightbox.style.justifyContent = 'center';
        lightbox.style.alignItems = 'center';
        lightbox.style.cursor = 'pointer';
        lightbox.innerHTML = `<img src="${img.src}" style="max-width:90%; max-height:90%; border-radius:10px;">`;
        document.body.appendChild(lightbox);

        lightbox.addEventListener('onclick', () => {
            document.body.removeChild(lightbox);
        });
    });
});
