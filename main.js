function setYear() {
  const year = new Date().getFullYear();
  const node = document.querySelector("[data-year]");
  if (node) node.textContent = String(year);
}

function setupNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const panel = document.querySelector("[data-nav-panel]");
  if (!toggle || !panel) return;

  function close() {
    panel.classList.remove("is-open");
    toggle.setAttribute("aria-label", "Open menu");
    toggle.setAttribute("aria-expanded", "false");
  }
  function open() {
    panel.classList.add("is-open");
    toggle.setAttribute("aria-label", "Close menu");
    toggle.setAttribute("aria-expanded", "true");
  }

  toggle.addEventListener("click", () => {
    if (panel.classList.contains("is-open")) close();
    else open();
  });

  document.addEventListener("click", (e) => {
    if (!panel.classList.contains("is-open")) return;
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (panel.contains(target) || toggle.contains(target)) return;
    close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!panel.classList.contains("is-open")) return;
    close();
  });

  panel.querySelectorAll("a[href^='#']").forEach((a) => {
    a.addEventListener("click", () => close());
  });
}

function setupFakeForm() {
  const btn = document.querySelector("[data-fake-submit]");
  const note = document.querySelector("[data-form-note]");
  if (!btn || !note) return;

  btn.addEventListener("click", () => {
    note.textContent =
      "Thanks — form submission is disabled in this static demo. Wire this to your backend or form provider when deploying.";
  });
}

setYear();
setupNav();
setupFakeForm();
