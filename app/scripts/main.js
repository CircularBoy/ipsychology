// document.querySelector('.hero').classList.add('hero--load');

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
    document.querySelector('.header__nav').classList.toggle('header__nav--open');
    document.querySelector('.header').classList.toggle('header--menu-open');
    document.querySelector('html').classList.toggle('hide-scroll')
    toggleMobileMenu();
  });
}

if (window.innerWidth < 768) {

  const menuItems = document.querySelectorAll('.header__nav a')

  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      document.querySelector('.header__nav').classList.toggle('header__nav--open');
      document.querySelector('.header').classList.toggle('header--menu-open');
      toggleMobileMenu();
    });
  });
}

//
// fix menu on scroll
//

// const headerMenuMobile = document.querySelector('.header__nav--open');

// if(headerMenuMobile) {
//   headerMenuMobile.onscroll = function() {
//     return false
//   }
// }

//
// aboutUs slider
//

const aboutUsSlider = document.querySelector('.about-us__slider .glide');

if (aboutUsSlider) {

  const aboutUsSliderPrev = document.querySelector('.about-us__slider-prev');
  const aboutUsSliderNext = document.querySelector('.about-us__slider-next');

  aboutUsSliderPrev.addEventListener('click', function() {
    aboutUsSliderInit.go('<');
  });

  aboutUsSliderNext.addEventListener('click', function() {
    aboutUsSliderInit.go('>');
  });

  const aboutUsSliderFn = function() {
    aboutUsSliderInit = new Glide(aboutUsSlider, {
      type: 'carousel',
      mode: 'vertical',
      perView: 1
    });

    aboutUsSliderInit.mount();
    
  };

  aboutUsSliderFn();
  window.addEventListener('resize', aboutUsSliderFn);
}

//
// about slider
//

const aboutSlider = document.querySelector('.about__slider .glide');
if (aboutSlider) {

  const aboutSliderPrev = document.querySelector('.about__slider-prev');
  const aboutSliderNext = document.querySelector('.about__slider-next');

  aboutSliderPrev.addEventListener('click', function() {
    aboutSliderInit.go('<');
  });

  aboutSliderNext.addEventListener('click', function() {
    aboutSliderInit.go('>');
  });

  var aboutSliderInit = false;

  const aboutSliderFn = function() {
    if (window.innerWidth < 992) {
      if (!aboutSliderInit) {
        aboutSliderInit = new Glide(aboutSlider, {
          type: 'carousel',
          perView: 1,
          bound: true,
          gap: 30,
          peek: { before: 140, after: 180 },
          breakpoints: {
            767: {
              perView: 1,
              peek: { before: 10, after: 10 },
              gap: 50
            }
          }
        });

        aboutSliderInit.mount();
      }
    } else {
      // destroy slider if init
      if (typeof aboutSliderInit === 'object') {
        aboutSliderInit.destroy();
        aboutSliderInit = false;
      }
    }
  };

  aboutSliderFn();
  window.addEventListener('resize', aboutSliderFn);
}


// Init gumshoe

gumshoe.init({
  activeClass: 'header__nav-link--active',
  offset: 95,
  selector: '[data-gumshoe]',
  callback: function(nav) {
    if (nav === undefined) {
      document
        .querySelector('.header__nav-link:first-child')
        .classList.add('header__nav-link--active');
    }
  }
});


// Init smoth scroll

var scroll = new SmoothScroll('.scroll-to[href*="#"]', {
  header: '[data-scroll-header]',
  offset: 95
});



//
//  custom scroll bar
//

const customScrollTablet = document.querySelector('[data-custom-scroll-tablet')

const scrollBar = new SimpleBar(customScrollTablet,{ 
  autoHide: false 
});


//hide icon scroll
if(customScrollTablet) {
  const scrollIcon = document.querySelector('#scroll-icon');
  scrollBar.getScrollElement().addEventListener('scroll', function() {
    console.log(scrollIcon)
    scrollIcon.classList.add('about-us__icon-scroll--hide');
  })
}

//
// simple scroll
//

// const customScroll = document.querySelectorAll('[data-custom-scroll')

// if(customScroll.length > 0) {
//   customScroll.forEach(el => new SimpleBar)
// }

//
// therapy dropdown
//

const dropdown = document.querySelectorAll('[data-dropdown]');

if (dropdown) {
  dropdown.forEach(function(elem) {
    elem.addEventListener('click', function() {
      dropdown.forEach(function(itemInner) {
        // itemInner.classList.remove('therapy__item--active')
      });
      const click = elem.getAttribute('data-click')
      if (click)
        elem.classList.toggle('therapy__item--hide');
      
      elem.setAttribute('data-click', 'true')
    });
      
  });
}

//
// experts more
//

const expertBtn = document.querySelector('[data-all-experts]');

if(expertBtn) {
  expertBtn.addEventListener('click' , function() {
    const expertItemWrap = expertBtn.parents('.experts__items')[0];
    const expertItems = expertItemWrap.querySelectorAll('.experts__item:not(.experts__item--active)');
    
    expertItems.forEach(function(item) {
      item.classList.add('experts__item--active')
    })
  })
}

//
// Phone mask
//

// const inputMaskInit = function() {
//   new Inputmask({
//     mask: '+7 (999) 999-99-99'
//   }).mask(document.querySelectorAll('[name="phone"]'));
// };

// inputMaskInit();

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
  elem.onclick = basicLightbox.create(html).show;
});


//
// Animate
//

// AOS.init({
//   once: true,
//   disable: window.innerWidth < 1024
// });

