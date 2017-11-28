var mcpadc = require('mcp-spi-adc');

var heart = mcpadc.open(3, {speedHz: 20000}, function (err) {
  if (err) throw err;
});
  // Set properties

  var pollRate = 10; // Interval to read sensor
  var arraySize = 3; // // BPM is calculated based on the average of an array of time differences. Increasing the array size smooths the data.
  var array = [];
  var BPM = 0; // Starts at 0, samples

  console.log('Collecting samples...');

  // Emit a time at each beat
  var high = false;
  setInterval(function () {
	heart.read(function (err, reading) {
   		if (err) throw err;
		Heart = reading.value;
	});
    if(Heart > 0.13) {
      if(!high) {
        high = true;
        var time = new Date(milliseconds);
        // TODO: add filtering
      }
    } else {
      high = false;
    }
  }, pollRate);

  // Collect for BPM
  var oldTime = new Date(milliseconds);
  self.on('beat', function (time) {
    var diff = time - oldTime
    // Check that the data is reasonable
    if (diff > 40 && diff < 5000) {
      self.array.push(time - oldTime);
    }
    oldTime = time;
    if(self.array.length > self.arraySize) {
      self.array.shift();
      var sum = 0;
      for (var i = 0; i < self.array.length; i++) {
        sum += self.array[i];
      }
      var avg = sum/self.array.length;
      self.BPM = 60000/avg;
      if (!self.ready) {
        if (self.BPM > 0) {
          self.ready = true;
          // Emit the ready event
          setImmediate(function emitReady() {
            self.emit('ready', self);
            if(callback) {
              callback(null, self);
            }
          });
        }
      }
    }
  });
}