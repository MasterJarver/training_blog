const express = require('express');
const bodyParser = require('body-parser'); // нужен для парсинга тела http POST запросов req.body
const Post = require('./models/post');
const app = express(); // создание экземпляра приложения
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true})); // использование в приложении bodyParser
const arr = ['hello', 'world', 'test'];
app.get('/', (req, res) => res.render('index', {arr: arr})); // передача JSON с полем data и значением data, будет использоваться в шаблоне
app.get('/create', (req, res) => res.render('create'));
app.post('/create', (req, res) => {
    const {text, body} = req.body;
    console.log(req.body);
    console.log(`parse: ${text} ${body}`);
    Post.create({
        title: text,
        body: body
    });
    res.redirect('/');
}); // получанеи и вывод инфы из POST запроса
module.exports = app;