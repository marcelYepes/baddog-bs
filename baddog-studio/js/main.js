const bsCollapse = new bootstrap.Collapse("#navbarNavDropdown", {
  toggle: false,
});

document.addEventListener("click", (e) => {
  if (!e.target.matches(".dropdown-menu a")) return false;

  bsCollapse.hide();
});
