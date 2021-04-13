function getReceipt() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");       // making an array from our html class "size"
    for (var i = 0; i < sizeArray.length; i++) {                   // starting a for loop
        if (sizeArray[i].checked) {                                // condition is whether or not a "size" has been checked in the form
            var selectedSize = sizeArray[i].value;                 // var selectedSize is giving the value of the checked element
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {                       // running through if statments to give the order its base price based on selectedSize
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;                                      // summarizing our current price total so far
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to function
    getTopping(runningTotal,text1);                                // taking our results and passing them to another function
};

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings"); // creating a new array from our html class "toppings"
    for (var j = 0; j < toppingArray.length; j++) {                 // creating a for loop
        if (toppingArray[j].checked) {                              // condition is based on toppings that were checked in our form
            selectedTopping.push(toppingArray[j].value);                       // making a new array of just our toppings we selected
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 =text1+toppingArray[j].value+"<br>";                          // regathering our results
        }
    }
    var toppingCount = selectedTopping.length;                                  // keeping track of how many toppings were ordered for our total price
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);                                      // reducing topping count by 1 as we are giving 1 topping for free
    } else {
        toppingTotal = 0;                                                       // if no toppings were selected
    }
    runningTotal = (runningTotal + toppingTotal);                                    // regathering our results
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00")
    document.getElementById("showText").innerHTML=text1;                               // our output based on the form selections made
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
        runningTotal+".00"+"</strong></h3>";
};