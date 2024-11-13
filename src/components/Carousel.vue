  <template>
    <div class="carousel-section position-relative" @mouseover="handleHover('hover')" @mouseleave="handleHover('leave')">
      <div class="banner-image">
        <img :src="currentImage" alt="" :class="{'position-bottom' : isPositionBottom, 'company-img' : currentImage == '/img/main_banner.0814bf4a.png'}">
        <div class="arrow">
          <div class="d-flex justify-content-between">
            <div class="prev" @click="changeImage('prev')">
              <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div class="next" @click="changeImage('next')">
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <!-- sub image slider for product  -->
      <div class="product-slider">
        <div class="swiper product_swiper opacity-0" :class="{'opacity-100': showProductSlider}">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="i in 13" :key="i">
              <div class="content">
                <img
                  :src="require(`@/assets/images/carousel/products/${i}.png`)"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="swiper-pagination" id="swiper-paginate"></div>
        </div>
        <div class="d-flex justify-content-center mt-5 opacity-0" :class="{'opacity-100': showProductSlider}">
          <router-link to="/products">See All Products</router-link>
        </div>
      </div>

      <div class="csr-photos" v-if="showCsrPic">
        <div class="csr-photo-group d-flex flex-column-reverse gap-2">
          <img @click="handleCsrPhotoClick(i)" class="active" v-for="i in 7" :key="i" :src="require(`@/assets/images/carousel/csr/${i}.jpg`)" alt="">
        </div>
      </div>

      <div class="csr-photos" v-if="showAnniversaryPic">
        <div class="csr-photo-group d-flex flex-column-reverse gap-2">
          <img @click="handleAnniversayPhotoClick(i)" class="active" v-for="i in 5" :key="i" :src="require(`@/assets/images/carousel/20_anniversary/${i}.jpg`)" alt="">
        </div>
      </div>
    </div>
  </template>

  <script>
    import { onMounted, ref, watch } from 'vue';
    export default {
      setup() {
        const banners = [
          require('@/assets/images/carousel/main_banner.png'),
          require('@/assets/images/carousel/1.jpg'),
          require('@/assets/images/carousel/2.jpg'),
          require('@/assets/images/carousel/csr/1.jpg'),
          require('@/assets/images/carousel/4.jpg'),
          require('@/assets/images/carousel/5.jpg'),
        ];

        const csr = [
          require('@/assets/images/carousel/csr/1.jpg'),
          require('@/assets/images/carousel/csr/2.jpg'),
          require('@/assets/images/carousel/csr/3.jpg'),
          require('@/assets/images/carousel/csr/4.jpg'),
          require('@/assets/images/carousel/csr/5.jpg'),
          require('@/assets/images/carousel/csr/6.jpg'),
          require('@/assets/images/carousel/csr/7.jpg'),
        ];

        const anniversary = [
          require('@/assets/images/carousel/20_anniversary/1.jpg'),
          require('@/assets/images/carousel/20_anniversary/2.jpg'),
          require('@/assets/images/carousel/20_anniversary/3.jpg'),
          require('@/assets/images/carousel/20_anniversary/4.jpg'),
          require('@/assets/images/carousel/20_anniversary/5.jpg'),
        ]

        const currentImageIndex = ref(0);
        const currentImage = ref(banners[currentImageIndex.value]);
        let duration = 10000;
        let intervalId;
        const product_swiper = ref(null);
        const showProductSlider = ref(false);
        const showCsrPic = ref(false);
        const showAnniversaryPic = ref(false);

        const isPositionBottom = ref(false);

        const swipeImage = () => {
          if(currentImageIndex.value < banners.length-1) {
            currentImageIndex.value++;
          } else {
            currentImageIndex.value = 0;
          }
          
          currentImage.value = banners[currentImageIndex.value];
      
          if(currentImage.value.substr(0,6) == '/img/5') {
            showProductSlider.value = true;
          } else {
            showProductSlider.value = false;
          }
          if(currentImage.value.substr(0,10) == '/img/1.c61') {
            showCsrPic.value = true;
          } else {
            showCsrPic.value = false;
          }

          if(currentImage.value.substr(0,10) == '/img/4.9a6') {
            showAnniversaryPic.value = true;
          } else {
            showAnniversaryPic.value = false;
          }

        }

        const changeImage = (status) => {

          if(status == 'prev') {
            if(currentImageIndex.value == 0) {
              currentImageIndex.value = banners.length - 1;
              currentImage.value = banners[banners.length -1];
            } else {
              currentImage.value = banners[--currentImageIndex.value]
            }
          } else {
            if(currentImageIndex.value == banners.length -1) {
              currentImage.value = banners[0];
              currentImageIndex.value = 0;
            } else {
              currentImage.value = banners[++currentImageIndex.value];
            }
          }

          if(currentImage.value.substr(0,6) == '/img/5') {
            showProductSlider.value = true;
          } else {
            showProductSlider.value = false;
          }

          if(currentImage.value.substr(0,10) == '/img/1.1ec') {
            showCsrPic.value = true;
          } else {
            showCsrPic.value = false;
          }

          if(currentImage.value.substr(0,10) == '/img/4.9a6') {
            showAnniversaryPic.value = true;
          } else {
            showAnniversaryPic.value = false;
          }

          if(currentImage.value.substr(0,10) != '/img/7.050' ) {
            isPositionBottom.value = false
          } 

          clearInterval(intervalId);
          intervalId = setInterval(swipeImage, duration);
        }

        const handleHover = (status) => {
          if (status == 'hover') {
            clearInterval(intervalId); 
          } else {
            intervalId = setInterval(swipeImage, duration);
          }
        };

        const handleAnniversayPhotoClick = (index) => {
          currentImage.value = anniversary[--index];
        }

        const handleCsrPhotoClick = (index) => {
          currentImage.value = csr[--index];
          console.log(index);
          if(currentImage.value.substr(0,10) == '/img/7.050' && index == 6) {
            console.log('yes');
            isPositionBottom.value = true
          } else {
            isPositionBottom.value = false
          }
          
        }

        watch(currentImage, () => {
          if(currentImage.value.substr(0,6) == '/img/5') {
            product_swiper.value = new Swiper(".product_swiper", {
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
                350: {
                  slidesPerView: 2,
                },
                500: {
                  slidesPerView: 3,
                },
                1000: {
                  slidesPerView: 4,
                },

                1520: {
                  slidesPerView: 5,
                  spaceBetween: 2,
                },
              },
            });
          } else {
            showProductSlider.value = false;
          }
        })

        onMounted(() => {
          intervalId = setInterval(swipeImage, duration);
        })

        return {currentImage, currentImageIndex, changeImage, handleHover, product_swiper, showProductSlider, handleCsrPhotoClick, showCsrPic, showAnniversaryPic, handleAnniversayPhotoClick, isPositionBottom}
      }
    };
  </script>

  <style scoped>
  .position-bottom {
    object-position: bottom;
  }

  .carousel-section {
    background-color: #e9e5e5;
    position: relative;
    overflow: hidden;
  }

  .carousel-section .banner-image {
    width: 100%;
    height: 700px;
  }

  .carousel-section .banner-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .carousel-section .banner-image .arrow {
    padding: 50px;
    position: absolute;
    width: 100%;
    top: 40%;
  }

  .carousel-section .banner-image .arrow .prev, .carousel-section .banner-image .arrow .next {
    background: rgb(241, 226, 226);
    padding: 20px;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 99;
  }

  img {
    object-fit: contain;
  }

  .carousel-section .product-slider {
    position: absolute;
    width: 100%;
    top: 60%;
    padding: 0px 15%;
  }

  .carousel-section .product-slider .product_swiper {
    margin-top: -100px;
  }

  .carousel-section .product-slider img {
    width: 160px;
    height: 250px;
    border-radius: 7px;
  }

  .carousel-section .product-slider a {
      text-decoration: none;
      background: var(--sec-color);
      color: #fff;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 12px;
  }

  .carousel-section .csr-photos {
    position: absolute;
    width: 100%;
    top: 5%;
    left: 90%;
    z-index: 0;
  }

  .carousel-section .csr-photos img {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    object-fit: cover;
    cursor:pointer;
  }

  .carousel-section .csr-photos img.active {
    border: 2px solid var(--main-color);
  }

  .head-office {
    display: flex !important;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    height: 100%;
    background-color: #e2e2e2;
    border-bottom: 1px solid rgb(224, 224, 224);  
  }

  .head-office .content {
    margin: 0 0 120px 30px;
  }

  .head-office .content h2 {
    font-weight: bold;
    color: var(--sec-color);
    margin-bottom: 50px;
    font-size: 48px;
  }

  .head-office .content button {
    background-color: #0c74eb;
    color: #fff;
    border-radius: 10px;
    height: 40px;
    margin-left: 15px;
  }

  .head-office .content button i {
    color: greenyellow;
  }

  .head-office .img {
    width: 1000px;
    height: 450px;
    border-radius: 50px !important;
    overflow: hidden;
    margin-bottom: 60px;
  }

  .head-office .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  @media (max-width: 1600px) {
    .carousel {
      width: 82%;
      height: 450px !important;
    }

    .head-office {
      gap: 10px;
      height: 100%;
    }

    .head-office .content {
      margin: 0 0 120px 30px;
    }

    .head-office .content h2 {
      margin-bottom: 50px;
      font-size: 40px;
    }

    .head-office .content button {
      border-radius: 10px;
      height: 40px;
    }

    .head-office .img {
      width: 800px;
      height: 400px;
    }

    .carousel-section .csr-photos {
      position: absolute;
      width: 100%;
      top: 5%;
      left: 88%;
    }

  }

  @media (max-width: 1420px) {

    .carousel-section .banner-image {
      height: 500px;
    }

    carousel-section .csr-photos {
      position: absolute;
      width: 100%;
      top: 3%;
      left: 82%;
    }
    
    .carousel-section .csr-photos img {
      width: 50px;
      height: 50px;
    }
    .carousel-section .banner-image .company-img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
    
  }

  @media (max-width: 1200px) {
    .carousel {
      width: 94%;
      height: 450px !important;
    }

    .head-office .img {
      width: 600px;
      height: 300px;
    }
  }

  @media (max-width: 1100px) {
    .head-office {
      gap: 10px;
      height: 100%;
    }

    .head-office .content {
      margin: 0 0 120px 30px;
    }

    .head-office .content h2 {
      margin-bottom: 50px;
      font-size: 35px;
    }

    .head-office .img {
      width: 500px;
      height: 300px;
    }

    .carousel-section .csr-photos {
      position: absolute;
      width: 100%;
      top: 5%;
      left: 81%;
    }
  }

  @media (max-width: 920px) {

    .carousel-section .banner-image {
      height: 400px;
    }

    .carousel-section .product-slider {
      position: absolute;
      width: 100%;
      top: 50%;
      padding: 0px 10%;
    }

    .carousel-section .product-slider .product_swiper {
      margin-top: -20px;
    }
    
    .carousel-section .product-slider img {
      width: 150px;
      height: 170px;
      object-fit: contain;
      border-radius: 7px;
    }

    .carousel-section .csr-photos {
      position: absolute;
      width: 100%;
      top: 3%;
      left: 82%;
    }
    
    .carousel-section .csr-photos img {
      width: 45px;
      height: 45px;
    }

  }

  @media (max-width: 840px) {
    .head-office {
      padding: 0 15px;
    }

    .head-office .content {
      margin: 0 0 100px 15px;
    }

    .head-office .content h2 {
      font-size: 30px;
    }

    .head-office .img {
      width: 450px;
      height: 300px;
    }

    .head-office .content button {
      margin-left: 10px;
    }

    .carousel-section .banner-image .arrow {
      padding: 20px;
      top: 40%;
    }
    
    .carousel-section .banner-image .arrow .prev, .carousel-section .banner-image .arrow .next {
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: 700px) {
    .head-office .content {
      margin: 0 0 100px 3px;
    }
    .head-office .content h2 {
      font-size: 20px;
    }

    .head-office .content button {
      margin-left: 0px;
      font-size: 10px;
      height: 30px;
    }

    .head-office .img {
      width: 450px;
      height: 300px;
    }

    .carousel-section .product-slider {
      position: absolute;
      width: 100%;
      top: 70%;
      padding: 0px 10%;
    }

    .carousel-section .product-slider .product_swiper {
      margin-top: -70px;
    }
    
    .carousel-section .product-slider img {
      width: 140px;
      height: 120px;
      object-fit: contain;
      border-radius: 7px;
    }
  }

  @media (max-width: 550px) {
    .carousel {
      width: 100%;
      height: 400px !important;
    }
    .head-office .content {
      margin: 0 0 100px 0px;
    }
    .head-office .content h2 {
      font-size: 16px;
      margin-bottom: 20px;
    }

    .head-office .content button {
      margin-left: 0px;
      font-size: 8px;
      height: auto;
      padding: 5px 7px;
    }

    .head-office .img {
      width: 450px;
      height: 300px;
    }

    .carousel-section .csr-photos {
      position: absolute;
      width: 100%;
      top: 3%;
      left: 73%;
    }
    

  }

  @media(max-width: 500px) {
    .carousel-section .banner-image .company-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 80%;
    }
  }

  @media (max-width: 480px) {
    .carousel {
      width: 100%;
      height: 350px !important;
    }
    .head-office {
      flex-direction: column;
      gap: 5px;
    }

    .head-office .content {
      margin: 10px 0 20px 0px;
    }

    .head-office .content h2 {
      font-size: 20px;
      margin-bottom: 5px;
    }

    .head-office .content button {
      margin-left: 5px;
      font-size: 10px;
    }

    .head-office .img {
      width: 90%;
      height: 220px;
    }
  }
  </style>
