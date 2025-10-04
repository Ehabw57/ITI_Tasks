const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "sorry user name must be 3 chars long"],
    maxLength: [15, "chars max length must be lessthan 15 chars long"]
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: [6, "password must be at least 6 long"]
  }
},
  {timestamps: true, versionKey: false})

UserSchema.pre('save', async function () {
  try {
    salt = await bcrypt.genSalt(12)
    this.password = bcrypt.hash(this.password, salt)
  } catch(err) {
    console.log(err)
  }
})

UserSchema.methods.comparePassword = function (pass) {
  return bcrypt.compare(pass, this.password)
}

module.exports = mongoose.model("users", UserSchema)
