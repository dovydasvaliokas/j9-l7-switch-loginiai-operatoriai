let kaina = +prompt("Įveskite prekės kainą.");
let intervaloPradzia = +prompt("Įveskite intervalo pradžią (nuo kurios kainos)");
let intervaloPabaiga = +prompt("Įveskite intervalo pabaigą (iki kurios kainos");
alert("Jeigu išves true, tai kaina yra intervale, jei false - nėra");

let arYra = arSkaiciusYraIntervale(kaina, intervaloPradzia, intervaloPabaiga);
alert(arYra);



function arSkaiciusYraIntervale(skaicius, intervaloMin, intervaloMax) {
    if ((skaicius > intervaloMin) && (skaicius < intervaloMax)) {
        return true;
    }
    else {
        return false;
    }
}