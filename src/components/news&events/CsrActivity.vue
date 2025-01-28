<template>
  <div class="csr">
    <div v-if="isLoading">
      <Loading />
  </div>
    <img src="@/assets/images/csr.jpg" alt="" />
    <h4>Corporate Responsibility</h4>
    <span>Our commitment to corporate responsibility</span>
    <div class="header d-flex justify-content-between align-items-center">
      <div class="d-flex flex-column ">
        <h4>Activities</h4>
        <div class="divider"></div>
      </div>
      <div class="d-flex justify-content-end align-items-center gap-3 year-row mt-3">
        <div style="width: 200px;">
            <v-select
                label="Choose Year"
                :items="['All',...years]"
                variant="underlined"
                class="year-select"
                v-model="selectedYear"
            ></v-select>
        </div>
        <i class="fa-solid fa-magnifying-glass fs-5 text-end"></i>
    </div>
    </div>
    <div class="csr-row row ">
      <div class="pointer col-12 col-md-6 col-lg-4 mb-5" v-for="(csr, index) in filteredDatas" :key="index">
        <div class="">
          <router-link :to="`/csr-detail/${csr.id}`">
            <img class="mb-2 w-100" :src="csr.media[0].original_url" alt="">
            <h6 class="text-dark" style="margin-top: -5px;">{{csr.title}}</h6>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCsr from "@/composables/getCsr";
import { onMounted, ref, watch } from "vue";
import Loading from '../Loading'

export default {
  components: { Loading },

  setup() {
    let selectedYear = ref('All');
    let filteredDatas = ref([]);
    let isLoading = ref(true);

    const {csr, years, error, load} = getCsr();
    
    const loadData = async() => {
      await load();
      filter();
    }

    const filter = () => {
      if(selectedYear.value == 'All') {
        filteredDatas.value = csr.value;
      } else {
        filteredDatas.value = csr.value.filter(data => data.date == selectedYear.value);
      }
    }

    watch(selectedYear, () => {
      filter();
    })

    onMounted(async() => {
      scrollTo(0, 0);
      await loadData();
      if(!error.value) {
          isLoading.value = false;
      }
    });

    return {filteredDatas, selectedYear, years, isLoading}
  },
};
</script>

<style scoped>
.csr img {
  width: 100%;
  height: 400px;
}

.csr h4 {
  margin: 50px 0 10px;
  font-weight: bold;
}

.csr span {
  font-weight: bold;
  color: rgb(147, 149, 151);
  letter-spacing: 1px;
}


.header {
  margin: 30px 0 15px;
}

.header .divider {
  width: 60px;
  height: 3px;
  background-color: var(--sec-color);
}

.csr-row {
  margin-top: 40px;
}

.csr-row a {
  text-decoration: none;
}

@media (max-width: 1600px) {
  .csr img {
    width: 100%;
    height: 230px;
  }

  .csr h4 {
    margin: 30px 0 10px;
    font-size: 22px;
  }

  .csr span {
    letter-spacing: 1px;
    font-size: 14px;
  }

  .header {
    margin: 30px 0 10px;
  }

  .header .divider {
    width: 60px;
    height: 3px;
  }

  .content {
    gap: 10px;
    margin-top: 30px;
  }

  .csr-card {
    padding: 5px;
    width: 30%;
    border-radius: 7px;
    transition: 0.5s;
  }
  .csr-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}


@media (max-width: 999px) {
  .para {
    margin: 30px 20px 20px;
    padding: 30px 40px;
    font-size: 14px;
  }

  .csr-card {
    width: 48%;
  }
}

@media (max-width: 600px) {

  .content {
    justify-content: center;
  }

  .csr-card {
    width: 80%;
  }

  .csr-card img {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 500px) {
  .csr-card {
    width: 95%;
  }
}
</style>
