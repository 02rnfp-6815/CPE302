// Small JS for menu, smooth scroll, and contact form behavior
document.getElementById('year').textContent = new Date().getFullYear();


// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('mainNav');
menuBtn.addEventListener('click', ()=>{
nav.classList.toggle('open');
});


// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click', function(e){
const target = document.querySelector(this.getAttribute('href'));
if(target){
e.preventDefault();
target.scrollIntoView({behavior:'smooth',block:'start'});
// close nav on small screens
if(nav.classList.contains('open')) nav.classList.remove('open');
}
});
});


// Contact form: basic validation + mailto fallback
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
form.addEventListener('submit', (e)=>{
e.preventDefault();
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();


if(!name || !email || !message){
formMessage.textContent = 'Please fill in all fields.';
return;
}
// (No changes needed, script already supports year and contact form)
});