const jwt = require('jsonwebtoken');
const logger = require('./logger');

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
      userPassword: user.userPassword,
      userName: user.userName,
      userPhone: user.userPhone,
      userEmail: user.userEmail,
      userNickname: user.userNickname,
      userProfile: user.userProfile,
      emailCheck: user.emailCheck,
      userGender: user.userGender,
      userRole: user.userRole,
      userGrade: user.userGrade,
      userAddress1: user.userAddress1,
      userAddress2: user.userAddress2,
      userAddress3: user.userAddress3,
    };

    const token = jwt.sign(payload, secretKey, options);
    logger.debug(`(tokenUtil.tokenUtil.makeToken) ${JSON.stringify(token)}`);
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
