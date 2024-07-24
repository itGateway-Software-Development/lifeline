// const url = "https://admin.lifelinemyanmar.com/api/v1/";
const url = "http://127.0.0.1:8000/api/v1/";

let api = {
  getGroups: url + "groups",
  getGroup: url + "groups/",
  getCategories: url + "categories",
  getProducts: url + "products",
  getProduct: url + "products/",
  getPhotoGallery: url + "photo-gallery",
  getCsr: url + "csr-activities",
  getCsrDetail: url+ "csr-activities/",
  getNews: url+"news-events",
  getNewsDetail: url+"news-events/",
  getServices: url+"services",
  getPromotions: url+"promotions",
};

export default api;
