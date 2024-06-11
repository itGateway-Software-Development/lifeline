const url = "https://admin.lifelinemyanmar.com/api/v1/";
// const url = "http://127.0.0.1:8001/api/v1/";

let api = {
  getGroups: url + "groups",
  getGroup: url + "groups/",
  getCategories: url + "categories",
  getProducts: url + "products",
};

export default api;
