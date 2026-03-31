/* ============================================
   ACS — Avulus Cyber Space | script.js
   ============================================ */

'use strict';

// ============================================================
// NAVBAR SCROLL EFFECT
// ============================================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });


// ============================================================
// HAMBURGER MENU
// ============================================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Close mobile menu if clicking outside
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
});


// ============================================================
// SCROLL REVEAL ANIMATION (IntersectionObserver)
// ============================================================
const revealElements = document.querySelectorAll(
  '.reveal-up, .reveal-left, .reveal-right'
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
);

revealElements.forEach(el => revealObserver.observe(el));

// Trigger hero elements immediately
document.querySelectorAll('.hero .reveal-up').forEach((el, i) => {
  setTimeout(() => el.classList.add('visible'), i * 120 + 200);
});


// ============================================================
// FLOATING PARTICLES IN HERO
// ============================================================
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const PARTICLE_COUNT = 28;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = document.createElement('div');
    p.className = 'particle';

    const size = Math.random() * 3 + 1; // 1–4px
    const left = Math.random() * 100;
    const delay = Math.random() * 12;
    const duration = Math.random() * 14 + 10; // 10–24s
    const opacity = Math.random() * 0.5 + 0.1;

    // Colour: purple or cyan
    const colours = ['#8b5cf6', '#3b82f6', '#06b6d4', '#a78bfa'];
    const colour = colours[Math.floor(Math.random() * colours.length)];

    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      bottom: -20px;
      background: ${colour};
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
      opacity: ${opacity};
      filter: blur(${size > 2.5 ? 1 : 0}px);
    `;

    container.appendChild(p);
  }
}

createParticles();


// ============================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});


// ============================================================
// ACTIVE NAV LINK ON SCROLL
// ============================================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${id}`
          );
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));


// ============================================================
// ANIMATED NUMBER COUNTER FOR HERO STATS
// ============================================================
function animateCounters() {
  const counters = [
    { el: document.querySelector('.stat:nth-child(1) .stat-num'), target: 12, suffix: '+' },
  ];

  counters.forEach(({ el, target, suffix }) => {
    if (!el) return;
    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + suffix;
    }, 40);
  });
}

// Trigger when hero is in view (once)
const heroObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    setTimeout(animateCounters, 800);
    heroObserver.disconnect();
  }
}, { threshold: 0.3 });

const heroSection = document.getElementById('hero');
if (heroSection) heroObserver.observe(heroSection);


// ============================================================
// PARALLAX EFFECT ON HERO IMAGE
// ============================================================
const heroImg = document.querySelector('.hero-img');

window.addEventListener('scroll', () => {
  if (!heroImg) return;
  const scrollY = window.scrollY;
  if (scrollY < window.innerHeight) {
    heroImg.style.transform = `translateY(${scrollY * 0.35}px)`;
  }
}, { passive: true });


// ============================================================
// MENU CARD HOVER MICRO-INTERACTION
// ============================================================
document.querySelectorAll('.menu-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease';
  });
});


// ============================================================
// EXPERIENCE CARDS — STAGGER ON SCROLL
// ============================================================
const expCards = document.querySelectorAll('.exp-card');

const expObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cards = entry.target.closest('.experience-grid').querySelectorAll('.exp-card');
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 80);
      });
      expObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

if (expCards.length) {
  expCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s, background 0.3s, box-shadow 0.3s';
  });
  expObserver.observe(expCards[0]);
}


// ============================================================
// STEP CARDS — STAGGER ON SCROLL
// ============================================================
const stepEls = document.querySelectorAll('.step');

const stepObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const steps = entry.target.closest('.steps-container').querySelectorAll('.step');
      steps.forEach((step, i) => {
        setTimeout(() => {
          step.style.opacity = '1';
          step.style.transform = 'translateY(0)';
        }, i * 120);
      });
      stepObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

if (stepEls.length) {
  stepEls.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(24px)';
    step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  stepObserver.observe(stepEls[0]);
}


// ============================================================
// TYPING EFFECT ON HERO TITLE (subtle)
// ============================================================
// Removed to keep title bold/visible on first load


// ============================================================
// CURSOR GLOW (desktop only)
// ============================================================
if (!('ontouchstart' in window) && window.innerWidth > 900) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
    transform: translate(-50%, -50%);
    transition: left 0.15s ease, top 0.15s ease;
    will-change: left, top;
  `;
  document.body.appendChild(glow);

  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }, { passive: true });
}

console.log(
  '%cACS — Avulus Cyber Space',
  'color: #8b5cf6; font-size: 20px; font-weight: bold; font-family: Outfit, sans-serif;'
);
console.log('%cBuilt for the next level.', 'color: #a0a0c0; font-size: 12px;');
