'use strict';

var numCor = 0;

var username = prompt('Greetings! What\'s your name?');
alert('Welcome ' + username + ', please answer the questions that follow before continuing.');

var live = prompt('Do I live in seattle?').toLowerCase();

function qOne() {
  if (live === 'yes' || live === 'y') {
    alert('Correctamundo!');
    numCor++;
  }
}
qOne();

var futbol = prompt('Do I play futbol?').toLowerCase();


function qTwo() {
  if (futbol === 'yes' || futbol === 'y') {
    alert('I am indeed a practitioner of the worlds\' game.');
    numCor++;
  }
}
qTwo();

var hike = prompt('Do I like to hike?').toLowerCase();

function qThree() {
  if (hike === 'yes' || hike === 'y') {
    alert('Parts unknown for sure.');
    numCor++;
  }
}
qThree();

var tall = prompt('Am I taller than you?').toLowerCase();

function qFour() {
  if (tall === 'yes' || tall === 'y') {
    alert('Indeed I am :\)');
    numCor++;
  }
}
qFour();

var birds = prompt('Do I like birds?').toLowerCase();

function qFive() {
  if (birds === 'yes' || birds === 'y') {
    alert('Freedom!');
    numCor++;
  }
}
qFive();


//***This is lab 03***

var count = 4;

function qSix() {
  while (count > 0) {
    var gNumber = prompt('I\'m thinking of a number between 1 and 10. Can you guess it?');

    if (gNumber === '7') {
      alert('That\'s the one!');
      numCor++;
      break;
    }
    if (count === 1) {
      alert('The correct answer is 7');
    }
    if (gNumber > '7' && count > 1) {
      alert(`That's too high, try again. ${count - 1} attempt(s) remaining.`);
    }
    if (gNumber < '7' && count > 1) {
      alert(`That's too low, try again. ${count - 1} attempt(s) remaining.`);
    }
    count--;
  }
}
qSix();

var count2 = 6;
var sports = ['soccer', 'tennis'];

function qSeven() {
  outerloop: while (count2 > 0) {
    var guessGame = prompt('Can you guess one of the sports I play?');
    for (var i = 0; i < sports.length; i++) {
      if (guessGame === sports[i]) {
        alert(`Yup, ${guessGame} is one of the sports I play.`);
        numCor++;
        break outerloop;
      }
    }
    if (guessGame !== sports[i]) {
      alert('Nope, try again.');
    }
    if (count2 === 2) {
      alert('Last try!');
    }
    if (count2 === 1 && guessGame !== sports[i]) {
      alert(`The sports I play are: ${sports}`);
    }
    count2--;
  }
}
qSeven();

alert(`${username}, you answered ${numCor} of the questions correctly. Thank you for your time. Enjoy!`);
