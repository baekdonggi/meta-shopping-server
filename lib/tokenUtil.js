const jwt = require('jsonwebtoken');

const secretKey = '2B4D6251655468566D597133743677397A24432646294A404E635266556A586E';
const options = {
  expiresIn: '2h',
};

const tokenUtil = {
  // 토큰 생성
  makeToken(user) {
    const payload = {
      id: user.id,
      userId: user.userId,
      userName: user.userName,
      userRole: user.userRole,
    };

    const token = jwt.sign(payload, secretKey, options);

    return token;
  },
  // 토큰 검증
  verifyToken(token) {
    try {
      const decoded = jwt.verify(token, secretKey);

      return decoded;
    } catch (err) {
      return null;
    }
  },
};

module.exports = tokenUtil;
