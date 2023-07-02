const process = require("process");
const cp = require("child_process");
console.log(process.arch)


cp.exec('tasklist', (err, stdout, stderr) => {
    console.log(stdout);
})

