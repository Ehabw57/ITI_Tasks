const jwt = require('jsonwebtoken')

function authenticate(req, res, next) {
  try {
    const token =  req.headers['authorization']
    if(!token)
      res.status(403).json({message:"No authorize token was passed"})

    const payload = jwt.verify(token, process.env.JWT_KEY)
    req.user = payload;
    next()
  } catch(err) {
    res.status(403).json({message: `Unautroized access: ${err.message}`})
  }
}

module.exports = authenticate
