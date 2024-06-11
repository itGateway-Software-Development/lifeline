<template>
    <div class="banner-img">
      <img src="@/assets/images/products-banner.jpg" alt="" />
    </div>
    <div class="products">
      <div v-if="isLoading">
        <Loading />
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-12 col-sm-12 pe-0">
          <div class="menu w-100" style="position: sticky; top: 50px;">
            <router-link
              to="/product-service/catalog"
              :class="{ active: slug == 'catalog' }"
              >Products Groups</router-link
            >
            <router-link
              to="#"
              :class="{ active: slug == 'all' }"
              @click="handleCategory('all')"
              >All Products
            </router-link>
            <a
              v-for="(category, i) in categories"
              :key="i"
              :class="{ active: slug == category.name }"
              @click="handleCategory(category.id)"
              class="pointer"
              >{{ category.name }}</a
            >
          </div>
        </div>
        <div class="col-lg-9 col-md-12 col-sm-12">
          <div class="header">
            <div class="slug">
              {{ group.name }}
            </div>
  
            <!-- <div class="search">
              <input type="text" placeholder="search" class="input" />
              <input type="button" value="Search" class="button" />
            </div> -->
          </div>
          <div class="content">
            <div class="row" v-if="filteredProducts.length > 0">
              <div
                class="col-lg-4 col-md-6 col-sm-12 mb-3"
                v-for="(product, i) in filteredProducts"
                :key="i"
              >
                <div class="product-card">
                  <img :src="product.media.length > 0 ? product.media[0].original_url : ''" alt="" />
                  <div class="divider"></div>
                  <div class="ingredient">
                    <span
                      class="rounded-pill"
                      v-for="(ingre, i) in product.ingredients"
                      :key="i"
                      >{{ ingre }}</span
                    >
                  </div>
                  <h2>{{ product.name }}</h2>
                  <div class="btn">
                    <button>Detail</button>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="no-product">No Products</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Loading from "../components/Loading";
  import { onMounted, onUpdated, ref, watch } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import getGroup from '@/composables/getGroup';
import getCategory from '@/composables/getCategory';
  
  export default {
    components: { Loading },
    props: ['id'],
    setup(props) {
      const router = useRouter();
      const route = useRoute();
      const filteredProducts = ref([]);
      const currentRoute = ref("");
      let isLoading = ref(true);
      const slug = ref('all');
  
      router.afterEach((to) => {
        currentRoute.value = to.path;
      });
  
      let { group, categories, products, error, load } = getGroup(props.id);
  
      const handleCategory = (id) => {
        if (id == "all") {
        filteredProducts.value = products.value;
        window.scrollTo(0, 50);
        slug.value = "all";
      } else {
        filteredProducts.value = products.value.filter(product => product.category_id == id);
        let category = categories.value.find(category => category.id == id);
        window.scrollTo(0, 50);
        slug.value = category.name;
      }
      };
  
      onMounted(async () => {
        window.scrollTo(0, 0);
        await load();
        if (!error.value) {
          isLoading.value = false;
          filteredProducts.value = products.value;
        } else {
          console.error("Error ", error.value);
        }
      });
  
      return {
        categories,
        currentRoute,
        filteredProducts,
        handleCategory,
        isLoading,
        group,
        slug
      };
    },
  };
  </script>
  
  <style scoped>
  .products #product-select {
    display: none;
  }
  .banner-img {
    width: 100%;
    height: 300px;
    padding: 0px 15%;
  }
  
  .banner-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .products {
    padding: 20px 15% 30px;
  }
  
  .products .menu {
    display: flex;
    flex-direction: column;
    background-color: #e5ecf1;
  }
  
  .products .menu a {
    text-decoration: none;
    padding: 11px 25px;
    transition: 0.3s ease;
    color: #000;
  }
  
  .products .menu a:hover {
    background-color: #3a82a3;
    color: #fff;
  }
  
  .active {
    background-color: #3a82a3;
    color: #fff !important;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  
  .header .slug {
    background: transparent;
    border: 2px solid var(--main-color);
    padding: 10px 30px;
    border-radius: 5px;
    font-size: 10px;
    font-weight: bold;
  }
  .search .input {
    width: 500px;
    background: #ebeaea;
    padding: 10px 20px;
    flex-grow: 1;
  }
  
  .search .button {
    background: var(--sec-color);
    color: #fff;
    font-weight: bold;
    padding: 10px 20px;
  }
  
  .search input:focus {
    outline: none;
  }
  
  .product-card {
    background-color: #eee;
    border-radius: 5px;
    padding: 0 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .product-card img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    margin: 20px auto;
  }
  
  .product-card .divider {
    width: 100%;
    height: 1px;
    background: var(--main-color);
    margin: -10px 0 15px;
  }
  
  .ingredient {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .ingredient span {
    background: var(--sec-color);
    color: #fff;
    padding: 0px 15px;
    font-size: 12px;
  }
  
  .product-card h2 {
    margin: 10px auto 0px;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }
  
  .product-card .btn {
    display: flex;
    justify-content: center;
  }
  .product-card button {
    border: 2px solid var(--main-color);
    padding: 3px 15px;
    border-radius: 5px;
  }
  
  .no-product {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    margin-top: 30px;
  }
  
  @media (max-width: 1600px) {
    .banner-img {
      height: 230px;
      padding: 0px 9%;
    }
  
    .products {
      padding: 20px 9% 30px;
    }
  
    .products .menu a {
      padding: 8px 20px;
      font-size: 14px;
    }
  
    .header {
      margin-bottom: 20px;
    }
  
    .header .slug {
      padding: 8px 20px;
      font-size: 10px;
    }
  
    .search .input {
      width: 450px;
      padding: 8px 20px;
    }
  
    .search .button {
      padding: 8px 20px;
    }
    .product-card {
      padding: 0 0 10px;
    }
  
    .product-card img {
      width: 130px;
      height: 150px;
    }
  
    .product-card .divider {
      width: 100%;
      height: 1px;
      margin: -10px 0 15px;
    }
  
    .ingredient span {
      padding: 0px 15px;
      font-size: 11px;
    }
  
    .product-card h2 {
      margin: 10px auto;
      font-size: 18px;
    }
  
    .product-card button {
      padding: 3px 15px;
      border-radius: 5px;
      font-size: 13px;
    }
  
    .no-product {
      font-size: 30px;
    }
  }
  
  @media (max-width: 1200px) {
    .banner-img {
      padding: 0px 3%;
    }
  
    .products {
      padding: 20px 3% 30px;
    }
  }
  
  @media (max-width: 993px) {
    .products .menu {
      display: none;
    }
  
    .products .slug {
      display: none;
    }
    .products #product-select {
      display: inline-block;
      width: 250px;
    }
  
    .search {
      width: 100%;
      display: flex;
    }
    .search .input {
      padding: 8px 20px;
    }
  }
  
  @media (max-width: 845px) {
    .banner-img {
      padding: 0px 1%;
    }
  
    .products {
      padding: 20px 1% 30px;
    }
  
    .products #product-select {
      display: inline-block;
      width: 200px;
    }
  }
  
  @media (max-width: 770px) {
    .header {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: start;
      gap: 10px;
      margin: 20px 0;
      padding: 0 20px;
    }
    .products #product-select {
      display: block;
      width: auto;
    }
  
    .content {
      padding: 0 20px;
    }
  }
  
  @media (max-width: 600px) {
    .search .input {
      padding: 8px 20px;
    }
  
    .search .button {
      padding: 8px 10px;
    }
  }
  </style>
  