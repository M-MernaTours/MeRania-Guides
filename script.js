// ===== Automatic Slider =====
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

// Change slide every 4 seconds
setInterval(showNextSlide, 4000);
const companyNumber = "201029545765";

const tours = [
  "Cairo Top Tour: Pyramids and GEM",
  "Alexandria Top Tour",
  "Cairo Top Tour: Memphis - Saqqara - NMEC",
  "Cairo Top Tour: Islamic and Coptic Tour",
  "2 Tours - Cairo Top Tours",
  "3 Day Tours – Cairo & Alexandria",
  "4 Tours Cairo and Alexandria",
  "Nile Cruise 4 Days / 3 Nights - Luxor & Aswan",
  "8 Days / 7 Nights – Cairo + Luxor & Aswan Nile Cruise",
  "Full Egypt Experience – 10 Days / 9 Nights",
  "12 Days / 11 Nights – Ultimate Egypt Experience"
];

function openBooking() {
  document.getElementById("bookingForm").style.display = "flex";
  document.body.style.overflow = "hidden";
  populateTours();
}

function closeBooking() {
  document.getElementById("bookingForm").style.display = "none";
  document.body.style.overflow = "auto";
}

function openDate(id) {
  document.getElementById(id).showPicker();
}

function populateTours() {
  const tourList = document.getElementById("tourList");
  tourList.innerHTML = "";

  tours.forEach((tour, index) => {
    const tourItem = document.createElement("div");
    tourItem.classList.add("tour-item");

    tourItem.innerHTML = `
      <input type="checkbox" id="tour${index+1}" value="${tour}">
      <label for="tour${index+1}">${tour}</label>
    `;

    tourList.appendChild(tourItem);
  });
}

// Close on outside click
document.getElementById("bookingForm").addEventListener("click", function (e) {
  if (e.target === this) {
    closeBooking();
  }
});

function sendBooking() {
  const name = document.getElementById("name").value;
  const dateFrom = document.getElementById("dateFrom").value;
  const dateTo = document.getElementById("dateTo").value;
  const adults = document.getElementById("adults").value;
  const children = document.getElementById("children").value;

  const selectedTours = Array.from(document.querySelectorAll("#tourList input:checked"))
    .map((checkbox) => checkbox.value)
    .join("%0A");

  const message = `Booking Request:%0AName: ${name}%0AFrom: ${dateFrom}%0ATo: ${dateTo}%0AAdults: ${adults}%0AChildren (under 10): ${children}%0ATours:%0A${selectedTours}`;
  const url = `https://wa.me/${companyNumber}?text=${message}`;

  window.open(url, "_blank");
}
