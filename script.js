// Small interactions for the portfolio
document.getElementById('year').textContent = new Date().getFullYear();

function submitContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  // For now, we open mailto as a simple fallback. Replace with backend endpoint if available.
  const subject = encodeURIComponent(`Website message from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
  window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = a.getAttribute('href');
    if(target.length>1){
      e.preventDefault();
      document.querySelector(target).scrollIntoView({behavior:'smooth'});
    }
  });
});
