//Basic Functions
//Key word function, then name function "sayHi", closed "()" with no parameter being pased, then inside the "{}" is the code to be ran."console.log("Hello there people")

function sayHi() {
  console.log("Hello there pepole");
}

//This is a function that take a name parameter "name". The function has the same syntax as the function above.
function hiFriend(name){
  console.log("Hi my good friend"+ " " +name)
}

function upEarly(weekend, downtime) {
  return (!weekend || downtime)
}


// Comparing Booleans params
function mTrouble(aSmile, bSmile) {
  return (!aSmile && !bSmile) || (aSmile && bSmile)
}

// Basic inputs and outputs
function moreStr(str, n) {
  // local var
  var str = "Hello";
  var n = 10;
  var returnStr ="";
  var i = 0;
  //While loop
  while (i<n) {
    returnStr += str
    itt
  }
  return returnStr
}
