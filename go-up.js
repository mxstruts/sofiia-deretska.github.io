document.addEventListener('DOMContentLoaded', function () {
  // Get the button
  var goUpButton = document.getElementById('go-up-btn');

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      goUpButton.style.display = 'block';
    } else {
      goUpButton.style.display = 'none';
    }
  };
});

// Function to scroll to the top of the document when the button is clicked
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
