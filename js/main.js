const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
  },

});

// dish tab animation
(() => {

  let tabs = document.querySelectorAll('.js-tab');
  let tabsBox = document.querySelectorAll('.js-tab-box')


  if (tabs) {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', function () {
        tabs.forEach(el => {
          el.classList.remove('b-pag-tab__item--active')
        });
        this.classList.add('b-pag-tab__item--active')
        tabsBox.forEach(el => {
          el.classList.remove('b-pag-tab-box--active')
        });
        tabsBox[i].classList.add('b-pag-tab-box--active')
      })
    }
  }
})();



document.addEventListener('DOMContentLoaded', function () {
  function Accordion(el, multiple) {
    this.el = el;
    this.multiple = multiple || false;

    // Находим все заголовки внутри элемента
    var headers = this.el.querySelectorAll('.b-page-accordion-head');

    // Назначаем обработчик для каждого заголовка
    headers.forEach(function(header) {
      header.addEventListener('click', () => {
        this.dropdown(header);
      });
    }, this);
  }

  Accordion.prototype.dropdown = function (header) {
    const parent = header.parentElement; // .b-page-accordion
    const body = parent.querySelector('.b-page-accordion-head-body');

    if (!body) return;

    const isOpen = body.style.maxHeight && body.style.maxHeight !== '0px';

    if (isOpen) {
      // закрываем
      body.style.maxHeight = null;
      parent.classList.remove('open');
    } else {
      // открываем
      body.style.maxHeight = body.scrollHeight + 'px';
      parent.classList.add('open');
    }

    if (!this.multiple) {
      // закрываем остальные
      const allBodies = this.el.querySelectorAll('.b-page-accordion-head-body');
      allBodies.forEach(function(otherBody) {
        if (otherBody !== body && otherBody.style.maxHeight && otherBody.style.maxHeight !== '0px') {
          otherBody.style.maxHeight = null;
          otherBody.parentElement.classList.remove('open');
        }
      });
    }
  };

  const container = document.querySelector('.b-page-accordion');
  if (container) {
    new Accordion(container, false);
  }
});


// slider order width
(() => {

  let container = document.querySelector('.js-container');
  let itemsSlider = document.querySelectorAll('.js-item-slider')


  function lengthDetermination(){
    if (container) {
      let dl = container.offsetWidth - 32;
      itemsSlider.forEach(el => {
        el.style.width = dl + "px";
      });
    }
  }
  lengthDetermination()

  window.addEventListener('resize', lengthDetermination);
  
})();