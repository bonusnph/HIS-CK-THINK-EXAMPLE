require("dotenv").config();
const port = process.env.PORT || 80;
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var cors = require("cors");
var corsOptions = {
  origin: process.env.CLIENT_ADDRESS || "*",
  methods: "GET, PUT, POST, DELETE",
  allowedHeaders: [
    "Origin",
    "Accept",
    "Cookie",
    "Set-Cookie",
    "Content-Type",
    "Authorization",
    "x-requested-with",
    "platform",
  ],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// logs
// https://github.com/pinojs/pino-http
const pino = require("pino-http")();
app.use(pino);

// rate limit
// https://www.npmjs.com/package/express-rate-limit
const rateLimit = require("express-rate-limit");
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply the rate limiting middleware to API calls only
app.use("/api", apiLimiter);

// api docs
// https://www.npmjs.com/package/swagger-ui-express
// https://github.com/rcsiit1/swagger-api-testing-boilerplate/blob/master/docs/swag.json
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// oauth 2.0 (with google)
const passport = require("passport");
const cookieSession = require("cookie-session");
app.use(
  cookieSession({
    name: "google-auth-session",
    keys: ["sumo-dog", "puipui-dog"],
  })
);

require("./passport");
app.use(passport.initialize());
app.use(passport.session());

app.get("/api/oauth/failed", (req, res) => {
  res.json({
    message: "Failed",
  });
});
app.get("/api/oauth/success", (req, res) => {
  res.json(req.user);
});

app.get(
  "/api/oauth/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

app.get(
  "/api/oauth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/api/oauth/failed",
  }),
  function (req, res) {
    res.redirect("/api/oauth/success");
  }
);

// main router
const router = require("./src/routers");
app.use(router);

app.listen(port, () => {
  console.log(`🚀 Server running... for port : ${port}`);
});
