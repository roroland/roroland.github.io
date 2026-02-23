"use strict";

const showFeature = document.querySelector('.showFeature');

// More about
const more = document.querySelector('#more');
more.addEventListener('click', function (e) {
  e.preventDefault();
  let moreAbout = document.querySelector('.moreAbout');
  let timeline = document.querySelector('.timeline');
  moreAbout.classList.add('is-open');
  this.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  })
  this.style.setProperty('display', 'none');
  setTimeout(timeline.classList.add('is-open'), 3000);
});

// Menu
const itemNav = document.querySelectorAll('.itemNav > li > a');
itemNav.forEach(function (item) {
  let itemNavId = item.getAttribute('id');
  item.addEventListener('click', function (e) {
    e.preventDefault();
    itemNav.forEach(function (item) {
      item.classList.remove('is-active');
    });
    item.classList.toggle('is-active');
    getFeature(itemNavId);
  });
});

// Feature
let cover = '';
let coverActive = '';
let root = document.documentElement;
root.style.setProperty('--xpos', 150);
root.style.setProperty('--ypos', 350);

function getFeature(itemNavId) {
  const closeLink = document.querySelector('.close');
  if (itemNavId === 'layout') {
    fetch('./content/layout.html')
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.getElementById('templateLayout').innerHTML = data;
      featureUI(itemNavId, closeLink);
    })
  } else if (itemNavId === 'rwd') {
    fetch('./content/rwd.html')
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.getElementById('templateRwd').innerHTML = data;
      featureUI(itemNavId, closeLink);
    })
  } else if (itemNavId === 'css') {
    fetch('./content/css.html')
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.getElementById('templateCss').innerHTML = data;
      featureUI(itemNavId, closeLink);
    })
  } else if (itemNavId === 'music') {
    fetch('./content/music.html')
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.getElementById('templateMusic').innerHTML = data;
      featureUI(itemNavId, closeLink);
    })
  } else if (itemNavId === 'ui') {
    fetch('./content/ui.html')
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.getElementById('templateUi').innerHTML = data;
      featureUI(itemNavId, closeLink);
    })
  }
}

let featureUI = function (itemNavId, closeLink) {
  coverActive = true;
  showFeature.className = '';
  showFeature.classList.add('showFeature', 'show', 'show-' + itemNavId);
  showFeature.scrollIntoView({block: 'center'});
  cover = document.querySelector('.contentItem-' + itemNavId + ' .placeholder');
  closeLink.addEventListener('click', close);
  
  subRun();
  
  let time = setTimeout(() => {
    coverActive = false;
    if (cover !== null) {
      cover.classList.add('is-active');
    }
    if (coverActive === false && itemNavId !== 'music' && itemNavId !== 'css') {
      clearTimeout(time);
      move(itemNavId);
    }
  }, 1000);
}

// Move placeholder
function move(itemNavId) {
  let wait = false;
  let placeholder = document.querySelector('.contentItem-' + itemNavId + ' .contentItem--wrapper .placeholder');
  placeholder.addEventListener('mousemove', e => {
    if (!wait) {
      wait = true;
      root.style.setProperty('--xpos', -e.clientX + (screen.width - placeholder.offsetWidth)  + "px");
      root.style.setProperty('--ypos', -e.clientY + (screen.height - placeholder.offsetHeight )  + "px");
      setTimeout(function () { wait = false; }, 25);
    }
  })
}

// Close feature modal
function close(e) {
  e.preventDefault();
  showFeature.classList = 'showFeature';
  if (cover !== null) {
    cover.classList.remove('is-active');
  }
  root.style.setProperty('--xpos', 150);
  root.style.setProperty('--ypos', 350);
  window.scrollBy(0, -window.innerHeight/2);
}

// Sub menu
function subRun() {
  let sub = document.querySelectorAll('.subMenu > li > a');
  sub.forEach(event => {
    event.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      sub.forEach(anchor => {
        anchor.classList.remove('is-active');
      })
      e.target.classList.add('is-active');
      let ph = e.target.parentNode.parentNode.parentNode;
      ph.classList.toggle('placeholder2');
      ph.classList.toggle('placeholder1');
    }, true)
  })
}
