// server.js

// set up ======================================================================
// get all the tools we need
import config from 'config'
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import flash from 'connect-flash';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import publicRoutes from './routes/public/index.js'
import memberRoutes from './routes/member/index.js'
import adminRoutes from './routes/admin/index.js'

const app = express();
const port = process.env.PORT || 8080;

mongoose.connect(config.get("database.url"));

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs'); // set up ejs for templating

app.use(express.static('public')); // Folder for public files

// required for passport
app.use(session(config.get("session")))
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================

app.use(publicRoutes);
app.use('/member', memberRoutes);
app.use('/admin', adminRoutes);

//require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log(`The magic happens on port ${port}`);
