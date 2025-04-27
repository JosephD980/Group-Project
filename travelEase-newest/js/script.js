document.addEventListener("DOMContentLoaded", function() {
  // Get references to the arrow buttons and the card row
  const leftBtn = document.querySelector('.carousel-btn.left');
  const rightBtn = document.querySelector('.carousel-btn.right');
  const cardRow = document.querySelector('.card-row');

  // When the left arrow is clicked, scroll left
  leftBtn.addEventListener('click', function() {
    cardRow.scrollBy({ left: -300, behavior: 'smooth' });
  });

  // When the right arrow is clicked, scroll right
  rightBtn.addEventListener('click', function() {
    cardRow.scrollBy({ left: 300, behavior: 'smooth' });
  });
});