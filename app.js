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
    const {title, body} = req.body;
    console.log(req.body);
    console.log(`parse: ${title} ${body}`);
    Post.create({
        title: title,
        body: body
    }).then(post => console.log(post.id));
    res.redirect('/');
}); // получанеи и вывод инфы из POST запроса
module.exports = app;