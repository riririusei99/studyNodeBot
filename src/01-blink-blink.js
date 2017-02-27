var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function () {

  var led = new five.Led(13);
  // Strobe on-off in 500ms phases
  led.strobe(1000);

})
