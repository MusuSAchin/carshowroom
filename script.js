const reviewStars = document.querySelectorAll('.review-star');
reviewStars.forEach(star => {
  star.addEventListener('click', () => {
    const value = star.dataset.value;
    for (let i = 1; i <= 5; i++) {
      document.getElementById(`star${i}`).classList.remove('filled');
    }
    for (let i = 1; i <= value; i++) {
      document.getElementById(`star${i}`).classList.add('filled');
    }
  });
});
