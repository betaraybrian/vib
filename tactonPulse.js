var rpio = require('rpio');
var firebase = require('firebase');

var pin = 12;           /* P12/GPIO18 */
var range = 1024;       /* LEDs can quickly hit max brightness, so only use */
var max = 1000;          /*   the bottom 8th of a larger scale */
var clockdiv = 8;       /* Clock divider (PWM refresh rate), 8 == 2.4MHz */
var interval = 2;       /* setInterval timer, speed of pulses */
var times = 1;          /* How many times to pulse before exiting */

var bpm = 90;
var sleepTime;
var pulseTimeout;
var shouldStop;

var person = 1;


function setup(){
	console.log("Starting firebase setup");
	let config = {
	  apiKey: "AIzaSyADmzdnO0lNOONCJ2nL9SPN2JB9OtJb8Y0",
	  authDomain: "multimodal-2f37a.firebaseapp.com",
	  databaseURL: "https://multimodal-2f37a.firebaseio.com",
	  projectId: "multimodal-2f37a",
	  storageBucket: "multimodal-2f37a.appspot.com",
	  messagingSenderId: "23867613841"
	};
	firebase.initializeApp(config);
	setupFirebaseListeners();
  }
  
  
  // Setup listeners for database values
  function setupFirebaseListeners(){
	let otherPerson = (person === 1)? 2: 1;
	let ref = firebase.database().ref(otherPerson+"/pulse");
  
	ref.on('value', function(snapshot){
	  if(snapshot.val()){
		changePulse(snapshot.val().pulse);
	  }
	});
  
  }
  

function changePulse(newPulse){
	pulse = newPulse
	sleepTime = Math.round((60000 / bpm)-50);
}


function start(){
	shouldStop = false;
	rpio.open(pin, rpio.PWM);
	rpio.pwmSetClockDivider(clockdiv);
	rpio.pwmSetRange(pin, range);

	pulseTimeout = setTimeout(function(){pulse();}, sleepTime);

}

module.exports.startPulse = function(){
	start();
}

module.exports.stopPulse = function(){
	stop();
}

function stop(){
	shouldStop = true;
	clearTimeout(pulseTimeout);
}

function pulse(){
	var direction = 1;
	var data = 0;
	
	rpio.pwmSetData(pin, 340);
	sleep(50);
	rpio.pwmSetData(pin, 0);
	if(!shouldStop){
		pulseTimeout = setTimeout(() => { pulse(); }, sleepTime);
	}
}

/*
* Sleep
*/
function sleep(milliseconds){
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++){
		if((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
}


setup();
start();
