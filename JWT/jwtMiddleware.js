const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    //Devam
    if (req.url.includes("/login")) next();
    // Authorzation yok
    if (!req.headers.authorization) return res.status(401).json({ message: "unauthorized" });

    /** @type {string} */
    const token = req.headers.authorization.split(" ")[1];;

    jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
        if (err) {
            return res.json({ error: err })
        }

        req.data = decode;
        next();
    })
}