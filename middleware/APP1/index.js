const express = require("express");
const app = express();
const router = express.Router();

const homeMiddleware = require("./middlewares/homeMiddleware");



router.get("/", (req, res, next) => {
    res.json({ message: "ok" })
})

router.get("/test", [homeMiddleware], (req, res, next) => {
    res.json({ message: "selam" })
})

// app.use((req, res, next) => {
//     if (req.query.name === "alper") return next();

//     res.json({ message: "adı alper olan geçebilir" })
// })

// app.use((req, res, next) => {
//     if (req.query.yas === "17") return next();

//     res.status(401)
//         .json({ message: "yaşın 17 değil" })
// })

app.use(router);

app.listen(8181, () => {
    console.log(`http://localhost:8181`)
})