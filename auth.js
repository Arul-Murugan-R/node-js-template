const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '62984427240-gthlbvod3sjl56v1fc1acuumt2f2vepc.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

passport.use(new GoogleStrategy({
    clientID:GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/callback",
    passReqToCallback : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
      return done(null, profile);
      
  }
));

passport.serializeUser((user, done) => {
    done(null,user)
})

passport.deserializeUser((user,done) => {
    done(null,user)
})