<template>
  <div class="home">
    <Carousel></Carousel>
    <Welcome></Welcome>
    <Activity></Activity>
  </div>
</template>

<script>
import Activity from "../components/Activity";
import Welcome from "../components/Welcome";
import Carousel from "../components/Carousel";
import { onMounted, ref } from 'vue';
// @ is an alias to /src

export default {
  components: {
    Activity,
    Welcome,
    Carousel,
  },
  name: "HomeView",
  setup() {

  }
};
</script>
