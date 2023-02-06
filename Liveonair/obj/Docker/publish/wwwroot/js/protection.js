$
    var password = "oE2023@#";
    var x = prompt("Enter in the password ", " ");
    if (x == password) {
        alert("You've entered in the right password");
    document.getElementById("safepage").style.display = "flex";
    }
    else {
        window.location = "./boehringer";
    }
;