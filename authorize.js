const authorize = (req, res, next) => {
  console.log('authorize');
  const { user } = req.query;
  if (user) {
    req.user = { name: user, id: 1 };
    next();
  } else {
    res.send('unauthorized');
  }
};

module.exports = authorize;
