 function authorizeMiddelware(...roles) {
  return (req, res ,next) => {
    if(!req.user || !roles.includes(req.user.role))
      res.status(403).json({message: "Acess denied"})
    next();
  }
}

module.exports = authorizeMiddelware
