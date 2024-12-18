const url = "https://admin.lifelinemyanmar.com/api/v1/";
// const url = "http://127.0.0.1:8000/api/v1/";

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
  getActivityPhotos: url+"get-csr-photos",
  getAcademicActivities: url+"academic-activities",
  getPositions: url+"positions",
  getLocations: url+"locations",
  getCareers: url+"career/careers",
  sendCV: url+"career/submit-cv",
  getAnnouncement: url+"announcement",
};

export default api;
