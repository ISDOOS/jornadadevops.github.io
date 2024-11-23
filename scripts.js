// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll Reveal
window.addEventListener('scroll', reveal);

function reveal() {
  const elements = document.querySelectorAll('.reveal');
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < window.innerHeight) {
      element.classList.add('active');
    }
  });
}

// Modal
document.querySelectorAll('.project-image').forEach(img => {
  img.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modalImage.src = e.target.src;
    modal.classList.remove('hidden');
  });
});

document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('modal').classList.add('hidden');
});

// Back to Top Button
window.addEventListener('scroll', () => {
  const backToTopButton = document.getElementById('backToTop');
  if (window.scrollY > 300) {
    backToTopButton.classList.remove('hidden');
  } else {
    backToTopButton.classList.add('hidden');
  }
});

document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Form Submit
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('form-response').classList.remove('hidden');
  document.getElementById('contactForm').reset();
});
