let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("show"); // sembunyikan semua slide (opacity: 0)
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].classList.add("show"); // tampilkan slide (opacity: 1)

  setTimeout(showSlides, 3000); // 5 detik
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

document.querySelectorAll('.fitur-card').forEach((el) => {
  observer.observe(el);
});

let slide2Index = 0;
showSlides2();

function showSlides2() {
  let slides2 = document.getElementsByClassName("slide2");

  for (let i = 0; i < slides2.length; i++) {
    slides2[i].classList.remove("show2"); // sembunyikan semua slide (opacity: 0)
  }

  slide2Index++;
  if (slide2Index > slides2.length) { slide2Index = 1; }

  slides2[slide2Index - 1].classList.add("show2"); // tampilkan slide (opacity: 1)

  setTimeout(showSlides2, 3000); // 5 detik
}

function openSidebar() {
  document.getElementById("menunavbar").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}

function closesidebar() {
  document.getElementById("menunavbar").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}
