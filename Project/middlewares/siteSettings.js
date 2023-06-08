module.exports = function (req, res, next) {
  console.log("middleware working");
  console.log(req.session);
  res.locals.user = req.session.user || {};
  res.locals.flash = req.session.flash;
  req.session.flash = null;

  req.flash = function (type, message) {
    req.session.flash = { type, message };
  };
  next();
};
