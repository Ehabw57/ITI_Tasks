const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

function dashBoard(req, res) {
  if(!req.user)
    res.staus(403).json({message: "sorry no user were porvided"})
  const role = req.user.role == "admin" ? "Wellcome admin here is you dashboard" : "Hi user, here is yourdashboard"
  res.status(200).json({message: role, user:req.user})
}

function genToken(user) {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role
    },
    process.env.JWT_KEY,
    { expiresIn: "2h" },
  );
}

const register = async function (req, res) {
  try {
    const { name, email, password , role} = req.body;
    const existed = await User.findOne({ email });

    if (existed) {
      return res.status(400).json({ message: "Sorry user already Registerd" });
    }


    const user = await User.create({name, email, password, role});
    const token = genToken(user)
    res.status(201).json({user, token});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login = async function (req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password)))
      return res.status(404).json({ message: "sorry email or password invalid" });

    const token = genToken(user)
    res.status(200).json({user, token});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { register, login, dashBoard};
