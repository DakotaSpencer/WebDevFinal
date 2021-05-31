const dbPath = "mongodb+srv://JWilliams1233:pass~word@cluster0.ujp1m.mongodb.net/Users?retryWrites=true&w=majority"

const bcrypt = require('bcryptjs');

const config = require('../config');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(dbPath, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error'));
mdb.once('open', callBack => {});

let userSchema = mongoose.Schema({
    username: String,
    password: String, 
    email: String, 
    age: String,
    question1: String,
    question2: String,
    question3: String,
});

let User = mongoose.model('User_Collection', userSchema);

exports.login = (req,res) => {
    res.render('login', {
      title: 'Login',
      config: config
      //the first page that appears
    });
    //res.redirect('/home')
}

exports.home = (req, res) => {
    res.render('home', {
      title: 'Home',
      config: config
    })
};


exports.createAccount = (req, res) => {
    res.render('createAccount', {
      title: 'Create an Account',
      config: config
    })
    //res.redirect('/createAccount')
};

exports.makeHash = (req,res) => {
  bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, myHash) => {
        let user = new User({
          username: req.body.username,
          password: myHash,
          email: req.body.email,
          age: req.body.age,
          questionOne: req.body.questionOne,
          questionTwo: req.body.questionTwo,
          questionThree: req.body.questionThree
        });
        user.save((err, para2) => {
          //returns err if theres an error
          if(err) {
            console.error(err),
            res.render('/createAccount', {
              errorMessage: "Creating Account Failed"
            });
          } else {
            res.redirect('/')
          };
          console.log(req.body.username + ' added.');
        });
      });
  });
};
//Checking for user Authenitcation
exports.loginAuth = (req,res) => {
    User.findById(req.params.id, (err,user) => {
      bcrypt.compare(req.params.password)
    })
 };
