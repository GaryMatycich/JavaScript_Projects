var messageArray = ["This ", "is a ", "while loop!"];                             // creating an array object called "messageArray"

function Call_Loop(){
    var x = 0;
    while (x < 3) {                                                               // starting a while loop with the condition: if x is less then 3
        document.getElementById("Loop").innerHTML += messageArray[x];             // writing a message by looping through an array of messages and printing one per loop
        x++;
    }
}
/*------------------------------WHILE LOOP--------------------------------------*/

var colors = ["Red", "Green", "Blue", "Purple", "Yellow"];
var x;
function for_Loop() {
    for (x = 0; x < colors.length; x++) {                                        // starting a for loop with the condition: for each time x is less then the length of our array, do this
    document.getElementById("List_of_Colors").innerHTML += colors[x].slice(0, 1);  // printing the first letter of each string in our array
    }
}
/*---------------------------------FOR LOOP-------------------------------------*/

function array_Function() {
    var randomPrize = [];                                                         // creating an empty array
    randomPrize[0] = "prize 1";                                                   // adding data to each index of our array
    randomPrize[1] = "prize 2";
    randomPrize[2] = "prize 3";
    randomPrize[3] = "prize 4";
    randomPrize[4] = "prize 5";
    document.getElementById("Array").innerHTML = "your have won " + randomPrize[Math.floor(Math.random() * 5)];   // printing string from "random" indexes in our array
}
/*----------------------------------ARRAY---------------------------------------*/

function constant_Function() {
    const videoGame = {type:"FPS", dev:"343", name:"Halo Infinite",};                // creating a constant object and initializing its properties
    document.getElementById("Constant").innerHTML = videoGame.name;
}
/*---------------------------------CONSTANT-------------------------------------*/

var x = 50;
document.write(x + "<br>");
{
    let x = 25;                                                                     // using the let keyword to allow "x" to be used outside of our blockscope
    document.write(x + "<br>");
}
document.write(x);
/*------------------------------------LET---------------------------------------*/

function object_Function() {
    let phone = {make:"Samsung", model:"Galaxy Note S20", color:"Black",
        description() {
        return "This phone is a " + this.color + " " + this.make + " " + this.model;}  // using the return keyword to send the result of the following command back to the function that called it
    }
    document.getElementById("Object").innerHTML = phone.description();
}
/*------------------------------------OBJECT------------------------------------*/