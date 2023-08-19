const express = require('express');

const app = express();
const router = express.Router();
const port = 5200;
app.use(express.json());

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


var myData = [
    {
        id: 1,
        city: "Ankara"
    },
    {
        id: 2,
        city: "İstanbul"
    }
]

router.get('/cities', (req, res) => {
    res.json(myData);
});
router.post('/cities', (req, res) => {
    const { city } = req.body;
    myData.push({
        id: Date.now(),
        city
    })
    res.json(myData);
})
router.delete('/cities/:id', (req, res) => {
    const { id } = req.params;

    const newData = myData.filter(data => Number(data.id) !== Number(id));
    myData = newData;

    res.json(myData);
})

router.use('/my-api-docs',swaggerUI.serve )
router.use('/my-api-docs',swaggerUI.setup(swaggerDocument) )

app.use(router);
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})