const express = require('express');
const app = express();
const port = 5500;


app.get('/',(req,res) =>{
res.json({test: "asd"})
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})