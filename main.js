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
var t25 = require('./tacton25');
var t26 = require('./tacton26');
var t27 = require('./tacton27');
var t28 = require('./tacton28');
var t29 = require('./tacton29');
var t30 = require('./tacton30');
var t31 = require('./tacton31');
var t32 = require('./tacton8');
var t33 = require('./tacton9');
var t34 = require('./tacton10');
var t35 = require('./tacton11');
var t36 = require('./tacton12');
var t37 = require('./tacton13');
var t38 = require('./tacton14');
var t39 = require('./tacton15');
var t40 = require('./tacton16');
var t41 = require('./tacton17');
var t42 = require('./tacton18');
var t43 = require('./tacton19');
var t44 = require('./tacton20');
var t45 = require('./tacton21');
var t46 = require('./tacton22');
var t47 = require('./tacton23');
var t48 = require('./tacton24');
var t49= require('./tacton1');
var t50= require('./tacton2');
var t51= require('./tacton3');
var t52= require('./tacton4');
var t53= require('./tacton5');
var t54= require('./tacton6');
var t55= require('./tacton7');
var t56= require('./tacton8');
var t57= require('./tacton9');
var t58 = require('./tacton10');
var t59 = require('./tacton11');
var t60 = require('./tacton12');
var t61 = require('./tacton13');
var t62 = require('./tacton14');
var t63 = require('./tacton15');
var t64 = require('./tacton16');
var t65 = require('./tacton17');
var t66 = require('./tacton18');
var t67 = require('./tacton19');
var t68 = require('./tacton20');
var t69 = require('./tacton21');
var t70 = require('./tacton22');
var t71 = require('./tacton23');
var t72 = require('./tacton24');
var t73= require('./tacton1');
var t74= require('./tacton2');
var t75= require('./tacton3');
var t76= require('./tacton4');
var t77= require('./tacton5');
var t78= require('./tacton6');
var t79= require('./tacton7');
var t80= require('./tacton8');
var t81= require('./tacton9');
var t82 = require('./tacton10');
var t83 = require('./tacton11');
var t84 = require('./tacton12');
var t85 = require('./tacton13');
var t86 = require('./tacton14');
var t87 = require('./tacton15');
var t88 = require('./tacton16');
var t89 = require('./tacton17');
var t90 = require('./tacton18');
var t91 = require('./tacton19');
var t92 = require('./tacton20');
var t93 = require('./tacton21');
var t94 = require('./tacton22');
var t95 = require('./tacton23');
var t96 = require('./tacton24');
var t97 = require('./tacton20');
var t98 = require('./tacton21');
var t99 = require('./tacton22');
var t100= require('./tacton23');


let numTactons = 100;
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
