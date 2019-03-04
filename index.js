const express = require('express');
const bodyParser = require('body-parser'); // нужен для парсинга тела http POST запросов
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true})); // использование в приложении bodyParser
const arr = ['hello', 'world', 'test'];
app.get('/', (req, res) => res.render('index', {arr: arr})); // передача JSON с полем data и значением data, будет использоваться в шаблоне
app.get('/create', (req, res) => res.render('create'));
app.post('/create', (req, res) => {console.log(req.body);}); // получанеи и вывод инфы из POST запроса
app.listen(3000, () => console.log('app listening on 3000 port'));