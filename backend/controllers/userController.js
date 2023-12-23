const User = require('../models/User'); // Import mô hình người dùng
const hash = require('../security/hash');
const jwt = require('jsonwebtoken');  
const secretKey = process.env.JWT_SECRET_KEY;
const userController = {
    // ADD USER
    addUser: async (req, res) => {
        const user = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        });
      
        try {
          await user.save();
          //const token  = jwt.sign({ id: user._id }, secretKey);
          res.status(201).json(user);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
    },
    // CHECK USER
    checkUser: async (req, res) => {
        const { email, password } = req.body;
      
        try {
          const user = await User.findOne({ email });
          if (!user) {
            return res.status(404 ).json({ message: 'User not found' });
          }
          const isValidPassword = user.password === hash.hashPassword(password);
          if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid password' });
          } else {
            // Đăng nhập thành công, tạo mã thông báo (JWT) và gửi cho người dùng
          const accessToken = jwt.sign({ userId: user._id, userName: user.username }, secretKey, {
            expiresIn : '24h'
          }); // Thay 'your-secret-key' bằng khóa bí mật thực tế

          res.status(200).json({accessToken,
          UserInfo: user
          });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      },
    // GET ALL USERS
    getAllUsers: async (req, res) => {
        try {
          const users = await User.find();
          res.status(200).json(users);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
    },
    
}

module.exports = userController;