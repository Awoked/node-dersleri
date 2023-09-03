require('dotenv').config();

const express = require("express");
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT;

const router = express.Router();

const jwtMiddleware = require("./jwtMiddleware.js");



app.get("/", (req, res) => {

    const token = jwt.sign({
        name: "Alper",
        surname: "Koşay",
        role: "user"
    }, process.env.JWT_KEY, {
        expiresIn: "1m"
    })

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxwZXIiLCJzdXJuYW1lIjoiS2_Fn2F5Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE2OTM3NjcyOTMsImV4cCI6MTY5Mzc2NzM1M30.JYyWApTI2km3UKDICNfqcvP1L3Y_FV5__2RYx6r2fQc"


    res.json({
        message: "ok",
        token: token,
        decode: jwt.decode(token),
        verify: jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
            if (err) {
                return err.message
            }

            return decode
        })
    })
})

router.post('/login', (req, res, next) => {

    const { username, password } = req.body;

    const token = jwt.sign({
        id: Date.now(),
        userName: username,
        password: password,
        role: "user"
    }, process.env.JWT_KEY, {
        expiresIn: "30m"
    });


    res.json({
        message: "Merhaba",
        token,

    })
})


router.get('/users', (req, res) => {
    console.log(req.data);
    res.json({message: "başarılı"})
})



app.use(express.json());
app.use(jwtMiddleware)
app.use(router);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});