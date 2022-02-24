const { Op } = require('sequelize');
const { Cart } = require('../models/index');

const dao = {
  // 등록
  insert(params) {
    return new Promise((resolve, reject) => {
      Cart.create(params).then((inserted) => {
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
    if (params.cartNumber) {
      setQuery.where = {
        ...setQuery.where,
        cartNumber: { [Op.like]: `%${params.cartNumber}%` }, // like검색
      };
    }

    // order by 정렬 조건
    setQuery.order = [['cartNumber', 'DESC']];

    return new Promise((resolve, reject) => {
      Cart.findAndCountAll({
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
      Cart.findByPk(
        params.cartNumber,
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
      Cart.update(
        params,
        {
          where: { cartNumber: params.cartNumber },
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
      Cart.destroy({
        where: { cartNumber: params.cartNumber },
      }).then((deleted) => {
        resolve({ deletedCount: deleted });
      }).catch((err) => {
        reject(err);
      });
    });
  },
};

module.exports = dao;
