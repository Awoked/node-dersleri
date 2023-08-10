
const middleware = (req, res, next) => {
    if (req.query.name === "alper") return next();

    res.json({ message: "adı alper olan geçebilir" })
}

module.exports = middleware;