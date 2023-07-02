const express = require('express');
const path = require('path');
const app = express();
const port = 5500;


const appRouter = require('./router/router');


app.set('view engine', 'ejs');

// Özel view klasörü tanımlaması
// app.set('views', path.join(__dirname, 'screens'))
app.use('/assets', express.static(path.join(__dirname + '/assets')))
//Sunucunun router'ı kullanması için
app.use(appRouter);
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})