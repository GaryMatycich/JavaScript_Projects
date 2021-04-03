function ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"Your are tall enough";  // the ternary operator is being used to choose between 2 options based on a condition 
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
// -----------------------------------------

function Vehicle(Make, Model, Year, Color) {      // This function is a contructor for initializing type "vehicle".
    this.Vehicle_Make = Make;                     // "This" keyword refers to the object that will be created by the contructor.
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");      // var Jack is a object of type Vehicle and is being given all the required perameters.
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {                                     // this function is being used to aquire data saved in object "Erik".
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +   // multiple strings are being concatenated using text and perametors we collected from object "Erik"
    " manufactured in " + Erik.Vehicle_Year;
}
//---------------------------------------------

function Hockey_Player(Position, Handeness, Height, Weight) {
    this.Hockey_Player_Position = Position;
    this.Hockey_Player_Handeness = Handeness;
    this.Hockey_Player_Height = Height;
    this.Hockey_Player_Weight = Weight;
}
var Dylan_Larkin = new Hockey_Player("Center", "Left", 6.1, 198);

function addPlayer() {
    document.getElementById("New_and_This").innerHTML =
     "Dylan_Larkin plays " + Dylan_Larkin.Hockey_Player_Position;
}

function d20PlusOne() {
    document.getElementById("Nested_Function").innerHTML = Rolld20PlusOne();
    function Rolld20PlusOne() {
        var Modifier = 1;
        var Total = 0;
        function rollD20() {Total = Modifier + Math.floor(Math.random() * 20) + 1}
        rollD20();
        return Total;
    }
}