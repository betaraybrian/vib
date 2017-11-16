let numTactons = 24;
let index = -1;

let tactonList = [];
let indexList = [];

initGestureList();

function initGestureList(){

  for(let i = 0; i < numTactons; i++){
    indexList[i] = i;
  }

  tactonList[0] = function(){  play1(); };
  tactonList[1] = function(){  play2(); };
  tactonList[2] = function(){  play3(); };
  tactonList[3] = function(){  play4(); };
  tactonList[4] = function(){  play5(); };
  tactonList[5] = function(){  play6(); };
  tactonList[6] = function(){  play7(); };
  tactonList[7] = function(){  play8(); };
  tactonList[8] = function(){  play9(); };
  tactonList[9] = function(){  play10(); };
  tactonList[10] = function(){  play11(); };
  tactonList[11] = function(){  play12(); };
  tactonList[12] = function(){  play13(); };
  tactonList[13] = function(){  play14(); };
  tactonList[14] = function(){  play15(); };
  tactonList[15] = function(){  play16(); };
  tactonList[16] = function(){  play17(); };
  tactonList[17] = function(){  play18(); };
  tactonList[18] = function(){  play19(); };
  tactonList[19] = function(){  play20(); };
  tactonList[20] = function(){  play21(); };
  tactonList[21] = function(){  play22(); };
  tactonList[22] = function(){  play23(); };
  tactonList[23] = function(){  play24(); };

  for(let i = indexList.length-1; i >= 1; i--){
    let j = Math.floor( (Math.random() * i) );
    let temp = indexList[j];
    indexList[j] = indexList[i];
    indexList[i] = temp;
  }

  console.log(indexList);
}

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
}


function playTacton(isReplay){
  if(isReplay){
    document.getElementById('title').innerHTML =  "Replaying tacton: "+(indexList[index] +1);
  }else{
    document.getElementById('title').innerHTML = "Playing tacton: "+(indexList[index] +1);
  }

  tactonList[ indexList[index] ]();
}
