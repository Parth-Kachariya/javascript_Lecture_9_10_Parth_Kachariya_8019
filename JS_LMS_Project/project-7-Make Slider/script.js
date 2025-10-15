{
  let slides = document.querySelectorAll(".slide");
  let nextBtn = document.querySelector(".next");
  let prevBtn = document.querySelector(".prev");
  let dots = document.querySelectorAll(".dot");
  let index = 0;
  let totalSlides = slides.length;

  function showSlide(n) {
    slides.forEach((slide) => slide.classList.add("hidden"));
    dots.forEach((dot) => dot.classList.remove("bg-white", "shadow-lg"));

    slides[n].classList.remove("hidden");
    dots[n].classList.add("bg-white", "shadow-lg");
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide(index);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
    });
  });

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  setInterval(nextSlide, 2000);

  showSlide(index);

  function showSlide(n) {
    slides.forEach((slide) => slide.classList.add("hidden"));
    dots.forEach((dot) => {
      dot.classList.remove("bg-white", "shadow-lg");
      dot.classList.add("bg-white/60");
    });

    slides[n].classList.remove("hidden");
    dots[n].classList.remove("bg-white/60");
    dots[n].classList.add("bg-white", "shadow-lg");
  }
}
