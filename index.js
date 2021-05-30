const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const path = require('path');
const cors = require('cors');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/public')));

app.use(cors());

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/public')));


let urlencodedParser = bodyParser.urlencoded({
    extended: true
});

//app.get('/api', routes.index);

app.get('/login', urlencodedParser, routes.login);
//app.post('/home', urlencodedParser, routes.home);
app.get('/createAccount', routes.createAccount);
app.post('/createAccount', urlencodedParser, routes.createPerson);

//:id is a parameter

//Routes.editperosn is running a method, which is called whenever something uses the POST method with an action of the same value

//deletes based on ID

app.listen(3000);
