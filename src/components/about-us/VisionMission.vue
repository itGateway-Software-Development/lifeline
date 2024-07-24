<template>
  <div class="vision-mission">
    <div>
      <div class="main-img">
        <img class="w-100" src="@/assets/images/vision-mission.jpg" alt="">
      </div>

      <div class="sec-img d-flex justify-content-end">
        <img class="w-50" src="@/assets/images/vision_mission_samll.jpg" alt="">
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
  .sec-img img {
    border-top-left-radius: 100px;
  }
</style>
