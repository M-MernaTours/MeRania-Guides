// ============================
// Counters + Bars + Lightbox
// ============================

(function () {
  // Counter animation
  const counters = document.querySelectorAll(".rv-kpi-num");
  const bars = document.querySelectorAll(".rv-bar span");

  const animateCounters = () => {
    counters.forEach((el) => {
      const targetRaw = el.getAttribute("data-count") || "0";
      const suffix = el.getAttribute("data-suffix") || "";
      const target = parseFloat(targetRaw);
      const isDecimal = targetRaw.includes(".");
      const duration = 900;
      const start = performance.now();

      const step = (t) => {
        const p = Math.min((t - start) / duration, 1);
        const value = target * p;

        el.textContent = isDecimal ? value.toFixed(1) + suffix : Math.round(value) + suffix;

        if (p < 1) requestAnimationFrame(step);
        else el.textContent = (isDecimal ? target.toFixed(1) : targetRaw) + suffix;
      };

      requestAnimationFrame(step);
    });

    // Animate bars (they already have inline widths, just trigger transition)
    requestAnimationFrame(() => {
      bars.forEach((b) => {
        const w = b.style.width;
        b.style.width = "0%";
        // force reflow
        void b.offsetWidth;
        b.style.width = w;
      });
    });
  };

  // Trigger when hero is visible
  const hero = document.querySelector(".rv-hero");
  if (hero && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCounters();
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(hero);
  } else {
    animateCounters();
  }

  // Lightbox for screenshots
  const shots = Array.from(document.querySelectorAll(".rv-shot"));
  const lb = document.getElementById("rvLightbox");
  const lbImg = document.getElementById("rvLbImg");
  const btnClose = document.getElementById("rvLbClose");
  const btnPrev = document.getElementById("rvLbPrev");
  const btnNext = document.getElementById("rvLbNext");

  let idx = 0;

  const openLb = (i) => {
    idx = i;
    const src = shots[idx].getAttribute("data-full");
    lbImg.src = src;
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeLb = () => {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    lbImg.src = "";
    document.body.style.overflow = "";
  };

  const prev = () => openLb((idx - 1 + shots.length) % shots.length);
  const next = () => openLb((idx + 1) % shots.length);

  shots.forEach((s, i) => s.addEventListener("click", () => openLb(i)));
  btnClose?.addEventListener("click", closeLb);
  btnPrev?.addEventListener("click", prev);
  btnNext?.addEventListener("click", next);

  // Close on backdrop click
  lb?.addEventListener("click", (e) => {
    if (e.target === lb) closeLb();
  });

  // Keyboard controls
  window.addEventListener("keydown", (e) => {
    if (!lb?.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  });
})();
