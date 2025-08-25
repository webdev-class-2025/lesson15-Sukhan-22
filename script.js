<<<<<<< HEAD
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
=======
let bookName = "Shohname";
let authorName = "Firdavsi";
let number = "1011";
let isReas = "Yes";
let comments =
  "Шахнаме» («Книга царей») - выдающийся памятник персидской литературы, национальный эпос иранских народов, созданный Абулькасимом Фирдоуси. Он содержит 60 тысяч двустиший и повествует об истории Ирана от древних времен до проникновения ислама.";

console.log("Nazvanie knigi");
console.log("Shohname: " + bookName);
console.log("Firdavsi: " + authorName);
console.log("1011: " + number);
console.log("v sisteme: " + (isReas ? "Yes" : "No"));
console.log(
  "Шахнаме» («Книга царей») - выдающийся памятник персидской литературы, национальный эпос иранских народов, созданный Абулькасимом Фирдоуси. Он содержит 60 тысяч двустиший и повествует об истории Ирана от древних времен до проникновения ислама.: " +
    comments
);
>>>>>>> 6c15510648a98cbbd36bb3c6349a79e68fba4339
