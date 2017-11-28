var mcpadc = require('mcp-spi-adc');

var PulseSensor = require('pulsesensor');

var heart = mcpadc.open(0, {speedHz: 20000}, function (err) {
  if (err) throw err;
});

var pulse = PulseSensor.use(heart);

pulse.on('ready', function(){
pulse.on('beat', function(time){
	console.log(pulse.BPM);
});
});

/*var play = setInterval(function () {
  *  heart.read(function (err, reading) {
   *   if (err) throw err;
*	Heart = reading.value;
*      console.log("heart   " + Heart );
*    });
*
*  }, 10);
*/