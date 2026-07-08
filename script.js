// ====== CONFIGURAÇÃO ======
const WHATS_NUMBER = "5577998395930";
const WHATS_MESSAGE = "Oi! Vi a proposta da Studio X e quero conversar sobre marketing digital para minha loja de motos elétricas. Posso ter mais informações?";

// ====== Smooth Scroll ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ====== Scroll Animations ======
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar cards
document.querySelectorAll('.service-card, .process-step, .contact-card, .pricing-card').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// ====== Navbar Background on Scroll ======
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    navbar.style.background = 'rgba(10, 14, 39, 0.95)';
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
  } else {
    navbar.style.background = 'rgba(10, 14, 39, 0.7)';
    navbar.style.boxShadow = 'none';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ====== Ano no rodapé ======
document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('.footer');
  if (year && !year.innerHTML.includes(new Date().getFullYear())) {
    year.innerHTML = year.innerHTML.replace('2024', new Date().getFullYear());
  }
});

console.log('Studio X - Site carregado com sucesso!');
