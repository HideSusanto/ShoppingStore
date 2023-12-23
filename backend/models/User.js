const mongoose = require('mongoose');
const hash = require('../security/hash');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  }
});


userSchema.pre("save", function (next) {
  const user = this
  if (this.isModified("password") || this.isNew) {
    user.password = hash.hashPassword(user.password);
    next();
  } else {
    return next()
  }
})

module.exports = mongoose.model('User', userSchema);
