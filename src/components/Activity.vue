<template>
  <div class="our-business">
    <div class="bg-info p-3 fs-4 fw-bold mx-1">Our Activities</div>
      <div class="d-flex flex-row ">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="i in 6" :key="i">
              <div class="content">
                <img
                  :src="require(`@/assets/images/csr/csr${i}.png`)"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="swiper-pagination" id="swiper-paginate"></div>
        </div>
      </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const tab = ref("option-1");
    const swiper = ref(null);

    onMounted(() => {
      swiper.value = new Swiper(".swiper", {
        speed: 800,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
        },
        breakpoints: {
          370: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          666: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          990: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
      });
    });

    return { tab };
  },
};
</script>

<style scoped>
.our-business {
  padding: 40px 15%;
}
.swiper .swiper-wrapper {
  height: 370px;
  margin-bottom: 15px;
}

.swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper .swiper-wrapper img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin: 20px auto;
}

.swiper .swiper-slide a {
  text-decoration: none;
  background: #039be5;
  color: #fff;
  padding: 5px 20px;
  border-radius: 7px;
  position: absolute;
  bottom: 15px;
}

.tab-content-container h2 {
  font-weight: bolder;
}

@media (max-width: 1600px) {
  .our-business {
    padding: 40px 9%;
  }
}

@media (max-width: 1200px) {
  .our-business {
    padding: 40px 3%;
  }
}


@media (max-width: 666px) {
  .our-business .tab-title {
    display: none;
  }
}

@media (max-width: 510px) {
  .swiper .swiper-slide .content {
    padding: 0px 10px;
  }
}
</style>
