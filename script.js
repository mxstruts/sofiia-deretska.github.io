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


// Get the spark container
const sparkContainer = document.getElementById('spark-container');

// Function to create a spark element
function createSpark() {
  const spark = document.createElement('div');
  spark.classList.add('spark');
  spark.style.left = `${Math.random() * 100}vw`; // Random horizontal position
  sparkContainer.appendChild(spark);

  // Remove the spark from DOM after animation ends
  spark.addEventListener('animationend', () => {
    spark.remove();
  });
}

// Create sparks at intervals
setInterval(createSpark, 200); // Adjust interval (milliseconds) as needed



