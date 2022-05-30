const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: "987449296157-4os8nfkghen6a59192ioh00vj8iqc75e.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost/api/oauth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
