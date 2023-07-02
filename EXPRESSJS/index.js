const express = require('express');
const fs = require('fs');

const app = express();
const port = 5500;




app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get("/user", (req, res) => {
    res.sendFile(__dirname + '/user.html');
    // res.send('User')
})

app.get("/user:id", (req, res) => {
    res.send(`User: ${req.params.id}`)
})


app.listen(port, () => {
    console.log(`proje http://localhost:${port} üzerinden çalışıyor`);
})


