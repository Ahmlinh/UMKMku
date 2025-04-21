
const benefit = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // Ini bagian penting agar bisa diulang
    }
  });
});

document.querySelectorAll('.benefit-card').forEach((el) => {
  benefit.observe(el);
});

