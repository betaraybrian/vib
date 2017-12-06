let firebase = require("firebase");
var keypress = require('keypress');

var t5 = require('./tacton5');

var t13 = require('./tacton13');



let numTactons = 100;
let index = -1;

let tactonList = [];
let indexList = [];

function initGestureList(){

  for(let i = 0; i < numTactons; i++){
    indexList[i] = i;
  }

  let index = 0;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 1, play:function(){  t1.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 2, play:function(){  t2.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 3, play:function(){  t3.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 4, play:function(){  t4.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 5, play:function(){  t5.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 6, play:function(){  t6.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 7, play:function(){  t7.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 8, play:function(){  t8.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 9, play:function(){  t9.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 10, play:function(){  t10.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 11, play:function(){  t11.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 12, play:function(){  t12.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 13, play:function(){  t13.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 14, play:function(){  t14.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 15, play:function(){  t15.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 16, play:function(){  t16.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 17, play:function(){  t17.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 18, play:function(){  t18.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 19, play:function(){  t19.play(); }};

  }
  index += 5;
  for(let i = 0; i < 5; i++){
    tactonList[index + i] = {index: 20, play:function(){  t20.play(); }};

  }
  index += 5;
	console.log(tactonList.length);
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

function playStart(){
  console.log("start");
  t13.play();
}

function playStop(){
  console.log("stop");
  t5.play();
}

function playTacton(isReplay){
  if(isReplay){
    console.log("Replaying tacton: "+(  tactonList[ indexList[index] ].index));
    //document.getElementById('title').innerHTML =  "Replaying tacton: "+(indexList[index] +1);
  }else{
    console.log("Playing tacton: "+(  tactonList[ indexList[index] ].index));
    //document.getElementById('title').innerHTML = "Playing tacton: "+(indexList[index] +1);
  }
  
  tactonList[ indexList[index] ].play();
}


function setup(){
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
  let otherPerson = 2;
  let ref = firebase.database().ref(otherPerson+"/gesture");

  ref.on('value', function(snapshot){
    if(snapshot.val()){
      if(snapshot.val() == "start"){
        playStart();
      }
      if(snapshot.val() == "stop"){
        playStop();
      }
    }
  });

}

setup();

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
