/* ─────────────────────────────────────────
   Les Gîtes de l'Aude — JavaScript
   ───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll ──────────────────── */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });


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
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
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

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Envoi en cours…';
      btn.disabled = true;

      // Simulation envoi (à remplacer par un vrai service : Formspree, EmailJS, etc.)
      setTimeout(() => {
        form.style.display = 'none';
        if (formSuccess) {
          formSuccess.style.display = 'block';
        }
      }, 1500);
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
