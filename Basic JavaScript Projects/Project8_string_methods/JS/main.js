function concatThis(){
    var beginning = "This sentence ";
    var middle = "has been ";
    var end = "concatinated";
    var complete = beginning.concat(middle, end);          // .concat() will concatinate strings that are passed into it, onto the string that called it
    document.getElementById("concat").innerHTML = complete;
}

function sliceName() {
    var FullName = "Gary Matycich";
    var FirstName = FullName.slice(0,5)                   // .slice() will create a new string from the characters of a string that called based on the arguments passed into it.
    document.getElementById("first name").innerHTML = FirstName;
}

function stringNum() {
    var Num = 43545
    document.getElementById("string num").innerHTML = Num.toString();   // .toString will convert a variable to the datatype "string" if possible.
}

function precisionNum() {
    var Num = 34.543453;
    document.getElementById("precision num").innerHTML = Num.toPrecision(4);   // .toPrecision will condense a number down to a certain number of digits based on the argument passed into it.
}