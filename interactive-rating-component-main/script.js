// DOM
const rating = document.getElementById('rating');
const ratingResult = document.getElementById('rating-result');
const buttonContainer = document.getElementById('rating-buttons');
const buttons = buttonContainer.querySelectorAll('button');
const submitButton = document.getElementById('submit-button');
const score = document.getElementById('selected-score');

let currentScore = 0;

const clickScoreHandler = (event) => {
  if (event.target.tagName === 'BUTTON') {
    // 이전 클릭 버튼이 있다면, 해당 버튼 클래스 삭제
    if (currentScore !== 0) {
      buttons[currentScore - 1].classList.remove('selected');
    }
    currentScore = event.target.textContent;
    buttons[currentScore - 1].classList.add('selected');
    score.textContent = currentScore;
  }
};
buttonContainer.addEventListener('click', clickScoreHandler);
buttonContainer.addEventListener('keyup', (event) => {
  if (event.key === 'ENTER') {
    clickScoreHandler(event);
  }
});

const submitHandler = () => {
  if (currentScore === 0) return;

  rating.classList.add('none');
  ratingResult.classList.remove('none');
};
submitButton.addEventListener('click', submitHandler);
submitButton.addEventListener('keydown', submitHandler);
