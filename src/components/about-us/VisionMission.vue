<template>
  <div class="vision-mission">
    <div class="heading-container">
      <div >
        <div class="unity-image">
          <div class="bg"></div>
          <img data-aos="fade-left" src="@/assets/images/vision_mission_samll.jpg" alt="" />
        </div>
      </div>
      <div class="header">
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
  height: 700px;

}
.header {
  width: 100%;
  height: 500px;
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
  right: 0;
  margin-top: 400px;
  z-index: 2;
}


.unity-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 80px;
}




@media (max-width: 1600px) {

  .header h2 {
    margin-left: 30px;
    margin-top: 20px;
  }


  .unity-image .bg {
    width: 100px;
    height: 90px;
  }

}
</style>
