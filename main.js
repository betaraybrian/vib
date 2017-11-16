var keypress = require('keypress');
var t1 = require('./tacton1');
var t2 = require('./tacton2');
var t3 = require('./tacton3');
var t4 = require('./tacton4');
var t5 = require('./tacton5');
var t6 = require('./tacton6');
var t7 = require('./tacton7');
var t8 = require('./tacton8');
var t9 = require('./tacton9');
var t10 = require('./tacton10');
var t11 = require('./tacton11');
var t12 = require('./tacton12');
var t13 = require('./tacton13');
var t14 = require('./tacton14');
var t15 = require('./tacton15');
var t16 = require('./tacton16');
var t17 = require('./tacton17');
var t18 = require('./tacton18');
var t19 = require('./tacton19');
var t20 = require('./tacton20');
var t21 = require('./tacton21');
var t22 = require('./tacton22');
var t23 = require('./tacton23');
var t24 = require('./tacton24');

let numTactons = 24;
let index = -1;

let tactonList = [];
let indexList = [];

initGestureList();

function initGestureList(){

  for(let i = 0; i < numTactons; i++){
    indexList[i] = i;
  }

  tactonList[0] = function(){  t1.play(); };
  tactonList[1] = function(){  t2.play(); };
  tactonList[2] = function(){  t3.play(); };
  tactonList[3] = function(){  t4.play(); };
  tactonList[4] = function(){  t5.play(); };
  tactonList[5] = function(){  t6.play(); };
  tactonList[6] = function(){  t7.play(); };
  tactonList[7] = function(){  t8.play(); };
  tactonList[8] = function(){  t9.play(); };
  tactonList[9] = function(){  t10.play(); };
  tactonList[10] = function(){  t11.play(); };
  tactonList[11] = function(){  t12.play(); };
  tactonList[12] = function(){  t13.play(); };
  tactonList[13] = function(){  t14.play(); };
  tactonList[14] = function(){  t15.play(); };
  tactonList[15] = function(){  t16.play(); };
  tactonList[16] = function(){  t17.play(); };
  tactonList[17] = function(){  t18.play(); };
  tactonList[18] = function(){  t19.play(); };
  tactonList[19] = function(){  t20.play(); };
  tactonList[20] = function(){  t21.play(); };
  tactonList[21] = function(){  t22.play(); };
  tactonList[22] = function(){  t23.play(); };
  tactonList[23] = function(){  t24.play(); };

  for(let i = indexList.length-1; i >= 1; i--){
    let j = Math.floor( (Math.random() * i) );
    let temp = indexList[j];
    indexList[j] = indexList[i];
    indexList[i] = temp;
  }

  console.log(indexList);
}
/*
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        //your code
        console.log("next");
        index++;
        playTacton(false);
    }

    if(e.keyCode == 13){
        //your code
        console.log("replay");
        playTacton(true);
    }
}*/


function playTacton(isReplay){
  if(isReplay){
    console.log("Replaying tacton: "+(indexList[index] +1));
    //document.getElementById('title').innerHTML =  "Replaying tacton: "+(indexList[index] +1);
  }else{
    console.log("Playing tacton: "+(indexList[index] +1));
    //document.getElementById('title').innerHTML = "Playing tacton: "+(indexList[index] +1);
  }
  console.log(index);
  console.log(indexList[index]);
  tactonList[ indexList[index] ]();
}



keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);

  if(key && key.name == 'space'){
    console.log("space!");
    index++;
    playTacton(false);
  }

  if(key && key.name == 'return'){
    console.log("space!");
    playTacton(true);
  }

  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
