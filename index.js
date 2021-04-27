const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

const log = (req, res, next) => {
    let data = new Date();
    let date = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear() + ' ' + data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
    console.log('Date: ' + date + ' | ' + req.method, req.url, req.connection.remoteAddress);
    next();
};

app.use(log);

app.get('/', (req, res) => {
    res.render('pages/welcome');
});

app.get('/list', (req, res) => {
    res.render('pages/list');
});

app.post('/apple', (req, res) => {
    console.log(req.body);
    res.send('Data: ' + req.body.productname5);
});

app.listen(80, () => {
    console.log('Running... (80)');
});