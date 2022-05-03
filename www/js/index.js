let counter = 10;
let intervalId = null;

function defineValor() {
    counter = document.getElementById("segundos").value;
}

function cinquentaS() {
    counter = 50;
}


function finish() {
    clearInterval(intervalId)
    document.getElementById("bip").innerHTML = "Acabou!";
}

function bip() {
        if (counter == 0) {
            finish()
    } else {
        document.getElementById("bip").innerHTML = counter + "segundos";
    }
    counter--;
}

function start() {
    intervalId = setInterval(bip, 1000);
}

