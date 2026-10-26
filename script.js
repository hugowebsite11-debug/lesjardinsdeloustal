/* ─────────────────────────────────────────
   Les Gîtes de l'Aude — JavaScript
   ───────────────────────────────────────── */

// Notification "travaux / tarif réduit" sur les pages des cottages.
// Passer à false pour la retirer quand les travaux sont terminés.
const WORKS_NOTICE = true;

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll ──────────────────── */
  const navbar = document.getElementById('navbar');

  /* ── Notification travaux (pages cottages) ── */
  // Elle s'affiche à chaque arrivée sur une page cottage, même si elle a été fermée avant.
  if (WORKS_NOTICE && document.body.classList.contains('cottage-page')) {
    const notice = document.createElement('aside');
    notice.className = 'works-notice';
    notice.setAttribute('role', 'status');
    notice.innerHTML = `
      <button class="works-notice-close" type="button" aria-label="Fermer">✕</button>
      <span class="works-notice-badge">Tarif réduit en ce moment</span>
      <p>Nous agrandissons le domaine pour accueillir un <strong>spa</strong> et une <strong>piscine intérieure</strong>. Les travaux peuvent occasionner des nuisances sonores pendant votre séjour&nbsp;: c'est pourquoi nos tarifs sont actuellement réduits.</p>
    `;
    document.body.appendChild(notice);
    setTimeout(() => notice.classList.add('show'), 700);
    notice.querySelector('.works-notice-close').addEventListener('click', () => {
      notice.classList.remove('show');
      setTimeout(() => notice.remove(), 400);
    });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  /* ── En-tête : se cache quand on descend, revient dès qu'on remonte ── */
  // Il reste toujours visible sur la photo d'accueil (et menu mobile ouvert).
  if (navbar) {
    const heroSection = document.getElementById('hero');
    let lastY = window.scrollY;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      const keepVisibleUntil = heroSection ? heroSection.offsetHeight - 80 : 160;
      const menuOpen = document.querySelector('.mobile-menu.open');
      if (y < keepVisibleUntil || menuOpen) {
        navbar.classList.remove('nav-hidden');
      } else if (y > lastY + 6) {
        navbar.classList.add('nav-hidden');
      } else if (y < lastY - 6) {
        navbar.classList.remove('nav-hidden');
      }
      if (Math.abs(y - lastY) > 6) lastY = y;
    }, { passive: true });
  }

  /* ── Accueil mobile : le logo de la photo rétrécit en défilant et devient le logo de l'en-tête ── */
  const heroLogo = document.querySelector('.hero-logo-img');
  const mobileQuery = window.matchMedia('(max-width: 768px)');
  if (heroLogo && navbar) {
    const heroLogoWrap = heroLogo.closest('.hero-logo-wrap') || heroLogo.parentElement;
    const navLogoImg = navbar.querySelector('.nav-logo-scroll img');

    const updateLogoMorph = () => {
      if (!mobileQuery.matches) {
        document.documentElement.classList.remove('logo-morph');
        heroLogo.style.transform = '';
        heroLogo.classList.remove('is-docked');
        navbar.classList.remove('logo-docked');
        return;
      }
      document.documentElement.classList.add('logo-morph');
      // Bas de l'en-tête (capsule flottante : décalage du haut + hauteur)
      const navBottom = (navbar.offsetTop || 0) + (navbar.offsetHeight || 56);
      const y = window.scrollY;
      // Distance à parcourir : du haut du logo (au repos) jusqu'au bas de l'en-tête
      const travel = heroLogoWrap.getBoundingClientRect().top + y - navBottom;
      const p = travel > 0 ? Math.min(Math.max(y / travel, 0), 1) : 1;
      const navLogoH = (navLogoImg && navLogoImg.offsetHeight) || 38;
      const targetScale = Math.min(1, navLogoH / (heroLogo.offsetHeight || navLogoH));
      heroLogo.style.transform = `scale(${1 - p * (1 - targetScale)})`;
      const docked = p >= 1;
      heroLogo.classList.toggle('is-docked', docked);
      navbar.classList.toggle('logo-docked', docked);
    };
    window.addEventListener('scroll', updateLogoMorph, { passive: true });
    window.addEventListener('resize', updateLogoMorph);
    heroLogo.addEventListener('load', updateLogoMorph);
    updateLogoMorph();
  }


  /* ── Hero image Ken Burns ───────────── */
  const heroBgImg = document.querySelector('.hero-bg img');
  if (heroBgImg) {
    if (heroBgImg.complete) {
      heroBgImg.classList.add('loaded');
    } else {
      heroBgImg.addEventListener('load', () => heroBgImg.classList.add('loaded'));
    }
  }


  /* ── Menu hamburger mobile ──────────── */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
      document.body.classList.toggle('menu-open', isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
        document.body.classList.remove('menu-open');
      });
    });
  }


  /* ── Scroll reveal ──────────────────── */
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));


  /* ── Compteur animé (stats) ─────────── */
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const step = 16;
    const steps = duration / step;
    let current = 0;

    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + suffix;
    }, step);
  }

  const counters = document.querySelectorAll('.stat-num[data-target]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));


  /* ── Formulaire de contact ──────────── */
  const form = document.getElementById('contact-form');
  const formSuccess = document.querySelector('.form-success');
  const formError = document.querySelector('.form-error');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Piège à spam bots : si rempli, on abandonne silencieusement
      if (form.querySelector('[name="_honey"]')?.value) return;

      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Envoi en cours…';
      btn.disabled = true;
      if (formError) formError.style.display = 'none';

      const data = new FormData(form);
      data.append('name', 'Les Jardins de l\'Oustal — Site web');
      data.append('_subject', 'Nouvelle demande de contact — Les Jardins de l\'Oustal');
      data.append('_template', 'table');
      data.append('_language', 'fr');
      data.append('_captcha', 'false');

      fetch('https://formsubmit.co/ajax/lesjardinsdeloustal@gmail.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      })
        .then(res => {
          if (!res.ok) throw new Error('send failed');
          form.style.display = 'none';
          if (formSuccess) formSuccess.style.display = 'block';
        })
        .catch(() => {
          btn.textContent = originalText;
          btn.disabled = false;
          if (formError) formError.style.display = 'block';
        });
    });
  }


  /* ── Dates min sur les champs date ──── */
  const today = new Date().toISOString().split('T')[0];
  const dateInputs = document.querySelectorAll('input[type="date"]');
  dateInputs.forEach(input => {
    input.setAttribute('min', today);
  });

  const arrivalInput = document.getElementById('arrivee');
  const departInput  = document.getElementById('depart');

  if (arrivalInput && departInput) {
    arrivalInput.addEventListener('change', () => {
      const next = new Date(arrivalInput.value);
      next.setDate(next.getDate() + 1);
      departInput.setAttribute('min', next.toISOString().split('T')[0]);
      if (departInput.value && departInput.value <= arrivalInput.value) {
        departInput.value = next.toISOString().split('T')[0];
      }
    });
  }


  /* ── Smooth scroll liens internes ───── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = navbar ? navbar.offsetHeight : 80;
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  });

});
