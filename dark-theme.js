document.addEventListener('DOMContentLoaded', function () {
  const themeSwitch = document.getElementById('theme-switch');
  const body = document.body;

  themeSwitch.addEventListener('click', function () {
    body.classList.toggle('dark-theme');

    // Toggle the moon and sun icons
    const icon = themeSwitch.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });

  // Check the user's local storage for theme preference
  const darkThemeEnabled = localStorage.getItem('darkThemeEnabled') === 'true';

  // Apply the theme if it's enabled
  if (darkThemeEnabled) {
    body.classList.add('dark-theme');
    const icon = themeSwitch.querySelector('i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  // Save the theme preference to local storage
  themeSwitch.addEventListener('click', function () {
    const icon = themeSwitch.querySelector('i');
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('darkThemeEnabled', isDarkTheme);
  });
});

// NAVBAR THEME CHANGE

document.addEventListener('DOMContentLoaded', function () {
  const themeSwitch = document.getElementById('theme-switch-2');
  const body = document.body;

  themeSwitch.addEventListener('click', function () {
    body.classList.toggle('dark-theme');

    // Toggle the moon and sun icons
    const icon = themeSwitch.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });

  // Check the user's local storage for theme preference
  const darkThemeEnabled = localStorage.getItem('darkThemeEnabled') === 'true';

  // Apply the theme if it's enabled
  if (darkThemeEnabled) {
    body.classList.add('dark-theme');
    const icon = themeSwitch.querySelector('i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  // Save the theme preference to local storage
  themeSwitch.addEventListener('click', function () {
    const icon = themeSwitch.querySelector('i');
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('darkThemeEnabled', isDarkTheme);
  });
});
