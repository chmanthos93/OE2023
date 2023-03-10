$
// Set the date we're counting down to
var countDownDate = new Date("FEB 16, 2023 08:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("counter").innerHTML = days + "D " + hours + "H "
        + minutes + "M " + seconds + "S ";

    // If the count down is finished, write some text
    //if (distance < 0) {
    //  clearInterval(x);
    //  document.getElementById("counter").style.visibility="hidden";
    //}

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "The Event Is Live";
    }
}, 1000);

;