const express = require('express');
const fs = require('fs');

const app = express();
const port = 5500;


// bir klasörü veya dosyayı public hale getirir
app.use('^/assets', express.static('assets'))


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get("/user", (req, res) => {
    res.sendFile(__dirname + '/user.html');
    // res.send('User')
})

app.get("/user/:id", (req, res) => {
    res.send(`User: ${req.params.id}`)
})


app.get('/test', (req, res) => {
    res.redirect('/user');
})

app.get('/getjson', (req, res) => {
    res.json([
        {
            id: 1,
            name: "alper"
        },
        {
            id: 2,
            name: "alper2"
        }
    ])
    res.json({ id: 1, name: "Alper" })
})


//request types

app.get('/deneme', (req, res) => {
    res.send(`${req.method} Request`)
})

app.put('/deneme', (req, res) => {
    res.send(`${req.method} Request`)
})

app.delete('/deneme', (req, res) => {
    res.send(`${req.method} Request`)
})

app.post('/deneme', (req, res) => {
    res.send(`${req.method} Request`)
})




app.listen(port, () => {
    console.log(`proje http://localhost:${port} üzerinden çalışıyor`);
})


