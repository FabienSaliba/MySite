let currentBox = 0;

document.querySelector("#image2").style.opacity = "0.3";
document.querySelector("#image3").style.opacity = "0.3";
document.querySelector("#image1").style.transform = "scale(1.15)";
setInterval(next,3500)


function previous() {

    if (currentBox == 1) {
        document.querySelector("#image1").style.opacity = "1";
        document.querySelector("#image2").style.opacity = "0.3";
        document.querySelector("#image3").style.opacity = "0.3";
        document.querySelector("#image1").style.transform = "scale(1.15)";
        document.querySelector("#image2").style.transform = "scale(1)";
        document.querySelector("#image3").style.transform = "scale(1)";


        currentBox--;
        console.log(currentBox)
    }
    else if (currentBox == 2) {
        document.querySelector("#image1").style.opacity = "0.3";
        document.querySelector("#image2").style.opacity = "1";
        document.querySelector("#image3").style.opacity = "0.3";
        document.querySelector("#image1").style.transform = "scale(1)";
        document.querySelector("#image2").style.transform = "scale(1.15)";
        document.querySelector("#image3").style.transform = "scale(1)";

        currentBox--;
        console.log(currentBox)
    }

    else if (currentBox == 0) {
        document.querySelector("#image1").style.opacity = "0.3";
        document.querySelector("#image2").style.opacity = "0.3";
        document.querySelector("#image3").style.opacity = "1";
        document.querySelector("#image1").style.transform = "scale(1)";
        document.querySelector("#image2").style.transform = "scale(1)";
        document.querySelector("#image3").style.transform = "scale(1.15)";

        currentBox = 2;
        console.log(currentBox)
    }


}

function next() {
    
    if (currentBox == 2) {
        document.querySelector("#image1").style.opacity = "1";
        document.querySelector("#image2").style.opacity = "0.3";
        document.querySelector("#image3").style.opacity = "0.3";
        document.querySelector("#image1").style.transform = "scale(1.15)";
        document.querySelector("#image2").style.transform = "scale(1)";
        document.querySelector("#image3").style.transform = "scale(1)";

        currentBox = 0;
        console.log(currentBox)
    }
    else if (currentBox == 1) {
        document.querySelector("#image1").style.opacity = "0.3";
        document.querySelector("#image2").style.opacity = "0.3";
        document.querySelector("#image3").style.opacity = "1";
        document.querySelector("#image1").style.transform = "scale(1)";
        document.querySelector("#image2").style.transform = "scale(1)";
        document.querySelector("#image3").style.transform = "scale(1.15)";



        currentBox++;
        console.log(currentBox)
    }
    else if (currentBox == 0) {
        document.querySelector("#image1").style.opacity = "0.3";
        document.querySelector("#image2").style.opacity = "1";
        document.querySelector("#image3").style.opacity = "0.3";
        document.querySelector("#image1").style.transform = "scale(1)";
        document.querySelector("#image2").style.transform = "scale(1.15)";
        document.querySelector("#image3").style.transform = "scale(1)";

        currentBox++;
        console.log(currentBox)

    }


}