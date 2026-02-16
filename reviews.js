document.addEventListener("DOMContentLoaded", function () {

  const images = document.querySelectorAll(".review-card img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close-lightbox");
  const nextBtn = document.querySelector(".lightbox-next");
  const prevBtn = document.querySelector(".lightbox-prev");

  let currentIndex = 0;

  /* ===============================
     OPEN
  =============================== */

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[index].src;
    lightbox.style.display = "flex";
    document.body.classList.add("lightbox-open");
  }

  /* ===============================
     CLOSE
  =============================== */

  function closeLightbox() {
    lightbox.style.display = "none";
    document.body.classList.remove("lightbox-open");
  }

  /* ===============================
     NAVIGATION
  =============================== */

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
  }

  /* ===============================
     EVENTS
  =============================== */

  images.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
  });

  closeBtn.addEventListener("click", closeLightbox);

  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (lightbox.style.display === "flex") {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    }
  });

});
