// Brogress bars

const about = document.querySelector('.about');
const progressValue = document.querySelectorAll('.progress-value');

window.addEventListener('scroll', startProgress);

function startProgress() {
  let count = 1;
  if (about.classList.contains("_active")) {
    progressValue.forEach(item => {
      item.classList.add(`bar-${count++}`);
    })
  }
}