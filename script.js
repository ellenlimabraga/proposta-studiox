// ====== CONFIGURAÇÃO RÁPIDA ======
// 1) Troque o número abaixo pelo seu WhatsApp com DDI/DDD (ex.: 5577999999999)
const WHATS_NUMBER = "5577988641348";

// 2) Mensagem padrão ao clicar
const WHATS_MESSAGE = "Fala! Vi a proposta da Studio X para lojas de motos elétricas e quero conversar sobre o conteúdo da minha loja.";

// ====== Links WhatsApp ======
const url = `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(WHATS_MESSAGE)}`;
const w1 = document.getElementById('whatsLink');
const w2 = document.getElementById('floatWhats');
if (w1) w1.href = url;
if (w2) w2.href = url;

// ====== Ano no rodapé ======
document.getElementById('year').textContent = new Date().getFullYear();

// ====== Reveal on scroll ======
const els = Array.from(document.querySelectorAll('.reveal'));
const io = new IntersectionObserver((entries)=>{
  for (const e of entries){
    if (e.isIntersecting) e.target.classList.add('show');
  }
},{threshold:.12});
els.forEach(el=>io.observe(el));

// ====== Smooth scroll ======
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (ev)=>{
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (target){
      ev.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
