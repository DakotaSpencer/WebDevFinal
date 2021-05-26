const dbPath = "mongodb+srv://JWilliams1233:9542715.Jw1233@cluster0.ujp1m.mongodb.net/Users?retryWrites=true&w=majority"

const express = require('express');
const pug = require('pug');
const mongoose = require('mongoose');
const { allowedNodeEnvironmentFlags } = require('node:process');
mongoose.Promise = global.Promise;

const app = express();

mongoose.connect(dbPath, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

/* app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/public')));*/

let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error'));
