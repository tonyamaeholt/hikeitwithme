
// Set constants
var MILLIHOUR = 1000*60*60;
var MILLIDAY = MILLIHOUR * 24;
var MILLIWEEK = MILLIDAY * 7;

// Get dates and calculate time to hike
var starttime = new Date(2017, 3, 6, 10, 0, 0, 0); // April 6, 2017
var now = new Date();
var timetohike = starttime.getTime() - now.getTime();

// Calculate timegroup values
var hours = Math.floor((timetohike % MILLIDAY) / MILLIHOUR).toString();
var days = Math.floor((timetohike % MILLIWEEK) / MILLIDAY).toString();
var weeks = Math.floor(timetohike / MILLIWEEK).toString();

// Write digits
if (weeks <= 9) {
  document.getElementById('weeks-digit-ones').innerHTML = weeks[0];
  document.getElementById('weeks-digit-tens').className += " hidden";
}
else {
  document.getElementById('weeks-digit-tens').innerHTML = weeks[0];
  document.getElementById('weeks-digit-ones').innerHTML = weeks[1];
}
document.getElementById('days-digit-ones').innerHTML = days[0];

if (hours <= 9) {
  document.getElementById('hours-digit-ones').innerHTML = hours[0];
  document.getElementById('hours-digit-tens').className += " hidden";
}
else {
  document.getElementById('hours-digit-tens').innerHTML = hours[0];
  document.getElementById('hours-digit-ones').innerHTML = hours[1];
}
