<template>
  <div class="vision-mission">
    <div>
      <div class="heading-container">
        <div class="line">
          <div data-aos="fade-right" class="first-line"></div>
          <div data-aos="fade-right" class="second-line"></div>
        </div>
        <div class="unity-image">
          <div class="bg"></div>
          <img data-aos="fade-left" src="@/assets/images/unity.webp" alt="" />
        </div>
      </div>
      <div class="header">
        <h2>Our Vision And Mission</h2>
      </div>
    </div>
    <div class="content">
      <h2 data-aos="flip-up">Vision and Missions</h2>
      <div data-aos="flip-up" class="divider"></div>
    </div>

    <div class="vision" data-aos="fade-right">
      <img src="@/assets/images/vision.jpg" alt="" />
      <div class="vision-content">
        <h2>Vision</h2>
        <p>To be the best Healthcare Service Provider in Myanmar</p>
      </div>
    </div>

    <div class="mission" data-aos="fade-left">
      <img src="@/assets/images/mission.png" alt="" />
      <div class="vision-content">
        <h2>Mission</h2>
        <p>
          To Provide Quality Products with Reasonable Price & Reliable Service
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style scoped>
.heading-container {
  position: relative;
}
.header {
  width: 100%;
  height: 250px;
  background-image: url("@/assets/images/vision-mission.jpg");
  background-size: cover;
  z-index: 0;
  display: flex;
  align-items: center;
}

.header h2 {
  color: #fff !important;
  font-weight: bold;
  margin-left: 30px;
}

.unity-image {
  width: 250px;
  height: 200px;
  position: absolute;
  right: 5%;
  margin-top: 200px;
  z-index: 2;
}

.unity-image .bg {
  width: 120px;
  height: 100px;
  background: var(--sec-color);
}
.unity-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: -75px;
  margin-left: 25px;
}

.heading-container .line {
  position: absolute;
  top: 155%;
  left: 55%;
  z-index: 9999;
  margin-top: 320px;
}

.heading-container .first-line,
.second-line {
  width: 250px;
  height: 2px;
  background: var(--sec-color);
}

.second-line {
  margin: 30px 0 0 -30px;
}

.content {
  margin-top: 170px;
}

.content h2 {
  color: var(--main-color);
  font-weight: bold;
  font-size: 26px;
}

.content .divider {
  width: 70px;
  height: 3px;
  background-color: var(--sec-color);
}

.vision,
.mission {
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 30px 0 40px;
}

.mission {
  margin: 40px 0 20px;
}

.vision img,
.mission img {
  width: 90px;
  height: 90px;
  border-radius: 100%;
  object-fit: cover;
}

.vision .vision-content h2,
.mission h2 {
  color: #333;
}

@media (max-width: 1600px) {
  .header {
    width: 100%;
    height: 230px;
  }

  .header h2 {
    margin-left: 30px;
    margin-top: 20px;
  }

  .unity-image {
    width: 200px;
    height: 170px;
    right: 5%;
    margin-top: 170px;
  }

  .unity-image .bg {
    width: 100px;
    height: 90px;
  }
  .unity-image img {
    margin-top: -75px;
    margin-left: 17px;
  }

  .heading-container .line {
    position: absolute;
    left: 55%;
    z-index: 9999;
    margin-top: 280px;
  }

  .heading-container .first-line,
  .second-line {
    width: 200px;
    height: 2px;
    background: var(--sec-color);
  }

  .second-line {
    margin: 30px 0 0 -30px;
  }

  .content {
    margin-top: 150px;
  }

  .content h2 {
    font-size: 24px;
  }

  .content .divider {
    width: 60px;
    height: 3px;
  }

  .vision,
  .mission {
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 30px 0 40px;
  }

  .mission {
    margin: 40px 0 20px;
  }

  .vision img,
  .mission img {
    width: 75px;
    height: 75px;
    border-radius: 100%;
    object-fit: cover;
  }

  .vision .vision-content h2,
  .mission h2 {
    font-size: 20px;
    padding-top: 10px;
  }
}
</style>
