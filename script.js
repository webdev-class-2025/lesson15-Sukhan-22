// poluchaem elementi formi 
const form = document.getElementById("delivery-form");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

//poluchenie znachemiya
const city = document.getElementById("city").value.trim().toLowerCase();
const weight = parseFloat(document.getElementById("weight").value);
const deliveryType = document.getElementById("delivery-type").value;

//proverka vesa
if(isNaN(weight) || weight <=0) {
    result.textContent="Oshibka: ddedite korektniy ves!"
}

//bazovie tarifi
let baseCost = 0;
if(deliveryType==="standard") {
    baseCost = 100+weight * 50;
} else if (deliveryType=== "express") {
    baseCost=200+weight * 80;
} else {
    result.textContent="Oshibks: neizvestniy tip doctavki.";
    return;
}

//okruglenie
result.textContent =`${Math.round(baseCost)} Somoni`;
 });