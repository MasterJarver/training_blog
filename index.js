const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const data = 'hi';
app.get('/', (req, res) => res.render('index', {data: data})); // передача JSON с полем data и значением data, будет использоваться в шаблоне
app.listen(3000, () => console.log('app listening on 3000 port'));