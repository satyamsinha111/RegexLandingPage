// Dark mode toggle
document.getElementById('darkToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade in on scroll
const faders = document.querySelectorAll('.fade');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
faders.forEach(f => observer.observe(f));
// Fade-in animation
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade").forEach(el => {
    el.classList.add("show");
  });

  // Dark mode toggle
  const darkToggle = document.getElementById("darkToggle");
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
