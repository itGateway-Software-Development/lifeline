<template>
  <div class="carousel-section">
    <v-carousel show-arrows="hover" color="white" class="carousel">
      <v-carousel-item>
        <div class="head-office">
          <div class="content">
            <h2>STEP FORWARD</h2>
            <v-btn append-icon="mdi-arrow-right-bold-circle-outline">
              Check Our Profile
              <template v-slot:append>
                <v-icon></v-icon>
              </template>
            </v-btn>
          </div>
          <div class="img">
            <img src="@/assets/images/head-office1.jpg" alt="" />
          </div>
        </div>
      </v-carousel-item>

      <v-carousel-item
        :src="require('@/assets/images/carousel6.jpg')"
        cover
      ></v-carousel-item>

      <v-carousel-item
        :src="require('@/assets/images/carousel5.jpg')"
        cover
      ></v-carousel-item>

      <v-carousel-item
        :src="require('@/assets/images/carousel7.jpg')"
        cover
      ></v-carousel-item>

      <v-carousel-item
        :src="require('@/assets/images/carousel4.jpg')"
        cover
      ></v-carousel-item>
      <v-carousel-item
        :src="require('@/assets/images/banner.png')"
        cover
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel-section {
  background-color: #e9e5e5;
}
.carousel {
  width: 70%;
  margin: 0 auto;
}
img {
  object-fit: contain;
}

.head-office {
  display: flex !important;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
  height: 100%;
  background-color: #fff;
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
  width: 650px;
  height: 350px;
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
    width: 600px;
    height: 300px;
  }
}

@media (max-width: 1200px) {
  .carousel {
    width: 94%;
    height: 450px !important;
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
}

@media (max-width: 920px) {
  .carousel {
    width: 100%;
    height: 450px !important;
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
