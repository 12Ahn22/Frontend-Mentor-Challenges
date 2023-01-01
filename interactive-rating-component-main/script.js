// DOM
const rating = document.getElementById('rating');
const ratingResult = document.getElementById('rating-result');
const ratingForm = document.getElementById('rating_form');
const ratingLabels = ratingForm.querySelectorAll('label');
const submitButton = document.getElementById('submit-button');
const score = document.getElementById('selected-score');

let currentScore = 0;

ratingForm.addEventListener('change', (event) => {
  // 웹 접근성 ARIA-CHECK
  if (currentScore !== 0) {
    ratingLabels[currentScore - 1].ariaChecked = false;
  }
  currentScore = parseInt(event.target.value, 10);
  ratingLabels[currentScore - 1].ariaChecked = true;
  score.textContent = currentScore;
});

const submitHandler = (event) => {
  event.preventDefault();

  if (currentScore === 0) return;

  rating.classList.add('none');
  ratingResult.classList.remove('none');
};
submitButton.addEventListener('click', submitHandler);
submitButton.addEventListener('keydown', submitHandler);
