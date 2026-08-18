// Kayal Point — front-end interactions
// No build step, no dependencies.

document.addEventListener("DOMContentLoaded", () => {

  // ---- Footer year ----
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Header background on scroll ----
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // ---- Mobile nav toggle ----
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    // Close menu after tapping a link
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Booking form ----
  const form = document.getElementById("bookForm");
  const status = document.getElementById("formStatus");
  const checkin = document.getElementById("checkin");
  const checkout = document.getElementById("checkout");

  // Keep checkout after checkin
  if (checkin && checkout) {
    checkin.addEventListener("change", () => {
      checkout.min = checkin.value;
      if (checkout.value && checkout.value <= checkin.value) {
        checkout.value = "";
      }
    });
  }

  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const data = Object.fromEntries(new FormData(form).entries());

      // No backend is wired up yet — this is where a real request would go.
      // Example:
      // fetch("/api/enquiries", { method: "POST", body: JSON.stringify(data) })

      status.textContent =
        `Thanks, ${data.name.split(" ")[0]}. This form isn't connected to a booking ` +
        `system yet — wire it up to your email service or backend to receive enquiries.`;

      form.reset();
    });
  }

});
