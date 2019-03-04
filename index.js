const app = require('./app');
const database = require('./database');
const config = require('./config');
database()
    .then(info => {
        console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    })
    .catch(() => {
    console.error('Unable to connect to database');
    process.exit(1);
    });
app.listen(config.PORT, () => console.log('app listening on 3000 port'));