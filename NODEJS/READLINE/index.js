const readLine = require("readline");
const process = require("process");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout 
})

rl.question('Adın Ne? ', (answer) =>{
    console.log(`Answer: ${answer}`)
    rl.close();
})
 