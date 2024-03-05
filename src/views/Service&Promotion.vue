<template>
  <div class="banner-img">
    <img
      v-if="slug == 'service'"
      src="@/assets/images/service-banner.jpg"
      alt=""
    />
    <img
      v-if="slug == 'promotion'"
      src="@/assets/images/service-promotion-banner.jpg"
      alt=""
    />
  </div>
  <div class="service-promotion">
    <div class="row">
      <div class="col-lg-2 col-md-3 col-sm-12 pe-0">
        <div class="menu w-100">
          <router-link
            to="/service-promotion/service"
            :class="{ active: slug == 'service' }"
            >Service</router-link
          >
          <router-link
            to="/service-promotion/promotion"
            :class="{ active: slug == 'promotion' }"
            >Promotion</router-link
          >
        </div>
      </div>
      <div class="col-lg-10 col-md-9 col-sm-12">
        <div class="content">
          <div v-if="slug == 'service'"><Service></Service></div>
          <div v-if="slug == 'promotion'"><Promotion></Promotion></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Promotion from "../components/service&promotion/Promotion";
import Service from "../components/service&promotion/Service";
export default {
  props: ["slug"],
  components: {
    Promotion,
    Service,
  },
};
</script>

<style scoped>
.banner-img {
  width: 100%;
  height: 350px;
  padding: 0 15%;
}

.banner-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.service-promotion {
  padding: 30px 15%;
  margin-top: 20px;
}

.service-promotion .menu {
  display: flex;
  flex-direction: column;
  background-color: #e5ecf1;
}

.service-promotion .menu a {
  text-decoration: none;
  padding: 11px 25px;
  transition: 0.3s ease;
  color: #000;
}

.service-promotion .menu a:hover {
  background-color: #3a82a3;
  color: #fff;
}

.active {
  background-color: #3a82a3;
  color: #fff !important;
}

@media (max-width: 1600px) {
  .banner-img {
    width: 100%;
    height: 230px;
    padding: 0 9%;
  }
  .service-promotion {
    padding: 30px 9%;
  }

  .service-promotion .menu a {
    padding: 9px 25px;
    font-size: 14px;
  }
}

@media (max-width: 1200px) {
  .service-promotion {
    padding: 30px 3%;
  }

  .service-promotion .menu a {
    padding: 9px 25px;
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .service-promotion .menu {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 15px;
    background: none;
  }

  .service-promotion .menu a {
    padding: 9px 25px;
    font-size: 13px;
    text-align: center;
    border-right: 1px solid #3a82a3;
    background-color: #e5ecf1;
  }
}

@media (max-width: 685px) {
  .service-promotion .menu {
    flex-wrap: wrap;
    background: none;
    justify-content: start;
    margin-left: 13px;
  }
  .service-promotion .menu a {
    padding: 5px 25px;
    font-size: 13px;
    text-align: center;
    border: 1px solid #3a82a3;
    background-color: #e5ecf1;
    color: #000;
    margin-bottom: 5px;
  }
}
</style>
