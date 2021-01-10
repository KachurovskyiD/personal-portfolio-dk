// Counter

let time = 2;
const counter = document.querySelector('.about');
window.addEventListener('scroll', startCount);

function startCount() {
  if (counter.classList.contains("_active")) {
    $(".number").each(function () {
      let i = 1,
        num = $(this).data("num"),
        step = 1000 * time / num,
        that = $(this),
        int = setInterval(function () {
          if (i <= num) {
            that.html(i);
          } else {
            clearInterval(int);
          }
          i++;
          window.removeEventListener('scroll', startCount);
        }, step);
    });
  }
}