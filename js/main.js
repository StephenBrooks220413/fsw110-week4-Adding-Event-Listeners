var x = document.getElementById("square");
window.addEventListener("load", myFunction);
window.addEventListener("keydown", myFunctionB);
x.addEventListener("mouseover", myFunction2);
x.addEventListener("mousedown", mySecondFunction);
x.addEventListener("mouseup", myThirdFunction);
x.addEventListener("dblclick", myFourthFunction);
x.addEventListener("mouseout", myFunction5);
window.addEventListener("scroll", myFifthFunction);

function myFunction(event) {
    document.getElementById("square").style.backgroundColor = "black";
}

function myFunctionB(event) {
    if (event.key == 'b') {
        document.getElementById("square").style.backgroundColor = "black";
    } else {
        console.log("not black");
    }
}

function myFunction2() {
    document.getElementById("square").style.backgroundColor = "green";
}

function mySecondFunction() {
    document.getElementById("square").style.backgroundColor = "yellow";
}

function myThirdFunction() {
    document.getElementById("square").style.backgroundColor = "blue";
}

function myFourthFunction() {
    document.getElementById("square").style.backgroundColor = "red";
}

function myFunction5() {
    document.getElementById("square").style.backgroundColor = "teal";
    document.getElementById("square").innerHTML = "You went outside the square";
    document.getElementById("square").style.justifyContent = "center";
}

function myFifthFunction() {
    document.getElementById("square").style.backgroundColor = "purple";
}