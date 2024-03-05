import { createApp, onMounted, watch } from "vue";
import { createI18n } from "vue-i18n";
import EN from "./locale/en.json";
import MM from "./locale/mm.json";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

AOS.init({
  delay: 50,
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  mirror: true,
});

// Add a watcher for the 'locale' value in the Vuex store
store.watch(
  (state) => state.locale,
  (newLocale) => {
    i18n.global.locale = newLocale;
  }
);

const i18n = createI18n({
  locale: store.state.locale,
  messages: {
    EN: EN,
    MM: MM,
  },
});

createApp(App).use(store).use(vuetify).use(i18n).use(router).mount("#app");
