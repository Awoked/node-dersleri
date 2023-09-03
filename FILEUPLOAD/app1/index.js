const express = require("express");
const app = express();
const router = express.Router();
const port = 8181;
const singleFileUpload = require("./singleFileUpload");
const multipleFileUpload = require("./singleFileUpload");

app.use(express.json());


router.get("/", (req, res) => {
    res.send("hello")
})


router.post("/fileUpload", singleFileUpload.single('dosya'), (req, res) => {

    res.send("ok")
})

router.post("/multipleFileUpload", multipleFileUpload.array('dosya', 5), (req, res) => {

    res.send("ok")
})

app.use(router);
app.use('/Content', express.static('uploads'))

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

