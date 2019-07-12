jQuery(function ($) {
  $('#top-image').bgswitcher({
    images: ['img/top-img1.png', 'img/top-img2.png', 'img/top-img3.png', 'img/top-img4.png', 'img/top-img5.png'],
    interval: 4000,
    effect: "fade",
    duration: 1000,
    easing: "swing",
  });
});
