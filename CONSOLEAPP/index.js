const readline = require("readline");
const process = require("process");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question('Sayı 1 giriniz: ', (num1) =>{
    rl.question('Sayı 2 giriniz: ', (num2) =>{
        const result = Number(num1) + Number(num2);

        console.log(result);
        rl.close();
    })
})