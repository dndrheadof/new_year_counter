/*
*
*
*
* НЕ СМОТРЕТЬ НА КОД!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*
*
*
*/

let dateTo = new Date("Jan 1, 2020 00:00:00").getTime();
let cdFunction = setInterval(function() {
let now = new Date().getTime();
let dist = dateTo - now;

let daysA = Math.floor(dist / (1000 * 60 * 60 * 24));
let hoursA = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutesA = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
let secondsA = Math.floor((dist % (1000 * 60)) / 1000);

let days = daysA > 0 ? `${daysA}д.` : '';
let hours = hoursA > 0 ? `${hoursA}ч.` : '';
let minutes = minutesA > 0 ? `${minutesA}м.` : '';
let seconds = secondsA > 0 ? `${secondsA}с.` : '';

document.getElementById('timer').innerHTML = `${days} ${hours} ${minutes} ${seconds}`;

if (dist < 0) {
    clearInterval(cdFunction);
    document.getElementById('timer').innerHTML = '';
    document.getElementById('text').innerHTML = 'С НОВЫМ ГОДОМ!';
  }
}, 1000)
