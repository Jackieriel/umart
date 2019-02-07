const express = require("express");
const path = require('path');
const exphbs = require("express-handlebars");
const expressValidator = require('express-validator')
const flash = require('connect-flash')
const session = require('express-session')
var bodyParser = require("body-parser");
// const flash = require('express-flash');

// init app
const app = express()
const port = 3000

// require database file
require("./models/db");

// bring in nmodel
let Adverts = require('./models/adverts')

// This allow us to use external stuff
app.use('/public', express.static('public'));

// app.use(flash()); 
// Express session middleware
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true }
  })
);

// Express message middleware
app.use(require("connect-flash")());
app.use(function(req, res, next) {
  res.locals.messages = require("express-messages")(req, res);
  next();
});

// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.')
      , root = namespace.shift()
      , formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// body parser middleware
// parse application/json
app.use(bodyParser.json())

// load view
// Configure express handlebar
// Jack replaces hbs
app.set("views", path.join(__dirname, "/views"));
app.engine(
  "jack",
  exphbs({
    extname: "jack",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts/"
  })
);
app.set("view engine", "jack");


// Home route
// Create Home router object
app.get('/', function (req, res) {
  Adverts.find({}, function(err, docs){
    if(!err){
      res.render('home', {
        list: docs
      })
    }else{
      console.log('Error retriving data from database  ' + 'err')
    }
  })

})

// Get single advert
app.get('/ads/:id', function(req, res){
  Adverts.findById(req.params.id, function(err, adverts){
    if(!err){
      res.render('ads', {
        adverts: adverts
      })
    }else{
      console.log(err)
    }
    
  })
})

// Get single advert admin
app.get('/my-ads-detail/:id', function (req, res) {
  Adverts.findById(req.params.id, function (err, adverts) {
    if (!err) {
      res.render('manage/my-ads-detail', {
        adverts: adverts
      })
    } else {
      console.log(err)
    }

  })
})

// Load edit form
app.get('/edit-ads/:id', function (req, res) {
  Adverts.findById(req.params.id, function (err, adverts) {
    if (!err) {
      res.render('manage/edit-ads', {
        viewTitle: 'Edit Adverts',
        adverts: adverts
      })
    } else {
      console.log(err)
    }

  })
})

// Submit edit form
app.post('/edit-ads/:id', function(req, res) {
  let adverts = {}
  adverts.category = req.body.category;
  adverts.title = req.body.title;
  adverts.price = req.body.price;
  adverts.zone = req.body.zone;
  adverts.description = req.body.description;

  let query = {_id:req.params.id}

  Adverts.update(query, adverts, function(err){
    if(err){
      console.log(err)
      return
    }else{
      res.redirect('/')
    }
  })
});


// create post route
app.get('/create', function (req, res) {
  res.render('manage/create-ads', {
    viewTitle: 'Create Ads'
  })
})

// create submit route
app.post('/create', function (req, res) {
  let adverts = new Adverts()
  adverts.category = req.body.category
  adverts.title = req.body.title
  adverts.price = req.body.price
  adverts.zone = req.body.zone
  adverts.description = req.body.description

  // Save the data from form
  adverts.save(function (err) {
    if (err) {
      console.log(err)
      return
    } else {
      req.flash('alert-success', 'Ads Creaated Successfully')
      res.redirect('/my-ads')
    }
  })
})

// My Adverts user
app.get('/my-ads', function (req, res) {
  Adverts.find({}, function (err, docs) {
    if (!err) {
      res.render('manage/my-ads', {
        list: docs
      })
    } else {
      console.log('Error retriving data from database  ' + 'err')
    }
  })

})

// Delete my Adverts
app.get('/my-ads/delete/:id', function(req, res){
  Adverts.findByIdAndRemove(req.params.id, function(err, doc){
    if(!err){
      res.redirect("/my-ads");
    }else{
      console.log('Cannot Delete ads' + err)
    }
  })
})



// Call a listening function/ start server
app.listen(port, () => console.log(`App Successfully connected on port ${port}!`));