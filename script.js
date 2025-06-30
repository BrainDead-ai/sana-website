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

  // Crée un élément message s'il n'existe pas
  let messageEl = document.getElementById('formMessage');
  if (!messageEl) {
    messageEl = document.createElement('div');
    messageEl.id = 'formMessage';
    form.parentNode.insertBefore(messageEl, form.nextSibling);
  }

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
// Gestion du changement de langue
document.addEventListener('DOMContentLoaded', () => {
  const languageSwitcher = document.getElementById('languageSwitcher');
  if (!languageSwitcher) return;

  // Fonction pour changer la langue
  function switchLanguage(lang) {
    // Change l'attribut lang de <html>
    document.documentElement.lang = lang;

    // Change la direction du texte (ltr pour fr, rtl pour ar)
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Parcours tous les éléments avec data-lang-fr et data-lang-ar
    document.querySelectorAll('[data-lang-fr]').forEach(el => {
      if (lang === 'fr') {
        el.textContent = el.getAttribute('data-lang-fr');
      } else {
        el.textContent = el.getAttribute('data-lang-ar');
      }
    });

    // Change les placeholders des inputs et textarea
    document.querySelectorAll('input[data-placeholder-fr]').forEach(el => {
      if (lang === 'fr') {
        el.placeholder = el.getAttribute('data-placeholder-fr');
      } else {
        el.placeholder = el.getAttribute('data-placeholder-ar');
      }
    });

    document.querySelectorAll('textarea[data-placeholder-fr]').forEach(el => {
      if (lang === 'fr') {
        el.placeholder = el.getAttribute('data-placeholder-fr');
      } else {
        el.placeholder = el.getAttribute('data-placeholder-ar');
      }
    });
  }

  // Au changement du select
  languageSwitcher.addEventListener('change', e => {
    switchLanguage(e.target.value);
  });

  // Initialise avec la langue sélectionnée (fr par défaut)
  switchLanguage(languageSwitcher.value);
});
