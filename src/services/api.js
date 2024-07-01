const url = "https://admin.lifelinemyanmar.com/api/v1/";
// const url = "http://127.0.0.1:8001/api/v1/";

let api = {
  getGroups: url + "groups",
  getGroup: url + "groups/",
  getCategories: url + "categories",
  getProducts: url + "products",
  getProduct: url + "products/",
  getPhotoGallery: url + "photo-gallery"
};

export default api;
