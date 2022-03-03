const { Op } = require('sequelize');
const { User } = require('../models/index');
const logger = require('../lib/logger');

const dao = {
  // 등록
  insert(params) {
    return new Promise((resolve, reject) => {
      User.create(params).then((inserted) => {
        // password는 제외하고 리턴
        const insertedResult = { ...inserted };
        delete insertedResult.dataValues.userPassword;
        resolve(inserted);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 리스트 조회
  selectList(params) {
    // where 검색 조건
    const setQuery = {};
    // if (params.userId) {
    //   setQuery.where = {
    //     ...setQuery.where,
    //     userId: { [Op.like]: `%${params.userId}%` }, // like 검색
    //   };
    // }
    // if (params.userid) {
    //   setQuery.where = {
    //     ...setQuery.where,
    //     userId: params.userId, // '='검색
    //   };
    // }

    // order by 정렬 조건
    setQuery.order = [['id', 'DESC']];

    return new Promise((resolve, reject) => {
      /* User.findAndCountAll({
        ...setQuery,
        attributes: { exclude: ['password'] }, // password 필드 제외
      }) */
      User.findAll({ attributes: ['userId'] })
        .then((selectedList) => {
          resolve(selectedList);
        }).catch((err) => {
          reject(err);
        });
    });
  },
  // 상세정보 조회
  selectInfo(params) {
    return new Promise((resolve, reject) => {
      User.findByPk(
        params.id,
        {
          attributes: { exclude: ['password'] }, // password 필드 제외
        },
      ).then((selectedInfo) => {
        resolve(selectedInfo);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 수정
  update(params) {
    return new Promise((resolve, reject) => {
      User.update(
        params,
        {
          where: { id: params.id },
        },
        logger.info(`(userService.edit아이디가없다?) ${JSON.stringify(params.id)}`),
      ).then(([updated]) => {
        resolve({ updatedCount: updated });
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 삭제
  delete(params) {
    return new Promise((resolve, reject) => {
      User.destroy({
        where: { id: params.id },
      }).then((deleted) => {
        resolve({ deletedCount: deleted });
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 로그인을 위한 사용자 조회
  selectUser(params) {
    return new Promise((resolve, reject) => {
      User.findOne({
        attributes: ['id', 'userId', 'userPassword', 'userName', 'userPhone',
          'userPhone', 'userEmail', 'userNickname', 'userProfile', 'emailCheck',
          'userGender', 'userRole', 'userGrade', 'userAddress1', 'userAddress2', 'userAddress3'],
        where: { userId: params.userId },
      }).then((selectedOne) => {
        resolve(selectedOne);
      }).catch((err) => {
        reject(err);
      });
    });
  },
};

module.exports = dao;
