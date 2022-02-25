const { Op } = require('sequelize');
const logger = require('../lib/logger');

const { UserOrder } = require('../models/index');

const dao = {
  // 등록
  insert(params) {
    return new Promise((resolve, reject) => {
      UserOrder.create(params)
        .then((inserted) => {
        // password는 제외하고 리턴
          const insertedResult = { ...inserted };
          delete insertedResult.dataValues.userPassword;
          resolve(inserted);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  // 리스트 조회
  selectList(params) {
    // where 검색 조건
    const setQuery = {};
    /* if (params.userId) {
      setQuery.where = {
        ...setQuery.where,
        userId: params.userId, // '='검색
      };
    } */
    // order by 정렬 조건
    setQuery.order = [['id', 'DESC']];

    return new Promise((resolve, reject) => {
      UserOrder.findAndCountAll({
        ...setQuery,
      }).then((selectedList) => {
        resolve(selectedList);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 상세정보 조회
  selectInfo(params) {
    return new Promise((resolve, reject) => {
      UserOrder.findByPk(
        params.id,
        {
          attributes: { exclude: ['password'] }, // password 필드 제외
        },
      ).then((selectedInfo) => {
        // logger.info(`(상세정보조회params) ${JSON.stringify(params)}`);
        // logger.info(`(상세정보조회selectedInfo) ${JSON.stringify(selectedInfo)}`);
        resolve(selectedInfo);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 수정
  update(params) {
    return new Promise((resolve, reject) => {
      UserOrder.update(
        params,
        {
          where: { userId: params.userId },
        },
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
      UserOrder.destroy({
        where: { id: params.id },
      }).then((deleted) => {
        resolve({ deletedCount: deleted });
      }).catch((err) => {
        reject(err);
      });
    });
  },
};

module.exports = dao;
