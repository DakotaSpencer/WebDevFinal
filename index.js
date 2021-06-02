const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const path = require('path');
const cors = require('cors');
const cookie = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(session({
    secret: ':)',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));


app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/public')));

app.use(cors(), cookie());

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/public')));

let urlencodedParser = bodyParser.urlencoded({
    extended: true
});

app.get('/', routes.login);
app.get('/home', routes.home);
app.get('/createAccount', routes.createAccount);
app.post('/createAccount', urlencodedParser, routes.makeHash);
app.post('/login', urlencodedParser ,routes.loginAuth);
app.get('/editAccount', routes.editUser);
app.post('/editAccount',urlencodedParser, routes.editPerson);
app.get('/logout', routes.logout);
app.get('/api', routes.api);

//:id is a parameter

//Routes.editperson is running a method, which is called whenever something uses the POST method with an action of the same value

//deletes based on ID

app.listen(3000);
