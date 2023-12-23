// middleware/verifyToken.js

const jwt = require('jsonwebtoken');

module.exports = function verifyToken(req, res, next) {
  // Lấy JWT từ tiêu đề yêu cầu
  const authHeader =  req.header('Authorization');

  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Xác minh JWT
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Lưu thông tin xác minh từ JWT vào đối tượng yêu cầu
    req.userId = decoded.userId;

    // Tiếp tục xử lý yêu cầu
    next();
  });
};
