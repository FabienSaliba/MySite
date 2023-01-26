let v = 1;

function invertColor() {

    if (v == 1) {
        document.querySelector("body").style.filter = "invert(1)";
        document.querySelector(".btn-dark-light").innerHTML = "Light mode"
        v--;

    } else if (v == 0) {
        document.querySelector("body").style.filter = "invert(0)";
        document.querySelector(".btn-dark-light").innerHTML = "Invert mode"
        v++
    }       
}