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

document.getElementById('review-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const reviewText = document.getElementById('review-text').value;
  const reviewsDiv = document.getElementById('reviews');

  const review = document.createElement('div');
  review.classList.add('review');

  const reviewTextParagraph = document.createElement('p');
  reviewTextParagraph.classList.add('review-text');
  reviewTextParagraph.textContent = reviewText;

  const reviewerParagraph = document.createElement('p');
  reviewerParagraph.classList.add('reviewer');
  reviewerParagraph.textContent = 'Anonymous';

  review.appendChild(reviewTextParagraph);
  review.appendChild(reviewerParagraph);
  reviewsDiv.appendChild(review);

  document.getElementById('review-text').value = '';
});
