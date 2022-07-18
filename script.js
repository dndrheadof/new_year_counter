const newYearDate = new Date(`Jan 1, ${new Date().getFullYear()} 00:00:00`);
const coolFunctionName = setInterval(() => {
  const now = Date.now();
  const distance = newYearDate - now;
  const converted = convert(distance);
  const titles = [
    ['день', 'дня', 'дней'],
    ['час', 'часа', 'часов'],
    ['минута', 'минуты', 'минут'],
    ['секунда', 'секунды', 'секунд']
  ];

  for (let pos in converted) {
    converted[pos] += " " + declaration(converted[pos], titles[pos]) + "<br>";
  }
  
  const [days, hours, minutes, seconds] = converted;
  document.getElementById("timer").innerHTML = days + hours + minutes + seconds;
    
  if (distance <= 0) {
    clearInterval(coolFunctionName);
    document.getElementById('timer').innerHTML = '';
    document.getElementById('text').innerHTML = 'С НОВЫМ ГОДОМ!';
  }
}, 1000)

const convert = (ms) => {
  const days = (ms / (1000 * 60 * 60 * 24)).toFixed(0);
  const hours = ((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toFixed(0);
  const minutes = ((ms % (1000 * 60 * 60)) / (1000 * 60)).toFixed(0);
  const seconds = ((ms % (1000 * 60)) / 1000).toFixed(0);

  return [days, hours, minutes, seconds]; // ??????????????????????????????
}

const declaration = (number, options) => {
  const whatIsThat = [2, 0, 1, 1, 1, 2];
  return options[(number % 100 > 4 && number % 100 < 20) ? 2 : whatIsThat[(number % 10 < 5) ? number % 10 : 5]];
}
