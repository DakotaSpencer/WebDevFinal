const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const path = require('path');
const cors = require('cors');

const app = express();


app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/public')));

app.use(cors())

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

let urlencodedParser = bodyParser.urlencoded({
    extended: true
});

//app.get('/api', routes.index);

app.get('/', urlencodedParser, routes.login);
app.post('/home', urlencodedParser, routes.home);
app.get('/create', urlencodedParser, routes.createAccount);
//app.post('/createAccount', urlencodedParser, routes.createAccount);

app.listen(3000);
