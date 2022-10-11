let diena = +prompt("Įveskite dienos skaičių. Jums bus išvestas dienos pavadinimas");

let dienosPavadinimas = grazintiDienosPavadinima(diena);
isvestiDienosPavadinima(dienosPavadinimas);



function grazintiDienosPavadinima(dienosSkaicius) {
    switch(dienosSkaicius) {
        case 1:
            return "pirmadienis";
            break;
        case 2:
            return "antradienis";
            break;
        case 3:
            return "trečiadienis";
            break;
        case 4:
            return "ketvirtadienis";
            break;
        case 5:
            return "penktadienis";
            break;
        case 6:
            return "šeštadienis";
            break;
        case 7:
            return "sekmadienis";
            break;
        default:
            return "tokios savaitės dienos nėra"

    }
}

function isvestiDienosPavadinima(dienosPavadinimas) {
    alert("Įvestos dienos pavadinimas yra: " + dienosPavadinimas);
}