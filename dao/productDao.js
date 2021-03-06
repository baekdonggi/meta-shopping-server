const { Op } = require('sequelize');
const { Product, ProductImageFile } = require('../models/index');

const dao = {
  // 등록
  insert(params) {
    return new Promise((resolve, reject) => {
      Product.create(params).then((inserted) => {
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
    if (params.productNumber) {
      setQuery.where = {
        ...setQuery.where,
        productNumber: params.productNumber, //  =검색 이다
      };
    }
    if (params.categoryCode) {
      setQuery.where = {
        ...setQuery.where,
        categoryCode: { [Op.like]: `%${params.categoryCode}%` }, // like검색
      };
    }

    // order by 정렬 조건
    setQuery.order = [['id', 'DESC']];

    return new Promise((resolve, reject) => {
      Product.findAndCountAll({
        ...setQuery,
        include: [
          {
            model: ProductImageFile,
            attributes: ['filename', 'path'],
          },
          // 듀플리케이티드
        ],
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
      Product.findByPk(params.productNumber).then((selectedInfo) => {
        resolve(selectedInfo);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 수정
  update(params) {
    return new Promise((resolve, reject) => {
      Product.update(
        params,
        {
          where: { productNumber: params.productNumber },
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
      Product.destroy({
        where: { productNumber: params.productNumber },
      }).then((deleted) => {
        resolve({ deletedCount: deleted });
      }).catch((err) => {
        reject(err);
      });
    });
  },
};

module.exports = dao;
