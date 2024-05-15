<template>
  <div class="home">
    <Carousel></Carousel>
    <Welcome></Welcome>
    <Activity></Activity>

    <Loading v-if="isLoading"></Loading>
  </div>
</template>

<script>
import Loading from '../components/Loading'
import Activity from "../components/Activity";
import Welcome from "../components/Welcome";
import Carousel from "../components/Carousel";
import { onMounted, ref } from 'vue';
// @ is an alias to /src

export default {
  components: {
    Loading,
    Activity,
    Welcome,
    Carousel,
  },
  name: "HomeView",
  setup() {
    const isLoading = ref(true);

    onMounted(() => {
      window.addEventListener('load', () => {
        isLoading.value = false;
      })
    })

    return {isLoading}
  }
};
</script>
