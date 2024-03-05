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
// @ is an alias to /src

export default {
  components: {
    Activity,
    Welcome,
    Carousel,
  },
  name: "HomeView",
};
</script>
