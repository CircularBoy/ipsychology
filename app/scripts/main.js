document.querySelector('.hero').classList.add('hero--load');

//
//jquery parents() pure js
//

Element.prototype.parents = function(selector) {
  var elements = [];
  var elem = this;
  var ishaveselector = selector !== undefined;

  while ((elem = elem.parentElement) !== null) {
    if (elem.nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    if (!ishaveselector || elem.matches(selector)) {
      elements.push(elem);
    }
  }

  return elements;
};

//
// Dots generate for sliders
//

const sliderDotBlocks = document.querySelectorAll(
  '[data-glide-el="controls[nav]"]:not([data-glide-generate-false])'
);

if (sliderDotBlocks) {
  sliderDotBlocks.forEach(function(dotBlock) {
    let prentNode = dotBlock.parents('.glide')[0];
    let sliderSlides = prentNode.querySelector('.glide__slides');

    for (let i = 0; i < sliderSlides.children.length; i++) {
      let sliderDot = document.createElement('div');
      sliderDot.classList.add('glide__bullet');
      sliderDot.setAttribute('data-glide-dir', '=' + i);

      dotBlock.appendChild(sliderDot);
    }
  });
}

//
// Open/close mobile menu
//

const toggleMobileMenu = function() {
  document.querySelector('.menu-top').classList.toggle('menu-top-click');
  document.querySelector('.menu-middle').classList.toggle('menu-middle-click');
  document.querySelector('.menu-bottom').classList.toggle('menu-bottom-click');
};

const closeMobileMenu = function() {
  document.querySelector('.menu-top').classList.remove('menu-top-click');
  document.querySelector('.menu-middle').classList.remove('menu-middle-click');
  document.querySelector('.menu-bottom').classList.remove('menu-bottom-click');
};

const headerMenu = document.querySelector('.header__mobile-menu');

if (headerMenu) {
  headerMenu.addEventListener('click', function() {
    document.querySelector('.header').classList.toggle('header--open');

    toggleMobileMenu();
  });
}

//
// Minify header when page scroll
//

const stickyNav = document.querySelector('.header');

if (stickyNav) {
  stickyNav.classList.add('header--is-load');

  const headerScroll = function() {
    if (stickyNav) {
      this.scrollY < 10
        ? stickyNav.classList.remove('header--minify')
        : stickyNav.classList.add('header--minify');
    }

    if (window.innerWidth < 1200) {
      stickyNav.classList.remove('header--open');
      closeMobileMenu();
    }
  };
  headerScroll();

  window.addEventListener('scroll', headerScroll);
  window.addEventListener('resize', headerScroll);
}

//
// Services slider
//

const servicesSlider = document.querySelector('.services__slider .glide');

if (servicesSlider) {
  var servicesSliderInit = false;

  const servicesSliderFn = function() {
    if (window.innerWidth < 768) {
      if (!servicesSliderInit) {
        servicesSliderInit = new Glide(servicesSlider, {
          perView: 1
        });

        servicesSliderInit.on('move', function() {
          let prentsNode = servicesSliderInit.selector;
          let bullets = prentsNode.querySelectorAll('.glide__bullet');
          bullets.forEach(function(elem) {
            elem.classList.remove('glide__bullet--active');
          });

          let activeBullet = prentsNode.querySelector(
            '.glide__bullet[data-glide-dir="=' + servicesSliderInit.index + '"]'
          );
          activeBullet.classList.add('glide__bullet--active');
        });

        servicesSliderInit.mount();
      }
    } else {
      // destroy slider if init
      if (typeof servicesSliderInit === 'object') {
        servicesSliderInit.destroy();
        servicesSliderInit = false;
      }
    }
  };

  servicesSliderFn();
  window.addEventListener('resize', servicesSliderFn);
}

//
// why slider
//

const whySlider = document.querySelector('.why__slider .glide');

if (whySlider) {
  var whySliderInit = false;

  const whySliderFn = function() {
    if (window.innerWidth < 768) {
      if (!whySliderInit) {
        whySliderInit = new Glide(whySlider, {
          perView: 1
        });

        whySliderInit.on('move', function() {
          let prentsNode = whySliderInit.selector;
          let bullets = prentsNode.querySelectorAll('.glide__bullet');
          bullets.forEach(function(elem) {
            elem.classList.remove('glide__bullet--active');
          });

          let activeBullet = prentsNode.querySelector(
            '.glide__bullet[data-glide-dir="=' + whySliderInit.index + '"]'
          );
          activeBullet.classList.add('glide__bullet--active');
        });

        whySliderInit.mount();
      }
    } else {
      // destroy slider if init
      if (typeof whySliderInit === 'object') {
        whySliderInit.destroy();
        whySliderInit = false;
      }
    }
  };

  whySliderFn();
  window.addEventListener('resize', whySliderFn);
}

//
// Result slider
//

const resultSlider = document.querySelector('.results__slider .glide');

if (resultSlider) {
  const resultSliderG = new Glide(resultSlider, {
    perView: 1,
    gap: 0
  });

  resultSliderG.on('move', function() {
    let prentsNode = resultSliderG.selector;
    let bullets = prentsNode.querySelectorAll('.glide__bullet');
    bullets.forEach(function(elem) {
      elem.classList.remove('glide__bullet--active');
    });
    let activeBullet = prentsNode.querySelector(
      '.glide__bullet[data-glide-dir="=' + resultSliderG.index + '"]'
    );
    activeBullet.classList.add('glide__bullet--active');

    let currentCount = prentsNode.querySelector('.glide__count-current');
    currentCount.innerHTML = resultSliderG.index + 1;
  });

  resultSliderG.mount();
}

//
// Offices slider
//

const officesSlider = document.querySelector('.offices__slider');

const officeMarginBottom = function() {
  officesSlider.style.marginBottom =
    -officesSlider.querySelector('.offices__item-content').clientHeight + 'px';
};
officeMarginBottom();

setInterval(officeMarginBottom, 1000);

if (officesSlider) {
  var officesSliderInit = false;

  const officesSliderFn = function() {
    if (window.innerWidth < 768) {
      if (!officesSliderInit) {
        officesSliderInit = new Glide(officesSlider, {
          perView: 1
        });

        officesSliderInit.on('move', function() {
          let bullets = officesSlider.querySelectorAll('.offices__bullet');
          bullets.forEach(function(elem) {
            elem.classList.remove('glide__bullet--active');
          });

          let activeBullet = officesSlider.querySelector(
            '.offices__bullet[data-glide-dir="=' +
              officesSliderInit.index +
              '"]'
          );
          activeBullet.classList.add('glide__bullet--active');
        });

        officesSliderInit.mount();
      }
    } else {
      // destroy slider if init
      if (typeof officesSliderInit === 'object') {
        officesSliderInit.destroy();
        officesSliderInit = false;
      }
    }

    officeMarginBottom();
  };

  officesSliderFn();
  window.addEventListener('resize', officesSliderFn);
}

//
// Gallery show more img btn
//

const galleryBtn = document.querySelector('.gallery__btn');

if (galleryBtn) {
  const galleryBlock = document.querySelector('.gallery');

  galleryBtn.addEventListener('click', function() {
    galleryBlock.classList.remove('gallery--mobile-hide');
    galleryBtn.style.display = 'none';
  });
}

//
// Team slider
//

const teamSlider = document.querySelector('.team__slider');

if (teamSlider) {
  var teamSliderInit = false;
  const teamSliderPrev = document.querySelector('.team__slider-prev');
  const teamSliderNext = document.querySelector('.team__slider-next');

  teamSliderPrev.addEventListener('click', function() {
    teamSliderInit.go('<');
  });

  teamSliderNext.addEventListener('click', function() {
    teamSliderInit.go('>');
  });

  const teamSliderFn = function() {
    if (window.innerWidth < 768) {
      if (!teamSliderInit) {
        teamSliderInit = new Glide(teamSlider, {
          perView: 2,
          bound: true,
          gap: 20,
          peek: 20,
          breakpoints: {
            439: {
              perView: 1
            }
          }
        });

        teamSliderInit.on('move', function() {
          let prentsNode = teamSliderInit.selector;
          let bullets = prentsNode.querySelectorAll('.glide__bullet');
          bullets.forEach(function(elem) {
            elem.classList.remove('glide__bullet--active');
          });

          let activeBullet = prentsNode.querySelector(
            '.glide__bullet[data-glide-dir="=' + teamSliderInit.index + '"]'
          );
          activeBullet.classList.add('glide__bullet--active');
        });

        teamSliderInit.mount();
      }
    } else {
      // destroy slider if init
      if (typeof teamSliderInit === 'object') {
        teamSliderInit.destroy();
        teamSliderInit = false;
      }
    }
  };

  teamSliderFn();
  window.addEventListener('resize', teamSliderFn);
}

//
// Init gumshoe
//

gumshoe.init({
  activeClass: 'header__nav-link--active',
  callback: function(nav) {
    if (nav === undefined) {
      document
        .querySelector('.header__nav-link:first-child')
        .classList.add('header__nav-link--active');
    }
  }
});

//
// Init smoth scroll
//

var scroll = new SmoothScroll('.scroll-to[href*="#"]', {
  header: '[data-scroll-header]'
});

//
// Phone mask
//

const inputMaskInit = function() {
  new Inputmask({
    mask: '+7 (999) 999-99-99'
  }).mask(document.querySelectorAll('[name="phone"]'));
};

inputMaskInit();

//
// Modals
//

function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

function closeModal() {
  eventFire(document.querySelector('.basicLightbox '), 'click');
}

const getTargetHTML = function(elem) {
  let id = elem.getAttribute('data-show-id');
  const target = document.querySelector(`[data-id="${id}"]`);
  return target.outerHTML;
};

document.querySelectorAll('[data-show-id]').forEach(function(elem) {
  const html = getTargetHTML(elem);
  elem.onclick = basicLightbox.create(html, {
    afterShow: function() {
      inputMaskInit();
    }
  }).show;
});

//
// Forms demo
//

const forms = document.querySelectorAll('form');

const formSubmitFn = function(e, elem = this) {
  let errors = false;

  e.preventDefault();

  let inputs = elem.querySelectorAll('input');

  inputs.forEach(function(input) {
    if (input.value === '') {
      input.parentElement.classList.add('input--error');
      input.setAttribute('placeholder', input.getAttribute('data-error'));
      errors = true;
    } else {
      input.parentElement.classList.remove('input--error');
    }
  });

  if (errors) {
    return false;
  }

  elem.classList.add('form--loading');

  setTimeout(() => {
    elem.classList.remove('form--loading');
    elem.classList.add('form--success');
  }, 2000);
};

if (forms.length) {
  forms.forEach(function(form) {
    form.addEventListener('submit', formSubmitFn);
  });
}

//
// Animate
//

AOS.init({
  once: true,
  disable: window.innerWidth < 1024
});

//
// Gallery
//

var getSrc = function getSrc(elem) {
  return elem.getAttribute('data-src');
};

var getPrev = function getPrev(elem) {
  return document.querySelector('.' + elem.getAttribute('data-prev'));
};
var getNext = function getNext(elem) {
  return document.querySelector('.' + elem.getAttribute('data-next'));
};

var open = function open(elem) {
  var init = function init(instance) {
    // Remove current src first. It stays until the second image has loaded.
    // You can also show a spinner in the meanwhile.
    instance.element().querySelector('img').src = '';

    instance.element().querySelector('img').src = getSrc(elem);

    var prev = instance.element().querySelector('#prev');
    var next = instance.element().querySelector('#next');

    prev.onclick = function(e) {
      elem = getPrev(elem);

      init(instance);
    };

    next.onclick = function(e) {
      elem = getNext(elem);

      init(instance);
    };
  };

  basicLightbox
    .create('<img>', {
      beforePlaceholder:
        '<button id="prev" class="btn btn--slider btn--icon-prev btn--gallery"></button>',
      afterPlaceholder:
        '<button id="next" class="btn btn--slider btn--icon-next btn--gallery"></button>',
      beforeShow: init
    })
    .show();
};

Array.prototype.forEach.call(
  document.querySelectorAll('.gallery__item'),
  function(elem) {
    elem.onclick = function(e) {
      return open(elem);
    };
  }
);
