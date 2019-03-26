var carousel = {
  arrowButtons: true,
  carouselID: '',

  init: function (id) {
    carousel.carouselID = id;
    carousel.activateCarousels();
  },

  activateCarousels: function () {
    var carouselList = document.querySelector('#' + carousel.carouselID + ' ul.carousel-list'),
      dots = document.querySelectorAll('#' + carousel.carouselID + ' input[type="radio"]'),
      items = dots.length,
      i = 0;
    
    carouselList.style.width = items * 100 + 'vw'
    
    if (items && carousel.arrowButtons) {
      if (items > 1) {
        carousel.activateNextAndPrev();
      }
      for (i = 0; i < items; i++) {
        dots[i].addEventListener('change', function (e) {
          carousel.carouselChange(e.target.dataset.value);
        })
      }
    }
  },

  activateNextAndPrev: function () {
    var arrowButtons = document.querySelectorAll('#' + carousel.carouselID +' [data-move]'),
      items = arrowButtons.length;

    for (var i = 0; i < items; i++) {
      arrowButtons[i].removeAttribute('hidden');
      arrowButtons[i].addEventListener('click', function(e) {
        carousel.moveNextOrPrev(e);
      });
      arrowButtons[i].addEventListener('keyup', function(e) {
        if(e.keyCode == 13) {
          carousel.moveNextOrPrev(e);
        }
      });
    }
  },

  moveNextOrPrev: function (e) {
    var name = e.target.dataset.carousel,
      buttons = document.querySelectorAll('input[name=' + name + ']'),
      move = (e.target.dataset.move === 'next') ? 1 : -1,
      selectedButton = Number(document.querySelector('input[name=' + name + ']:checked').dataset.value),
      newValue = (buttons.length + selectedButton + move) % buttons.length;

    buttons[newValue].checked = true;
    carousel.carouselChange(newValue);
  },

  carouselChange: function (value) {
    document.querySelector('.carousel-list').setAttribute('class', 'carousel-list carousel-slide-' + value);
  }
}