
const Index = (req, res) => {
    res.render('index', {
        title: "Anasayfa",
        number: 5,
        isActive: true,
        myArray: [
            {
                id: 1,
                name: "alper"
            },
            
            {
                id: 2,
                name: "alper2"
            },

        ]
    });
    // res.sendFile(path + '/index.html');
}

const GetParameters = (req, res) => {
    const params = req.params;
    const query = req.query;

    console.log(JSON.stringify(params, null, 2));
    console.log(query);
    res.render('parameters', {
        title: "Parametreler",
        parameters: params
    })
    // res.sendFile(path + '/parameter.html');
}

const Post = (req, res) => {
    res.status(201).json({
        message: "Başarılı"
    });
}

const Delete = (req, res) => {
    res.json({
        message: "Başarılı"
    })
}

const Error = (req, res) => {
    res.status(404).json({
        message: "Aranan kaynak bulunamadı!",
        url: req.url,
        date: Date.now(),
        statusCode: 404
    });
}

module.exports = {
    Index,
    GetParameters,
    Post,
    Delete,
    Error
};