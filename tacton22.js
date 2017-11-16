module.exports = {





play: function play22(){
	var rpio = require('rpio');

	var pin = 12;           /* P12/GPIO18 */
	var range = 1024;       /* LEDs can quickly hit max brightness, so only use */
	var max = 1000;          /*   the bottom 8th of a larger scale */
	var clockdiv = 8;       /* Clock divider (PWM refresh rate), 8 == 2.4MHz */
	var interval = 2;       /* setInterval timer, speed of pulses */
	var times = 1;          /* How many times to pulse before exiting */
/*
 * Enable PWM on the chosen pin and set the clock and range.
 */
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

rpio.open(pin, rpio.PWM);
rpio.pwmSetClockDivider(clockdiv);
rpio.pwmSetRange(pin, range);


/*
 * Repeatedly pulse from low to high and back again until times runs out.
 */
var rounds = 0;
var direction = 2;
var data =0 ;
var pulse = setInterval(function() {
        rpio.pwmSetData(pin, 700);
        	sleep(200);
	rpio.pwmSetData(pin, 0);
        	sleep(300);
	rpio.pwmSetData(pin, 700);
        	sleep(200);
	rpio.pwmSetData(pin, 0);
                        clearInterval(pulse);
                        rpio.open(pin, rpio.INPUT);
                        return;
}, interval, data, direction, times);}}
