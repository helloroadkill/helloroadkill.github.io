var pageLoadWait = 20;
var timeGap = 300;

var message = 'YOLO, play more.';
var extraTimeToAdd = message.length * 100 + pageLoadWait;

var displaymessage = function() {
    messageArray = stringFactoryForIndividLetterDisplay(message, timeGap);
    showElementInArrayIndividually(messageArray, extraTimeToAdd);
};


var showElementInArrayIndividually = function(array, extraTimeAdded) {
 var extraTimeAdded = extraTimeAdded || 0;
 var messageNode = document.getElementById("message");

 for (var ii = 0 ; ii < array.length; ii++) {
    var currentIndex = array[ii].currentIndex;
    setTimeout(function () {
    	var currentIndex = this; 
    	// array
			messageNode.innerHTML = messageNode.innerHTML + array[currentIndex].letter;
   }.bind(currentIndex), array[ii].timeoutVal + extraTimeAdded);
 }
};

var stringFactoryForIndividLetterDisplay = function(string, timeGap) {
 var defaultTimeGap = timeGap || 100;
 var extraTimeGap = 0;
 var timeCount = 0, timeToWait, primaryTimGap;

 var resultsArray = [];
 for (var ii = 0 ; ii < string.length; ii++) {
  extraTimeGap = 0;

 	if(ii != 0 && string[ii-1] === " " && string[ii] === "p" ) {
 		extraTimeGap = 900;
 	}

 	primaryTimeGap = Math.round(defaultTimeGap/2 + (Math.random()*(defaultTimeGap - defaultTimeGap/2)));

 	timeToWait = primaryTimeGap + extraTimeGap + 1;
  var letterObj = {
    letter: string[ii],
    timeoutVal: timeCount + timeToWait,
    currentIndex: ii
  };

  timeCount += timeToWait;
  resultsArray.push(letterObj);
 }
 return resultsArray;
};

displaymessage();

