var rpio = require('rpio');

var pin = 12;           /* P12/GPIO18 */
var range = 1024;       /* LEDs can quickly hit max brightness, so only use */
var max = 800;          /*   the bottom 8th of a larger scale */
var clockdiv = 8;       /* Clock divider (PWM refresh rate), 8 == 2.4MHz */
var interval = 2;       /* setInterval timer, speed of pulses */
var times = 2;          /* How many times to pulse before exiting */

/*
 * Enable PWM on the chosen pin and set the clock and range.
 */
rpio.open(pin, rpio.PWM);
rpio.pwmSetClockDivider(clockdiv);
rpio.pwmSetRange(pin, range);

/*
 * Repeatedly pulse from low to high and back again until times runs out.
 */
var direction = 2;
var data = 0;
var pulse = setInterval(function() {
        rpio.pwmSetData(pin, data);
        if (data < 1) {
                direction = 2;
                if (times-- === 0) {
			rpio.pwmSetData(pin, 0);
                        clearInterval(pulse);
                        rpio.open(pin, rpio.INPUT);
                        return;
                }
        } else if (data > max) {
                direction = -2;
        }

        data += direction;
}, interval, data, direction, times);