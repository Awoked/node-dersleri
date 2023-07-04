const express = require('express');
const app = express();
const port = 5500;

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

router.get('/users', (req, res) => {
    res.status(200).json(myData)
})

router.get('/users/:id', (req, res) => {
    const user = myData.find(data => data.id === req.params.id);

    res.status(200).json(user);
})

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