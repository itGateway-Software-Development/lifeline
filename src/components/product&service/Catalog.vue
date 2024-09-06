<template>
  <div class="catalog-section">
    <div class="img">
      <img src="@/assets/images/product_catalog_banner.jpg" class="shadow" alt="" />
    </div>

    <div class="header">
      <div class="content">
        <h2>Product Groups</h2>
        <div class="divider"></div>
      </div>
  
      <div class="search">
        <input type="text" placeholder="search" class="input"  v-model="keyword" @input="search"  />
        <input type="button" value="Search" class="button" />
      </div>
    </div>

    <div class="catalog">
      <div class="row">
        <div
          class="col-lg-3 col-md-4 col-sm-4 col-6 mb-5"
          v-for="(group, i) in filterGroups"
          :key="i"
        >
          <router-link :to="'/groups/'+ group.id">
            <div class="catalog-card d-flex flex-column align-items-center pointer">
              <div class="catalog-img ">
                <img
                  :src="group.photo"
                  alt=""
                />
              </div>
              <div class="name">{{ group.name }}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import getGroups from "@/composables/getGroups";
import axios from "axios";
import api from "@/services/api";
export default {
  setup() {
    const { groups, error, load } = getGroups();
    const keyword = ref('');
    const filterGroups = ref([]);

    const search = async() => {
      let response = await axios.get(api.getGroups+"?keyword="+keyword.value);

      filterGroups.value = response.data.groups;
    }

    onMounted(async() => {
      window.scrollTo(0, 0);

      await load();
      if (!error.value) {
        filterGroups.value = groups.value;
      } else {
        console.error("Error ", error.value);
      }
    });

    return { filterGroups, keyword, search };
  },
};
</script>

<style scoped>
.img {
  width: 100%;
  height: 300px;
}

.img img {
  width: 100%;
  height: 100%;
}

.content {
  margin: 30px 0px;
}

.content h2 {
  color: var(--main-color);
  font-weight: bold;
}

.content .divider {
  width: 90px;
  height: 3px;
  background-color: var(--sec-color);
}
.catalog .catalog-img {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 10px 10px 0 0;
  background: rgb(153, 153, 211);
  border-radius: 100%;
  width: 150px;
  height: 150px;
}

.catalog .catalog-card:hover {
  background: #f2f2f2;
  border-radius: 10px;
}

.catalog .catalog-card img {
  width: 90px;
  height: 90px;
  object-fit: cover;
}

.catalog a {
  text-decoration: none;
  color: #333;
}

.catalog-card .name {
  padding: 10px;
  text-align: center;
  font-weight: bold;
  height: 90px;
  border-radius: 0px 0px 10px 10px;
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
  width: 300px;
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

@media (max-width: 1600px) {
  .img {
    width: 100%;
    height: 230px;
  }

  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    margin: 20px 0px;
  }

  .content h2 {
    font-size: 24px;
  }

  .content .divider {
    width: 70px;
    height: 3px;
  }
  .catalog .catalog-img {
    padding: 10px;
  }

  .catalog .catalog-card img {
    width: 90px;
    height: 90px;
  }

  .catalog-card .name {
    font-size: 12px;
  }
}

@media (max-width: 900px) {
  .search .input {
    width: 200px;
    background: #ebeaea;
    padding:5px 20px;
    flex-grow: 1;
  }
  
  .search .button {
    background: var(--sec-color);
    color: #fff;
    font-weight: bold;
    padding:5px 20px;
  }
}

@media (max-width: 550px) {
  .header {
    flex-direction: column;
  }
}
</style>
