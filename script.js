const navbar = document.querySelector('.navbar');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    navbar.classList.remove('navbar-show');
  } else {
    navbar.classList.add('navbar-show');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', function() {
  const options = {
    threshold: 0.5
  };

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.id === 'about-image') {
          entry.target.classList.add('in-view');
        } else if (entry.target.id === 'about-text') {
          entry.target.classList.add('in-view-right');
        }
      }
    });
  }, options);

const aboutImage = document.getElementById('about-image');
const aboutText = document.getElementById('about-text');

  observer.observe(aboutImage);
  observer.observe(aboutText);
});

 document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('img');
  const fadeInOptions = {
    threshold: 0.5 
  };

  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target); 
      }
    });
  }, fadeInOptions);

  images.forEach(image => {
    fadeInObserver.observe(image);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const homeSection = document.querySelector('#home');
  const textElements = homeSection.querySelectorAll('h1, p');

  const observerOptions = {
      threshold: 0.5 
  };

const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate-fadeInUp');
              textElements.forEach((element, index) => {
                  element.classList.add('animate-slideInUp');
                  if (index === 1) { 
                      element.classList.add('delay-200');
                  }
              });
              observer.unobserve(entry.target);  
          }
      });
  }, observerOptions);

  observer.observe(homeSection);
});