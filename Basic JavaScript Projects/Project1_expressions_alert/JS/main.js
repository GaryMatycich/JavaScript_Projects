var A = "This is an alert"; // Defining a variable and giving it a string value
var B = "This is a string";
var C = "<br>This sentence has a \" in the middle of it" // Defining a variable and giving it a string value that includes a break line
var D = "<br>This sentence is connected " + "to this sentence." // Defining a variable and giving it a concatenated string value that includes a break line
var Team = "Redwings", Center = "Larkin", RW = "Fabbri", LW = "Zadina", //Defining multiple variables at one time
    RD = "Stecher", LD = "Cholowski";
var LD = LD.fontcolor("blue"); // setting a strings color to blue
var RD = RD.fontcolor("purple");
var LW = LW.fontcolor("green");
var RW = RW.fontcolor("orange");
var Team = Team.fontcolor("red");
var Center = Center.fontcolor("yellow");
window.alert(A); // calling a alert method and passing it a string variable called A 
document.write(B); 
document.write(C);
document.write(D);
document.write("<br>");
document.write(LD);
document.write("<br>");
document.write(5+5); // calling a write method and passing it 2 arguments in the form of a expression
