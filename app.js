const form = document.getElementById("form-date");
const contador = document.querySelector('.contador');
const forms = document.querySelector('.pick-date')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  setInterval(startCount, 1000)
})

function startCount() {

  const d = document.getElementById('future-day');
  const h = document.getElementById('future-hour');
  const m = document.getElementById('future-min');
  const s = document.getElementById('future-sec');

  const targetDate = document.getElementById("target-date").value;
  const futureDate = new Date(targetDate);

  const todayDate = new Date();

  const dateDiff = futureDate.getTime() - todayDate.getTime();

  let total_millis = dateDiff;

  let days = parseInt(total_millis / (1000 * 60 * 60 * 24));
  total_millis -= days * (1000 * 60 * 60 * 24);

  let hours = parseInt(total_millis / (1000 * 60 * 60));
  total_millis -= hours * (1000 * 60 * 60);

  let minutes = parseInt(total_millis / (1000 * 60));
  total_millis -= minutes * (1000 * 60);

  let segundos = parseInt(total_millis / 1000);

  d.innerHTML = days;
  h.innerHTML = formatTime(hours);
  m.innerHTML = formatTime(minutes);
  s.innerHTML = formatTime(segundos);

  contador.classList.add('ativo');
  forms.classList.add('inativo');

}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

window.addEventListener('DOMContentLoaded', function () {
  const myDoc = document.querySelector('body');

  myDoc.classList.remove('preload');
})