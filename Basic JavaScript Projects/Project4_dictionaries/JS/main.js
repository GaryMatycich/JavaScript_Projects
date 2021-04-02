function my_Dictionary() {
    var Redwings = {            // creates an object of type Redwings
        Logo:"Winged Wheel",    // adds properties in KVPs
        City:"Detroit",
        Colors:"Red and White",
        Roster:23
    };
    document.getElementById("Dictionary").innerHTML = Redwings.Colors;
}

function my_Delete() {
    var Redwings = {
        Logo:"Winged Wheel",
        City:"Detroit",
        Colors:"Red and White",
        Roster:23
    };
    delete Redwings.City;        // removes the value from the City property
    document.getElementById("Delete").innerHTML = Redwings.City;
}