function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');

  // hide section when clicked outside
  document.body.addEventListener('click', function closeMenu(e) {
    if (!menu.contains(e.target) && !icon.contains(e.target)) {
      menu.classList.remove('open');
      icon.classList.remove('open');
      document.body.removeEventListener('click', closeMenu);
    }
  });
}
