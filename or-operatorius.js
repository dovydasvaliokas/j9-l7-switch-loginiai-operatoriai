let x = +prompt("Įveskite skaičių. Išves true, jeigu trejeto arba penketo kartotinis. False, jeigu ne");
alert(arSkaiciusYra3Arba5Kartotinis(x));


function arSkaiciusYra3Arba5Kartotinis(skaicius) {
    if ((skaicius % 3 == 0) || (skaicius % 5 == 0)) {
        return true;
    }
    else {
        return false;
    }
}