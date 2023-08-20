const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const logger = require('morgan');
const connectDB = require('./config/database');
const mainRoutes = require('./routes/main');
const postRoutes  = require('./routes/post');
const commentRoutes = require('./routes/comments');

require('dotenv').config({path: './config/.env'});

// Passport config
require('./config/passport')(passport);

connectDB();

//using jsx for the ui
app.set('view engine', 'jsx');
app.use(express.static('public'));
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  );
  
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//use flash for messages erros info and etc.
app.use(flash());

//setup routes for server listening 
app.use('/', mainRoutes)
app.use('/post', postRoutes);
app.use('/comment', commentRoutes);
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
});    
