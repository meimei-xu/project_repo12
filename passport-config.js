const LocalStrategy = require("passport-local").Strategy;

function initialize(passport) {
  const authenticateUser = (name, pw, done) => {};
  passport.use(new LocalStrategy({ usernameField: "name" }), authenticateUser);
  passport.serializeUser((user, done) => {});
}
