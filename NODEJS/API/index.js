const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

const router = express.Router();

app.use(express.json());

let myData = [
    {
        "id": "1",
        name: "Alper",
        surname: "Koşay"
    },
    {
        "id": "2",
        name: "Alper2",
        surname: "Koşay"
    }
]

router.get('/', (req, res) => {
    // res.json({ id: 1 });

    // res.status(400).json({ id: 1 })

    // res.sendFile(path.join(__dirname, '/index.txt'));

    // res.cookie('myCookie', 'deneme', {
    //     expires: new Date(Date.now() + 12000),
    //     domain: 'localhost',
    //     path: '/',
    //     httpOnly: true
    // })
    // res.status(200).json({ message: "asd" })

    // res.attachment(path.resolve("/index.txt"));
    // res.sendFile(path.join(__dirname, '/index.txt'));
    // res.download('/index.txt');

    res.setHeader('test', 'testValue')

    res.send('ok');
})

//Bütün kullanıcılar
router.get('/users', (req, res) => {
    console.log('url', req.url);
    console.log('ctype', req.is('html'));
    console.log('getType', req.get('Content-Type'));
    console.log('hostname', req.hostname);
    console.log('protocol', req.protocol);
    console.log('ip', req.ip);
    console.log('httpVersion', req.httpVersion);
    console.log('path', req.path);
    console.log('isSecure', req.secure);

    res.status(200).json(myData);
})

//ID'ye göre kullanıcılar
router.get('/users/:id', (req, res) => {
    const user = myData.find(data => data.id === req.params.id);

    res.status(200).json(user);
})

//Kullanıcı ekle
router.post('/users', (req, res) => {
    const { name, surname } = req.body;
    const newUser = {
        id: Date.now().toString(),
        name,
        surname
    }
    myData.push(newUser);
    res.status(201).json({ message: "User Created Successfully", user: newUser })
})

// Update işlemi
router.put('/users/:id', (req, res) => {
    const body = req.body;

    // findIndex ile array'deki indexini buluyor
    const findIndex = myData.findIndex((data) => {
        return data.id === req.params.id
    })

    myData[findIndex] = { ...body, id: req.params.id }

    res.status(200).json(myData[findIndex]);
})

//Silme işlemi
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const newUserList = myData.filter(data => data.id !== id);
    myData = newUserList;

    res.status(200).json({ message: "success", newList: myData });

})

router.use((req, res) => {
    res.status(404).json({ message: "Not Found" })
})

app.use(router);
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})