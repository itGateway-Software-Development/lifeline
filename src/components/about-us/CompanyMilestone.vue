<template>
  <div class="milestone">
    <div class="img">
      <img data-aos="zoom-in" src="@/assets/images/milestone.jpg" alt="" />
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
.img {
  width: 100%;
  background: #f8f6f6;
}

.img img {
  width: 100%;
  height: 100%;
  background: transparent;
}

</style>
