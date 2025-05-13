
const benefit = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } 
  });
});

document.querySelectorAll('.fitur-content').forEach((el) => {
  benefit.observe(el);
});

const benefit_genap = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } 
  });
});

document.querySelectorAll('.fitur-content_genap').forEach((el) => {
  benefit_genap.observe(el);
});

function openSidebar() {
  document.getElementById("menunavbar").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}

function closesidebar() {
  document.getElementById("menunavbar").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}