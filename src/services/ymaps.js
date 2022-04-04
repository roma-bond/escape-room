ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [59.968137, 30.316272],
    zoom: 18
  }, {
    searchControlProvider: 'yandex#search'
  }),

    myPlacemark = new ymaps.Placemark([59.968420, 30.317400], {
      hintContent: 'Санкт-Петербург, Набережная реки Карповка, д 5',
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'images/ball.svg',
      // Размеры метки.
      iconImageSize: [48, 62],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-24, -31],
    });

  myMap.geoObjects
    .add(myPlacemark);
});
