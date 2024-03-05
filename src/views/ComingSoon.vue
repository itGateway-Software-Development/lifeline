<template>
  <div class="d-flex justify-center" style="overflow-y: hidden">
    <img src="@/assets/images/coming_soon.jpg" alt="" />
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
img {
  width: auto;
  height: 80vh;
  object-fit: cover;
}

@media (max-width: 1080px) {
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
}
</style>
