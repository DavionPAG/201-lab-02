'use strict';
var username = prompt('Greetings! What\'s your name?');
alert('Welcome ' + username + ', please answer the questions that follow before continuing.');

var live = prompt('Do I live in seattle?').toLowerCase();
//console.log(live + ' Correctamundo!');
if (live === 'yes') {
  alert('Correctamundo!');
}


var futbol = prompt('Do I play futbol?').toLowerCase();
//console.log(futbol + ' I am indeed a practitioner of the worlds\' game.');
if (futbol === 'yes') {
  alert('I am indeed a practitioner of the worlds\' game.');
}

var hike = prompt('Do I like to hike?').toLowerCase();
//console.log(hike + ' Parts unknown for sure.');
if (hike === 'yes') {
  alert('Parts unknown for sure.');
}

var tall = prompt('Am I taller than you?').toLowerCase();
//console.log('Indeed I am :\)');
if (tall === 'yes') {
  alert('Indeed I am :\)');
}
var birds = prompt('Do I like birds?').toLowerCase();
//console.log(birds + ' Freedom!');
if (birds === 'yes') {
  alert('Freedom!');
}

alert(username + ', thank you for your time. Enjoy!');
