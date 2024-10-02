//const angkaPertama = 8
//const operator = "*";
//const angkaKedua = 5;

//const hasil = angkaPertama + operator + angkaKedua;

//console.log(hasil);




const readline = require("readline-sync");

const angkaPertama = parseFloat(readline.question("Masukan Angka Pertama: "));
const operator = readline.question("Masukan Operator (+, -, *, /, %): ");
const angkaKedua = parseFloat(readline.question("Masukan Angka Kedua: "));

if (isNaN(angkaPertama) || isNaN(angkaKedua)) {
    console.log("Inputan tidak sesuai!!!");
} else {
    const hasil = execute(angkaPertama, angkaKedua, operator);
    console.log(`Hasilnya adalah ${hasil}`);
}

function execute(angkaPertama, angkaKedua, operator) {
    switch (operator) {
        case "+":
            return angkaPertama + angkaKedua;
        case "-":
            return angkaPertama - angkaKedua;
        case "*":
            return angkaPertama * angkaKedua;
        case "/":
            if (angkaKedua === 0) {
                return "Error: Tidak bisa dibagi dengan nol";
            }
            return angkaPertama / angkaKedua;
        case "%":
            return angkaPertama % angkaKedua;
        default:
            return "Input tidak valid";
    }
}
