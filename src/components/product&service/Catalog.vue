<template>
  <div class="catalog-section">
    <div class="img">
      <img src="@/assets/images/product_catalog_banner.jpg" class="shadow" alt="" />
    </div>

    <div class="content">
      <h2>Product Groups</h2>
      <div class="divider"></div>
    </div>

    <div class="catalog">
      <div class="row">
        <div
          class="col-lg-3 col-md-4 col-sm-4 col-6 mb-5"
          v-for="(group, i) in groups"
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
export default {
  setup() {
    const { groups, error, load } = getGroups();

    load();

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return { groups };
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
  margin: 30px auto;
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
    margin: 20px auto;
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
</style>
