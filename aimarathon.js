(() => {
  const nav = document.querySelector(".nav");
  const toggle = nav?.querySelector(".nav-toggle");
  const links = nav?.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const revealTargets = document.querySelectorAll(
    ".section, .trust li, .track-card, .timeline li, .prize-card, .committee-card, .partners-card, .register-card"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  const form = document.querySelector(".register-form");
  const status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = (data.get("name") || "").toString().trim();
      const email = (data.get("email") || "").toString().trim();
      if (!name || !email || !/.+@.+\..+/.test(email)) {
        status.style.color = "#f472b6";
        status.textContent = "Please add a name and a valid email so we can reach you.";
        return;
      }
      status.style.color = "";
      status.textContent = `Thanks, ${name.split(" ")[0]}. You're on the list — handbook drops to ${email} the moment it's public.`;
      form.reset();
    });
  }
})();
