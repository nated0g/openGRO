const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { User } = require('../models');
const db = require('../db');

passport.use(new LocalStrategy(
  async function (username, password, done) {
    try {
      const user = await User.findOne({ where: { username: username } });
      if (!user) {
        return done(null, false, { message: 'No user by that name.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
))

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id).then(function (user) { done(null, user); });
});