const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { User } = require('./models');
const db = require('./db');
const passport = require('passport');

require('./config/passport');
const session = require('express-session');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(session({ secret: 'TODO:REPLACE', resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).send({ message: 'Logged in successfully.'});
})

app.get('/logout', (req, res) => {
  req.logout();
  res.send({ message: 'Logged out.'});
})

const isAuthenticated = (req, res, next) => {
  if (req.user) {
    return next();
  } else {
    return res.status(401).json({
      error: 'User not authenticated'
    })
  }
}

app.use(isAuthenticated);

app.get('/', (req, res) => {
  res.send({ message: 'Hello World' });
})

app.listen(process.env.API_PORT, async () => {
  console.log(`Listening on ${process.env.API_PORT}, fucking finally. :P `);
  try {
    await db.sync(
    )
    await User.create({ username: "test", password: "test" });
    console.log('Connected to database');
  } catch(error) {
    console.error(`Error: Can't connect to database ${error}`);
  }
})