const express = require('express');
const bodyParser = require('body-parser'); // нужен для парсинга тела http POST запросов req.body
const path = require('path');
const staticAsset = require('static-asset');
const app = express(); // создание экземпляра приложения
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true})); // использование в приложении bodyParser
app.use(staticAsset(path.join(__dirname, 'public'))); // подключение статической ссылки на public
app.use(express.static(path.join(__dirname, 'public')));
app.use('/javascripts', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));
app.get('/', (req, res) => {
    res.render('index');
}); // передача JSON с полем data и значением data, будет использоваться в шаблоне
module.exports = app;