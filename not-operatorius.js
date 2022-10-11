let kaina = +prompt("įveskite kainą");
let intervaloPradzia = +prompt("Įveskite intervalo pradžią");
let intervaloPabaiga = +prompt("Įveskite intervalo pabaigą");

kaina = pakeistiKaina(kaina, intervaloPradzia, intervaloPabaiga);
alert("Nauja kaina yra: " + kaina);



// Pakeičia prekės kainą - tą kainą padvigubinant, jei ta kaina NĖRA intervale
function pakeistiKaina(kaina, intervaloMin, intervaloMax) {
    let arYra = arSkaiciusYraIntervale(kaina, intervaloMin, intervaloMax);

    if (!arYra) {
        kaina = kaina * 2;
    }
    return kaina;
}


function arSkaiciusYraIntervale(skaicius, intervaloMin, intervaloMax) {
    if ((skaicius > intervaloMin) && (skaicius < intervaloMax)) {
        return true;
    }
    else {
        return false;
    }
}