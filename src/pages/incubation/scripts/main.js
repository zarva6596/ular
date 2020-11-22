/* eslint-disable no-undef */
'use strict';

const script = document.createElement('script');

// eslint-disable-next-line max-len
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCvzEBq0Js5PxaHTbgmmAm2Ejeo1pC9cgY&callback=initMap';
script.defer = true;

window.initMap = function() {
  const position = {
    lat: 50.443205,
    lng: 30.497723,
  };

  const map = new google.maps.Map(document.getElementById('map'), {
    center: position,
    zoom: 13,
    disableDefaultUI: true,
    styles: [
      {
        'featureType': 'all',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'saturation': 36,
          },
          {
            'color': '#000000',
          },
          {
            'lightness': 40,
          },
        ],
      },
      {
        'featureType': 'all',
        'elementType': 'labels.text.stroke',
        'stylers': [
          {
            'visibility': 'on',
          },
          {
            'color': '#000000',
          },
          {
            'lightness': 16,
          },
        ],
      },
      {
        'featureType': 'all',
        'elementType': 'labels.icon',
        'stylers': [
          {
            'visibility': 'off',
          },
        ],
      },
      {
        'featureType': 'administrative',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 20,
          },
        ],
      },
      {
        'featureType': 'administrative',
        'elementType': 'geometry.stroke',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 17,
          },
          {
            'weight': 1.2,
          },
        ],
      },
      {
        'featureType': 'landscape',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 20,
          },
        ],
      },
      {
        'featureType': 'poi',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 21,
          },
        ],
      },
      {
        'featureType': 'road.highway',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 17,
          },
        ],
      },
      {
        'featureType': 'road.highway',
        'elementType': 'geometry.stroke',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 29,
          },
          {
            'weight': 0.2,
          },
        ],
      },
      {
        'featureType': 'road.arterial',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 18,
          },
        ],
      },
      {
        'featureType': 'road.local',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 16,
          },
        ],
      },
      {
        'featureType': 'transit',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 19,
          },
        ],
      },
      {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#000000',
          },
          {
            'lightness': 17,
          },
        ],
      },
    ],
  });

  // eslint-disable-next-line no-unused-vars
  const marker = new google.maps.Marker({
    position,
    map,
    // eslint-disable-next-line max-len
    icon: 'https://raw.githubusercontent.com/zarva6596/Webtune/ca3452769a75082286faf70aa91d004d44a2c54e/src/images/icons/map_marker.svg',
  });
};

document.head.appendChild(script);

$(document).ready(function() {
  // $('.customer__slider').slick({
  //   dots: true,
  //   slidesToShow: '4',
  //   autoplay: true,
  //   responsive: [
  //     {
  //       breakpoint: '1600',
  //       settings: {
  //         slidesToShow: '3',
  //       },
  //     },
  //     {
  //       breakpoint: '1100',
  //       settings: {
  //         slidesToShow: '2',
  //       },
  //     },
  //     {
  //       breakpoint: '770',
  //       settings: {
  //         slidesToShow: '1',
  //       },
  //     },
  //   ],
  // });

  $('.gallery__photos').slick({
    rows: 4,
    slidesPerRow: 3,
    variableWidth: true,
    dots: true,
    // responsive: [
    //   {
    //     breakpoint: '440',
    //     settings: {
    //       autoplay: true,
    //     },
    //   },
    // ],
  });

  $('.info__slider').slick({
    centerMode: true,
    dots: true,
    slidesToShow: 3,
    variableWidth: true,

    // variableWidth: true,
    // dots: true,
    // responsive: [
    //   {
    //     breakpoint: '440',
    //     settings: {
    //       autoplay: true,
    //     },
    //   },
    // ],
  });

  $(function() {
    // $(document).on('click', '.vacancy__open', function(e) {
    //   e.preventDefault();
    //   $(this).parent().parent().removeClass('loaded');
    // });

    // $(document).on('click', '.vacancy__open', function(e) {
    //   $(this).parent().parent().parent().removeClass('loaded');
    // });

    $(document).on('click', '.vacancy__open', function(e) {
      $(this).parent().parent().next().addClass('vacancy__info--active');
      $(this).addClass('vacancy__open--active');
    });

    $(document).on('click', '.vacancy__open--active', function(e) {
      $(this).removeClass('vacancy__open--active');
      $(this).parent().parent().next().removeClass('vacancy__info--active');
    });

    $(document).on('click', '.vacancy__button', function(e) {
      $('.form__popup-overly').fadeIn();
    });

    $(document).on('click', '.form__close', function(e) {
      $('.form__popup-overly').fadeOut();
    });

    $(document).on('click', '.form__popup-overly', function(e) {
      if (e.target.id === 'vacancy-popup-overly') {
        $('.form__popup-overly').fadeOut();
      };
    });

    // $(document).on('click', '.top__menu', function(e) {
    //   e.preventDefault();
    //   $('.mobileMenu').addClass('loaded');
    // });
  });
});
