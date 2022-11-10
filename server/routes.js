const signupRouter = require('./routes/signupRouter');
const loginRouter = require('./routes/loginRouter');
const bookEvent = require('./routes/bookEvent');

module.exports = function (app) {
  app.use("/signup", signupRouter);
  app.use("/login", loginRouter);
  app.use("/bookEvent", bookEvent);
};
