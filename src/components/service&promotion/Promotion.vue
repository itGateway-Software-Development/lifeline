<template>
    <div class="promotion" v-if="latestPromotions.length > 0">
        <div class="row">
            <div
              class="col-lg-4 col-md-6 col-sm-6 col-12 p-0 px-2 hospital-column"
              v-for="(promotion) in latestPromotions"
              :key="promotion.id"
            >
              <div class="promotion-card shadow flex flex-column align-items-center gap-3">
                <div class="promotion-image">
                  <img :src="promotion.main_img" class="promotion-img w-100" alt="" />
                </div>
                <div class="promotion-info p-3">
                  <h3 class="fw-bold fs-5" style="height: 40px;">{{ promotion.title.slice(0, 50)  }} ...</h3>
                  <br>
                  <p style="height: 70px;" v-html="promotion.content.slice(0, 150) + ' ...'"></p>
                  <br>
                  <router-link :to="`/service-promotion/promotion/${promotion.id}`"
                    >Read More</router-link
                  >
                </div>
              </div>
            </div>
          </div>
    </div>
    <h2 v-else class="fw-bold text-center">No Promotions Available !</h2>
</template>

<script>
import getPromotions from '@/composables/getPromotions';
import { onMounted, ref } from 'vue'
    export default {
        setup() {
            const latestPromotions = ref([]);
            const {promotions, error, load} = getPromotions();
            
            onMounted(async () => {
                await load()
                if(promotions.value.length > 0) {
                    latestPromotions.value = promotions.value
                }
                window.scrollTo(0,0)
            })
            return {latestPromotions};
        }
    }
</script>

<style scoped>
.promotion-card a {
    font-size: 13px;
    color: #b88b10;
    font-weight: bold;
    text-decoration: none;
    border-bottom: 3px solid #dbd8d8;
    transition: 0.3s ease;
  }
  
  .promotion-card a:hover {
    border-bottom: 3px solid #b88b10;
  }
</style>
