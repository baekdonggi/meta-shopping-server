const { Op } = require('sequelize');
const { ProductCategory } = require('../models/index');

const dao = {
  // 등록
  insert(params) {
    return new Promise((resolve, reject) => {
      ProductCategory.create(params).then((inserted) => {
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
    if (params.categoryCode) {
      setQuery.where = {
        ...setQuery.where,
        categoryCode: { [Op.like]: `%${params.categoryCode}%` }, // like검색
      };
    }

    // order by 정렬 조건
    setQuery.order = [['categoryCode', 'DESC']];

    return new Promise((resolve, reject) => {
      ProductCategory.findAndCountAll({
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
      ProductCategory.findByPk(
        params.categoryCode,
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
      ProductCategory.update(
        params,
        {
          where: { categoryCode: params.categoryCode },
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
      ProductCategory.destroy({
        where: { categoryCode: params.categoryCode },
      }).then((deleted) => {
        resolve({ deletedCount: deleted });
      }).catch((err) => {
        reject(err);
      });
    });
  },
};

module.exports = dao;
