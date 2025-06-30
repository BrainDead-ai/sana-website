// script.js

// Fonction menu hamburger responsive
function toggleMenu() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('show');
}

// Gestion du formulaire contact
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const messageEl = document.getElementById('formMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      messageEl.textContent = 'Veuillez remplir tous les champs.';
      messageEl.className = 'message error';
      return;
    }

    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      messageEl.textContent = 'Veuillez entrer une adresse email valide.';
      messageEl.className = 'message error';
      return;
    }

    messageEl.textContent = 'Envoi en cours...';
    messageEl.className = 'message';

    setTimeout(() => {
      messageEl.textContent = 'Merci pour votre message, nous vous répondrons bientôt !';
      messageEl.className = 'message success';
      form.reset();
    }, 1800);
  });
});
