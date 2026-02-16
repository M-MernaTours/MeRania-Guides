document.addEventListener("DOMContentLoaded", function () {

  const images = document.querySelectorAll(".review-card img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close-lightbox");
  const nextBtn = document.querySelector(".lightbox-next");
  const prevBtn = document.querySelector(".lightbox-prev");

  let currentIndex = 0;

  function showImage(index) {
    lightbox.style.display = "flex";
    document.body.classList.add("lightbox-open");
    lightboxImg.src = images[index].src;
    currentIndex = index;
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      showImage(index);
    });
  });

  nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  };

  prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  };

  closeBtn.onclick = () => lightbox.style.display = "none";
  

  lightbox.onclick = e => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      document.body.classList.remove("lightbox-open");

    }
  };

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") lightbox.style.display = "none";
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
  });

});
