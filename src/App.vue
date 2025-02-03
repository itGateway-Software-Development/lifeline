<template>
  <v-app>
    <Vue3Marquee class="bg-danger py-2 text-white" :pause-on-hover="true" :duration="50">
      <p class="p-0 m-0">This is demo website. To see the real website please visit <a href="https://lifelinemyanmar.com" target="_blank">www.lifelinemyanmar.com</a>  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</p>
      <p class="p-0 m-0">This is demo website. To see the real website please visit <a href="https://lifelinemyanmar.com" target="_blank">www.lifelinemyanmar.com</a> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</p>
      <p class="p-0 m-0">This is demo website. To see the real website please visit <a href="https://lifelinemyanmar.com" target="_blank">www.lifelinemyanmar.com</a> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</p>
      <p class="p-0 m-0">This is demo website. To see the real website please visit <a href="https://lifelinemyanmar.com" target="_blank">www.lifelinemyanmar.com</a> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</p>
    </Vue3Marquee>
    <Navbar />
    <!-- Main content -->
    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
  <Loading v-if="isLoad"/>
</template>

<script>
import Loading from './components/Loading'
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Vue3Marquee } from 'vue3-marquee';

export default {
  components: {
    Loading, Navbar, Footer, Vue3Marquee },
  setup() {
    const isLoad = ref(true);
    const route = useRoute();

    const loadContent = () => {
        isLoad.value = true;
        
        setTimeout(() => {
          isLoad.value = false;
        }, 900);
    };

    onMounted(() => {
      window.addEventListener('load', () => {
          isLoad.value = false;
        })
    })

    watch(route, () => loadContent());

    return {isLoad}
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media (max-width: 768px) {
  #app {
    overflow: hidden;
  }
}
</style>
