//------------------COUNTDOWN-----------------------------//
function countdown() {
    var seconds = document.getElementById("seconds").value;     // takes our input from element "seconds" and creates a variable called "seconds".

    function tick() {                                           // inner function that uses our local variable "seconds".
        seconds = seconds - 1;                                  // removes 1 from our variable
        timer.innerHTML = seconds;                              // displays the value of variable "seconds" into the element "timer".
        setTimeout(tick, 1000);                                 // pauses the program by "tick" * 1000ms
    if(seconds == -1){                                          // if statment with a condition of variable seconds being equal to -1
        alert("Time's up!");                                    // the result of the if statment being true is to display a alert message
    }
        }
    tick();                                                     // runs our inner function called "tick"
}
//----------------SLIDE SHOW ----------------------------//
var slideIndex = 1;                           // Creates a variable of time number called slideIndex with a value of 1
showSlides(slideIndex);                       // This function runs by default. Our slideIndex variable is passed into it.

function plusSlides(n) {                      // The plusSlides function is used to add 1 or -1 to our current slideshow array index.
  showSlides(slideIndex += n);
}

function showSlides(n) {                                      // Here we are defining our showSlides function. It requires a datatype of any currently.
    var i;                                                    // creating a variable called "i" that has no value or datatype yet.
    var slides = document.getElementsByClassName("mySlides"); // creating a variable called "slides" that will an array containing each of our "mySlide" objects
    if (n > slides.length) {slideIndex = 1}                   // This if statment returns us to the first image if we hit the "next" on the last image
    if (n < 1) {slideIndex = slides.length}                   // This if statment sends to the last image of our "mySlide" array when we hit "prev" on the first image
    for (i = 0; i < slides.length; i++) {                     // Creates a loop that will go for as many times as we have images in our array
        slides[i].style.display = "none";                     // This action sets all images to not display. It is being used to insure we do not have multiple images on at once.
    }
    slides[slideIndex-1].style.display = "block";             // Sets the current image in our "mySlide" array index (-1 to account for starting at 0) to display its content.
}