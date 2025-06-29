const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');

  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.classList.toggle('active');
  });