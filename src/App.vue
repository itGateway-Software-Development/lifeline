<template>
  <v-app>
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
export default {
  components: {
    Loading, Navbar, Footer },
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
