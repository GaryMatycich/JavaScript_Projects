function addition() {
    var result = 5+5;
    document.getElementById("additionMath").innerHTML = result;
}

function subtraction() {
    var result = 5-5;
    document.getElementById("subtractionMath").innerHTML = result;
}

function multiplication() {
    var result = 5*5;
    document.getElementById("multiplicationMath").innerHTML = result;
}

function division() {
    var result = 5/5;
    document.getElementById("divisionMath").innerHTML = result;
}

function multipleOperations() {
    var result = (10-3)*4/2+6;
    document.getElementById("multipleOpsMath").innerHTML = result;
}

function modulus() {
    var result = 100%30;
    document.getElementById("modulusMath").innerHTML = result;
}

function negation() {
    var result = 10;
    document.getElementById("negationMath").innerHTML = -result;
}

function increment() {
    var x = 2.5;
    x++;
    document.getElementById("incrementMath").innerHTML = x;
}

function decrement() {
    var y = 4.25;
    y--;
    document.getElementById("decrementMath").innerHTML = y;
}

function randomNum() {
    z = Math.floor(Math.random() * 100);  // utilizing both the math object and the random function
    document.getElementById("randomMath").innerHTML = z;
}

function test() {
    z = Math.random() * 100;  
    document.getElementById("testMath").innerHTML = z;
}