const mongoose = require('mongoose');
const hash = require('../security/hash');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  usercoverimg : {
    type: String,
    default: 'https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeE6KjqVXtc_SZ9W7i0_jeoUso2H55p0AlGyjYfnmnQCUUgpC6zkXEmHsOzQt8NNjHqfZAGlVYFxhku7LmXZDw1K&_nc_ohc=dVaPzd0ULbwAX8TrFSy&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfAPIo3JH4V2Z9j5Ck4TffVhFiZSWrGqIT2Yk-54egxCwg&oe=65BA97B8'
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
  },
  role: { 
    type: String, enum: ['user', 'admin'], default: 'user' 
  },
  orders: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Order' }
  ]
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
