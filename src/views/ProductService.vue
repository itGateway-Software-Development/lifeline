<template>
  <div class="product-service">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-12 p-0">
        <div class="menu w-100">
          <router-link
            to="/product-service/catalog"
            :class="{ active: slug == 'catalog' }"
            >Products Catalog</router-link
          >
          <router-link to="/products" :class="{ active: slug == 'ceo-message' }"
            >Products</router-link
          >
          <router-link
            to="/product-service/promotion"
            :class="{ active: slug == 'all' }"
            >Promotions</router-link
          >
        </div>
      </div>
      <div class="col-lg-9 col-md-9 col-sm-12">
        <div class="content">
          <Catalog></Catalog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Catalog from "../components/product&service/Catalog";
export default {
  props: ["slug"],
  components: { Catalog },
};
</script>

<style scoped>
.product-service {
  padding: 30px 15%;
}

.product-service .menu {
  display: flex;
  flex-direction: column;
  background-color: #e5ecf1;
}

.product-service .menu a {
  text-decoration: none;
  padding: 11px 25px;
  transition: 0.3s ease;
  color: #000;
}

.product-service .menu a:hover {
  background-color: #3a82a3;
  color: #fff;
}

.active {
  background-color: #3a82a3;
  color: #fff !important;
}

@media (max-width: 1600px) {
  .product-service {
    padding: 30px 9%;
  }

  .product-service .menu a {
    padding: 9px 25px;
    font-size: 14px;
  }
}

@media (max-width: 1200px) {
  .product-service {
    padding: 30px 3%;
  }

  .product-service .menu a {
    padding: 9px 25px;
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .product-service .menu {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 15px;
    background: none;
  }

  .product-service .menu a {
    padding: 9px 25px;
    font-size: 13px;
    text-align: center;
    border-right: 1px solid #3a82a3;
    background-color: #e5ecf1;
  }
}

@media (max-width: 685px) {
  .product-service .menu {
    flex-wrap: wrap;
    background: none;
    justify-content: start;
    margin-left: 13px;
  }
  .product-service .menu a {
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
