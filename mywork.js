// Aktivierung der Erweiterung WEBGL_color_buffer_float
const canvas = document.createElement('canvas');
const gl = canvas.getContext('webgl');
if (!gl) {
  console.error('WebGL not supported');
}
const ext = gl.getExtension('WEBGL_color_buffer_float');
if (!ext) {
  console.error('WEBGL_color_buffer_float not supported');
}

// jQuery Ripples Plugin Initialisierung
$('#ripple').ripples({
  resolution: 802,
  dropRadius: 80,
  perturbance: 0.02
});

// Ballon Animation
function animateBalloon(balloon) {
  var startAngle = parseFloat(balloon.data('angle'));
  var screenWidth = $(window).width();
  var amplitudeX = screenWidth > 768 ? 1000 : screenWidth * 0.9;
  var amplitudeY = 70;
  var speed = 0.0004;
  var centerX = screenWidth > 768 ? (screenWidth * 0.7) - balloon.width() / 2 : (screenWidth - balloon.width()) / 2;
  var centerY = 50;
  var x = centerX + amplitudeX * Math.sin(startAngle);
  var y = centerY + amplitudeY * Math.cos(startAngle);
  balloon.css({left: x, top: y});
  balloon.data('angle', startAngle + speed);
  requestAnimationFrame(function() {
    animateBalloon(balloon);
  });
}

var initialAngle = 0;
$('.balloon').each(function(index) {
  var currentBalloon = $(this);
  setTimeout(function() {
    currentBalloon.data('angle', initialAngle + index * 0.5);
    animateBalloon(currentBalloon);
  }, index * 150);
});

$(document).ready(function() {
  $('body, html').css('opacity', '1');
});

// Navigation
document.querySelector('.navkorb').addEventListener('click', function() {
  this.classList.toggle('active');
  let bars = this.querySelectorAll('.bar');
  bars.forEach(bar => {
    bar.classList.toggle('active');
  });
});

document.querySelectorAll('.bar a').forEach(link => {
  link.addEventListener('click', function(event) {
    if (!link.parentElement.classList.contains('active')) {
      event.preventDefault();
    }
  });
});

const navKorb = document.querySelector('.navkorb');
const body = document.querySelector('body');
navKorb.addEventListener('click', function() {
  if (body.classList.contains('hamburger-active')) {
    body.classList.remove('hamburger-active');
  } else {
    body.classList.add('hamburger-active');
  }
});

// Preloader
let preloader = document.getElementById('preloader');
window.addEventListener('load', function() {
  preloader.style.display = "none";
});
