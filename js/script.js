'use strict';

// const countryName = 'КитаЙ';

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price;
let country;

const countryInputRef = document.querySelector('input[name = "country"]');
const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', function () {
  if (countryInputRef.value === null) {
    message = CANCELED_BY_USER;
  } else {
    country =
      countryInputRef.value[0].toUpperCase() +
      countryInputRef.value.slice(1).toLowerCase();
    switch (country) {
      case CHINA:
        price = 100;
        break;
      case AUSTRALIA:
        price = 170;
        break;
      case INDIA:
        price = 80;
        break;
      case JAMAICA:
        price = 120;
        break;
      default:
        price = 0;
        alert(NO_DELIVERY);
    }
  }

  if (price > 0) {
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    alert((message = `Доставка в ${country} будет стоить ${price} кредитов`));
  }

  console.log(message);
});
