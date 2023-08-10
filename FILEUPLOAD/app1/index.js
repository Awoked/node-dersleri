const express = require("express");
const app = express();
const router = express.Router();
const port = 8181;
const singleFileUpload = require("./singleFileUpload");

app.use(express.json());


router.get("/", (req, res) => {
    res.send("hello")
})
router.post("/fileUpload", (req, res) => {
    console.log(req.body, req.file);
    singleFileUpload(req, res,(error) =>{
        console.log("file",req.file);
    });
    res.send("ok")
})

app.use(router);
app.use('/Content',express.static('uploads'))

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

