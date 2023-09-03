const multer = require("multer");
const fs = require("fs")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync("./uploads")) {
            fs.mkdirSync("./uploads")
        }

        console.log("destination", file)
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        console.log("filename", file)
        cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname);
    }
});


const fileFilter = (req, file, cb) => {

    console.log("file filter", file)
    cb(null, true);
}

const upload = multer({ storage: storage, fileFilter: fileFilter })

module.exports = upload;