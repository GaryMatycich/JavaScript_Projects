function rollD20() {
    document.getElementById("d20").innerHTML = Math.floor(Math.random() * 20); // picks a random number between 0 and 20 and displays it in element id "d20"
  }

function outcome() {
    var sentence = "your fate is"; // Defining a variable and giving it a string value
    sentence += " interesting..."; // concatenates variable "sentence" with a new string
    document.getElementById("response").innerHTML = sentence;
}