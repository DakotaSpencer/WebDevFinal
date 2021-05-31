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
});

let User = mongoose.model('User_Collection', userSchema);

exports.login = (req,res) => {
    res.render('login', {
      title: 'Login',
      config: config,
      cookie: lastVisited,
      user: req.session.user
      //the first page that appears
    });
    //res.redirect('/home')
}

exports.home = (req, res) => {
    res.render('home', {
      title: 'Home',
      config: config,
      cookie: lastVisited,
      user: req.session.user
    })
};

exports.createAccount = (req, res) => {
    res.render('createAccount', {
      title: 'Create an Account',
      config: config,
      cookie: lastVisited,
      user: req.session.user
    })
    //res.redirect('/createAccount')
};

exports.makeHash = (req,res) => {
  if(req.body.password && req.body.username && req.body.email && req.body.age){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, myHash) => {
          let user = new User({
            username: req.body.username,
            password: myHash,
            email: req.body.email,
            age: req.body.age,
            questionOne: req.body.animal,
            questionTwo: req.body.color,
            questionThree: req.body.food,  
          });
          user.save((err, para2) => {
            //returns err if theres an error
            if(err) {
              console.error(err);
              let lastVisited = req.cookies.createAccountLastVisited;
              res.cookie("createAccountLastVisited", `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`)
              
              res.render('createAccount', {
                errorMessage: "Creating Account Failed",
                config: config,
                cookie: lastVisited,
                user: req.session.user
              });
            } else {
              res.redirect('/')
            };
            console.log(req.body.username + ' added.');
          });
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
  };
};
//Checking for user Authenitcation
exports.loginAuth = (req,res) => {
  if(req.body && req.body.password && req.body.username){
    User.find({username: req.body.username}, (err,user) => {
      if (user && user[0]){
        bcrypt.compare(req.body.password, user[0].password, (err, res1) => {
          if(res1 === true){
            req.session.user = user[0];
            let lastVisited = req.cookies.homeLastVisited;
            res.cookie("homeLastVisited", `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`)
            res.redirect("/home")
          } else {
            //res.render("login", {title: "login page", config: config})
            res.redirect('/');
          }
        });
      }else{
        res.redirect('/')
      }
    });
  } else {
    res.redirect('/');
  }
};

exports.editUser = (req, res) => {
  let lastVisited = req.cookies.editLastVisited;
  res.cookie("editLastVisited", `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`)
  res.render('editPerson', {
    title: "Edit User",
    config: config,
    cookie: lastVisited,
    user: req.session.user
  })
}

exports.editPerson = (req, res) => {
  //Reads frin database
  User.findById(req.body.id, (err, user) => {
    if(err) return console.error(err);
    user.username= req.body.username;
    //user.password= myHash,
    user.email= req.body.email;
    user.age= req.body.age;
    user.questionOne= req.body.animal;
    user.questionTwo= req.body.color;
    user.questionThree= req.body.food;
    user.save((err, user) => {
      if(err) return console.error(err);
      console.log(req.body.name + ' updated.');
    });
    res.redirect('/');
  })
};
