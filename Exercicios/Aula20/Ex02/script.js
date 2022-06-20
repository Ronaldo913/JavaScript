var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'Está um clima agradável lá fora!';
  } else if (choice === 'rainy') {
    para.textContent = 'A chuva está caindo lá fora.';
  } else if (choice === 'snowing') {
    para.textContent = 'Está nevando lá fora, vá fazer um boneco de neve';
  } else {
    para.textContent = '';
  }
}
