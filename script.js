let = "Cartochka tovara";
let productName =  "Besprovadnie Naushniki";
let price = 150.00;
let discount = 10;
let reating = 4.5;
let isAvailable = true;

let discountPrice = price - (price * discount / 100);

console.log("Kartochka Tovara");
console.log("Nazvanie: ", productName);
console.log("Cean: ", price + "$");
console.log("Skidka: ", discount + "%");
console.log("Reyting: ", reating + " iz 5");
console.log("Nalichii: ", isAvailable ? "V nalichii" : "Net v nalichii");
console.log("Tip peremennoy price:", typeof price);
console.log("Tip peremennoy isAvailable:", typeof isAvailable)