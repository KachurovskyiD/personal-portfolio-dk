// Header-burger

function getBurgerMenu(inputSelector, menuSelector) {
  let input = document.querySelector(inputSelector),
    menu = document.querySelector(menuSelector);

  document.addEventListener('click', (e) => {
    if (input.checked == true) {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target == menu) {
      input.checked = false;
      menu.style.display = 'none';
    }
  });
}

getBurgerMenu('#check-menu', '.header__menu');