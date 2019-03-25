// List of Variables:

  // Document Selection Variables:
var clickIcon = document.querySelector('#click-icon');
var hackedBrowsers = document.querySelector('#profit-num');
var clickedBrowsers = document.querySelector('#profit-hps');
var upgrade1button = document.querySelector('#upgrade1');
var upgrade2button = document.querySelector('#upgrade2');
var upgrade3button = document.querySelector('#upgrade3');
var upgrade4button = document.querySelector('#upgrade4');
var upgradeTime1Selector = document.querySelector("#upgrade1-times");
var upgradeTime2Selector = document.querySelector("#upgrade2-times");
var upgradeTime4Selector = document.querySelector("#upgrade4-times");

  // '0' Variables:
var upgradeTime1 = 0;
var upgradeTime2 = 0;
var upgradeTime4 = 0;
var hackedNum = 0;
var clickedNum = 0;

  // 'true'/'false' Variables:
var times1000 = false;
var execute1 = true;
var execute3 = false;
var opFunc1 = true;
var opFunc2 = false;
var opFunc3 = false;
var opFunc4 = false;
var opFunc5 = false;

// Main Clicking Function:

clickIcon.onclick = function() {
  if(times1000 === false){
    hackedNum = hackedNum + 1;
    hackedBrowsers.innerHTML = delimitNumbers(hackedNum);
  }
  else if(times1000 === true) {
    hackedNum = hackedNum + 1000;
    hackedBrowsers.innerHTML = delimitNumbers(hackedNum);
  }
}

// Upgrades:

upgrade1button.onclick = function() {
  if(hackedNum >= 2) {
    hackedNum = hackedNum - 2;
    hackedNum = hackedNum + 10;
    hackedBrowsers.innerHTML = delimitNumbers(hackedNum);
    upgradeTime1 = upgradeTime1 + 1;
    upgradeTime1Selector.innerHTML = upgradeTime1;
  }
}

upgrade2button.onclick = function() {
  if(hackedNum >= 10 && opFunc1 === true) {
    hackedNum = hackedNum - 10;
    hackedNum = hackedNum * 2;
    hackedBrowsers.innerHTML = delimitNumbers(hackedNum);
    upgradeTime2 = upgradeTime2 + 1;
    upgradeTime2Selector.innerHTML = upgradeTime2;
    opFunc1 = false;
    opFunc2 = true;
  }
  else if(hackedNum >= 10 && opFunc2 === true) {
    hackedNum = hackedNum - 10;
    hackedNum = hackedNum * 2;
    hackedBrowsers.innerHTML = delimitNumbers(hackedNum);
    upgradeTime2 = upgradeTime2 + 1;
    upgradeTime2Selector.innerHTML = upgradeTime2;
    opFunc2 = false;
    opFunc3 = true;
  }
  else if(hackedNum >= 10 && opFunc3 === true) {
    hackedNum = hackedNum - 10;
    hackedNum = hackedNum * 2;
    hackedBrowsers.innerHTML = delimitNumbers(hackedNum);
    upgradeTime2 = upgradeTime2 + 1;
    upgradeTime2Selector.innerHTML = upgradeTime2;
    opFunc3 = false;
    opFunc4 = true;
  }
  else if(hackedNum >= 10 && opFunc4 === true) {
    hackedNum = hackedNum - 10;
    hackedNum = hackedNum * 2;
    hackedBrowsers.innerHTML = delimitNumbers(hackedNum);
    upgradeTime2 = upgradeTime2 + 1;
    upgradeTime2Selector.innerHTML = upgradeTime2;
    opFunc4 = false;
    opFunc5 = true;
  }
  else if(hackedNum >= 10 && opFunc5 === true) {
    hackedNum = hackedNum - 10;
    hackedNum = hackedNum * 2;
    hackedBrowsers.innerHTML = delimitNumbers(hackedNum);
    upgradeTime2 = upgradeTime2 + 1;
    upgradeTime2Selector.innerHTML = upgradeTime2;
    opFunc5 = false;
    var upgradeFinishedOp = document.querySelector('#upgrade2');
    var upgradeFinTextOp = document.querySelector('#upgrade-fin-text-op');
    var upgradeFinTextColor = document.querySelector('#upgrade2-times');
    document.getElementById('upgrade-fin-text-op').innerHTML = "Upgrade Used";
    upgradeFinishedOp.style.backgroundColor = '#edcb21';
    upgradeFinTextOp.style.color = 'black';
    upgradeFinTextColor.style.color = 'black'
  }
}

upgrade3button.onclick = function() {
  if(hackedNum >= 20 && execute1 === true) {
    times1000 = true;
    execute1 = false;
    hackedNum = hackedNum - 20;
    hackedBrowsers.innerHTML = delimitNumbers(hackedNum);
    var upgradeFinished = document.querySelector('#upgrade3');
    var upgradeFinText = document.querySelector('#upgrade-fin-text');
    document.getElementById('upgrade-fin-text').innerHTML = "Upgrade Used";
    upgradeFinished.style.backgroundColor = '#edcb21';
    upgradeFinText.style.color = 'black';
    var progBar = document.querySelector('#progress-bar');
    progBar.style.backgroundColor = 'red';
    progBar.style.width = '+10vw';
  }
}

upgrade4button.onclick = function() {
  if(hackedNum >= 100000) {
    hackedNum = hackedNum - 100000;
    hackedBrowsers.innerHTML = delimitNumbers(hackedNum);
    execute3 = true;
    clickedNum = clickedNum + 1000;
    upgradeTime4 = upgradeTime4 + 1;
    upgradeTime4Selector.innerHTML = upgradeTime4;
    var timer = setInterval(myTimer, 1000);
    clickedBrowsers.innerHTML = delimitNumbers(clickedNum);
    var progBar = document.querySelector('#progress-bar');
    var num10 = 10;
    progBar.style.backgroundColor = 'red';
    progBar.style.width = num10*4+'vw';
    bar1 = true;
    progBar.style.backgroundColor = '#404040';
  //  var upgradeFinished2 = document.querySelector('#upgrade4');
  //  var upgradeFinText2 = document.querySelector('#upgrade-fin-text2');
  //  document.getElementById('upgrade-fin-text2').innerHTML = "Upgrade Used";
  //  upgradeFinished2.style.backgroundColor = '#edcb21';
  //  upgradeFinText2.style.color = 'black';
  }
}

// Extension Functions:

function myTimer() {
  if(execute3 === true) {
  hackedNum = hackedNum + 1000;
  hackedBrowsers.innerHTML = delimitNumbers(hackedNum);
  }
}

function delimitNumbers(str) {
  return (str + "").replace(/\b(\d+)((\.\d+)*)\b/g, function(a, b, c) {
    return (b.charAt(0) > 0 && !(c || ".").lastIndexOf(".") ? b.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : b) + c;
  });
}
