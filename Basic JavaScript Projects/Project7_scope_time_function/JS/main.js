var foo = 20;                                                // global variable
function addNumbers() {
    Total = foo + 10;                                        // adding my global variable to a num
    document.getElementById("Global_var").innerHTML = Total;
}

function addMoreNumbers() {
    var x = 20;                                             // local variable
    Total = x * 2;                                          // adding my local variable to a num
    document.getElementById("Local_var").innerHTML = Total;
}

function logError() {
    Total = x * 2;                                          // creating a error in the log by using a undefined variable
    console.log(Total);
}
function dateHours() {
    if (new Date().getHours() < 12) {                       // if statment that will be true if the current hour of the day is before noon
    document.getElementById("DateHours").innerHTML = "Good morning!";
    }
}

function dateMinutes() {
    if (new Date().getMinutes() < 30) {                     // if statment that will be true if the current minute of the our is under 30  
        document.getElementById("Till_New_Hour").innerHTML = "More then 30 mins till the new hour."
    }
}

function mathFunction() {
    User_Answer = document.getElementById("User_Answer").value;   // creates a variable called User_Answer and gives it the value input by the user
    if (User_Answer == 81) {                                      // compares the variable User_Answer to the num 81
        Result = "You are correct.";                              // if true Result will be given the value "You are correct."
    }
    else {                                                        // if false Result will be given the value "You are incorrect."
        Result = "You are incorrect."
    }
    document.getElementById("response").innerHTML = Result;       // prints the value of Result to html element ID "response"
}

function Time_function() {
    var Time = new Date().getHours();                   // creates a variable called Time and assigns the current hour of the day as its value
    var Reply;                                          // creates a variable called Reply but doesnt give it a value yet
    if (Time < 12 == Time > 0) {                        // if the value of Time is less then 12 and the value of Time is greater then 0 this condition is true
        Reply = "It is morning time!";                  
    }
    else if (Time >= 12 == Time < 18) {                 // if the previous condition was false then this new condition will be checked
        Reply = "It is afternoon.";
    }
    else {                                              // if all previous conditions were false, this action will take effect.
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}