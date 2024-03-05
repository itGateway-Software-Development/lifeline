<template>
  <nav class="nav1">
    <div class="brand pointer" @click="navigate('/')">
      <img src="@/assets/images/ll.png" alt="" />
      <h2>LIFELINE GROUP OF COMPANIES</h2>
    </div>

    <!-- Toggle button for mobile -->
    <v-app-bar-nav-icon
      @click="drawer = !drawer"
      id="mobile-menu"
    ></v-app-bar-nav-icon>

    <div class="social">
      <router-link to="#"
        ><i style="color: #3b5998" class="fa-brands fa-facebook"></i
      ></router-link>
      <router-link to="#"
        ><i style="color: #8f5db7" class="fa-brands fa-viber"></i
      ></router-link>
      <router-link to="#"
        ><i style="color: #cd201f" class="fa-brands fa-youtube"></i
      ></router-link>
      <router-link to="#"
        ><i style="color: #0072b1" class="fa-brands fa-linkedin"></i
      ></router-link>
      <router-link to="#"
        ><i style="color: #cd201f" class="fa-brands fa-instagram"></i
      ></router-link>
    </div>
  </nav>
  <v-navigation-drawer app v-model="drawer" id="drawer" temporary>
    <v-list>
      <v-list-item @click="navigate('/')" class="head-menu">
        <v-list-item-title style="font-size: 14px; color: #50c4ff">
          <img src="@/assets/images/ll.png" alt="" />
          <span>LIFELINE GROUP OF COMPANIES</span>
        </v-list-item-title>
      </v-list-item>
      <v-list-item @click="navigate('/')">
        <v-list-item-title class="main-title">
          <v-icon icon="mdi-home"></v-icon> Home</v-list-item-title
        >
      </v-list-item>

      <v-list-group value="About Us">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props">
            <v-list-item-title class="main-title">
              <v-icon icon="mdi-account-group"></v-icon>About
              Us</v-list-item-title
            >
          </v-list-item>
        </template>

        <v-list-item @click="navigate('/about-us/introduction')">
          <v-list-item-title
            ><v-icon icon="mdi-circle-small"></v-icon
            >Introduction</v-list-item-title
          >
        </v-list-item>
        <v-list-item @click="navigate('/about-us/ceo-message')">
          <v-list-item-title
            ><v-icon icon="mdi-circle-small"></v-icon>CEO
            Message</v-list-item-title
          >
        </v-list-item>
        <v-list-item @click="navigate('/about-us/vision-mission')">
          <v-list-item-title
            ><v-icon icon="mdi-circle-small"></v-icon>Vision &
            Mission</v-list-item-title
          >
        </v-list-item>
        <v-list-item @click="navigate('/about-us/company-milestone')">
          <v-list-item-title
            ><v-icon icon="mdi-circle-small"></v-icon>Company
            Milestones</v-list-item-title
          >
        </v-list-item>
        <v-list-item @click="navigate('/coming-soon')">
          <v-list-item-title
            ><v-icon icon="mdi-circle-small"></v-icon>Distribution
            Network</v-list-item-title
          >
        </v-list-item>
        <v-list-item @click="navigate('/coming-soon')">
          <v-list-item-title
            ><v-icon icon="mdi-circle-small"></v-icon>Company
            Strength</v-list-item-title
          >
        </v-list-item>
      </v-list-group>

      <v-list-group value="Business">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props">
            <v-list-item-title class="main-title">
              <v-icon icon="mdi-briefcase-check"></v-icon
              >Business</v-list-item-title
            >
          </v-list-item>
        </template>

        <v-list-item @click="navigate('/business/lifeline')">
          <v-list-item-title
            ><v-icon icon="mdi-circle-small"></v-icon>Lifeline Company
            Limited</v-list-item-title
          >
        </v-list-item>

        <v-list-item @click="navigate('/business/mbd')">
          <v-list-item-title
            ><v-icon icon="mdi-circle-small"></v-icon>Myanmar Booster
            Distribution Company Limited</v-list-item-title
          >
        </v-list-item>

        <v-list-group value="Loyal Lifeline Company Limited">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props">
              <v-list-item-title
                ><v-icon icon="mdi-circle-small"></v-icon>Loyal Lifeline Company
                Limited</v-list-item-title
              >
            </v-list-item>
          </template>

          <v-list-item @click="navigate('/business/loyal-lifeline')">
            <v-list-item-title
              ><v-icon icon="mdi-circle-small"></v-icon>Loyal Lifeline Company
              Limited</v-list-item-title
            >
          </v-list-item>
          <v-list-item @click="navigate('/business/lifecare')">
            <v-list-item-title
              ><v-icon icon="mdi-circle-small"></v-icon>Lifecare Medical
              Services</v-list-item-title
            >
          </v-list-item>
        </v-list-group>
      </v-list-group>

      <v-list-group value="Our Products">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props">
            <v-list-item-title class="main-title">
              <v-icon icon="mdi-pill"></v-icon>Products &
              Services</v-list-item-title
            >
          </v-list-item>
        </template>

        <v-list-group value="Products">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props">
              <v-list-item-title>
                <v-icon icon="mdi-circle-small"></v-icon
                >Products</v-list-item-title
              >
            </v-list-item>
          </template>

          <v-list-item @click="navigate('/product-service/catalog')">
            <v-list-item-title>
              <v-icon icon="mdi-circle-small"></v-icon> Product
              Catalogue</v-list-item-title
            >
          </v-list-item>
          <v-list-item @click="navigate('/coming-soon')">
            <v-list-item-title>
              <v-icon icon="mdi-circle-small"></v-icon>
              Promotions</v-list-item-title
            >
          </v-list-item>
        </v-list-group>

        <v-list-item @click="navigate('/service-promotion/service')">
          <v-list-item-title>
            <v-icon icon="mdi-circle-small"></v-icon> Services &
            Promotions</v-list-item-title
          >
        </v-list-item>
      </v-list-group>

      <v-list-item @click="navigate('/coming-soon')">
        <v-list-item-title class="main-title">
          <v-icon icon="mdi-bullhorn"></v-icon> Announcement</v-list-item-title
        >
      </v-list-item>

      <v-list-group value="Partnership">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props">
            <v-list-item-title class="main-title">
              <v-icon icon="mdi-handshake"></v-icon
              >Partnerships</v-list-item-title
            >
          </v-list-item>
        </template>

        <v-list-item @click="navigate('/partnership/principles')">
          <v-list-item-title>
            <v-icon icon="mdi-circle-small"></v-icon>
            Principles</v-list-item-title
          >
        </v-list-item>
        <v-list-item @click="navigate('/partnership/hospitals')">
          <v-list-item-title>
            <v-icon icon="mdi-circle-small"></v-icon>
            Hospitals</v-list-item-title
          >
        </v-list-item>
      </v-list-group>

      <v-list-group value="news">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props">
            <v-list-item-title class="main-title">
              <v-icon icon="mdi-calendar-star"></v-icon>News &
              Events</v-list-item-title
            >
          </v-list-item>
        </template>

        <v-list-item @click="navigate('/news-events/csr-activities')">
          <v-list-item-title>
            <v-icon icon="mdi-circle-small"></v-icon>CSR
            Activities</v-list-item-title
          >
        </v-list-item>
        <v-list-item @click="navigate('/news-events/news')">
          <v-list-item-title>
            <v-icon icon="mdi-circle-small"></v-icon>
            News & Events</v-list-item-title
          >
        </v-list-item>
      </v-list-group>

      <v-list-item @click="navigate('/career')">
        <v-list-item-title class="main-title">
          <v-icon icon="mdi-book-edit"></v-icon> Career</v-list-item-title
        >
      </v-list-item>

      <v-list-item @click="navigate('/contact-us')">
        <v-list-item-title class="main-title">
          <v-icon icon="mdi-card-account-phone"></v-icon
          >Contact</v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <nav class="nav2">
    <div class="menu-items">
      <div
        class="menu home pointer"
        :class="{ active: currentRoute == '/' }"
        @click="navigate('/')"
      >
        <i class="fa-solid fa-house-chimney mb-1"></i>
        <div>
          <router-link to="/">{{ $t("home") }}</router-link>
        </div>
      </div>
      <div
        class="menu"
        :class="{ active: currentRoute.slice(0, 9) == '/about-us' }"
      >
        <div>
          <router-link to="#">{{ $t("about-us") }}</router-link>
        </div>
        <i class="fa-solid fa-sort-down"></i>
        <div class="dropdown">
          <router-link to="/about-us/introduction" class="intro"
            >Introduction</router-link
          >
          <router-link to="/about-us/ceo-message">CEO Message</router-link>
          <router-link to="/about-us/vision-mission"
            >Vision & Mission</router-link
          >
          <router-link to="/about-us/company-milestone"
            >Company Milestones</router-link
          >
          <router-link to="/about-us/distribution-network"
            >Distribution Network</router-link
          >
          <router-link to="/about-us/marketing-strength"
            >Marketing Strength</router-link
          >
        </div>
      </div>
      <div
        class="menu"
        :class="{ active: currentRoute.slice(0, 9) == '/business' }"
      >
        <div>
          <router-link to="#">{{ $t("business") }}</router-link>
        </div>
        <i class="fa-solid fa-sort-down"></i>
        <div class="dropdown">
          <router-link to="/business/lifeline"
            >Lifeline Company Limited</router-link
          >
          <router-link to="/business/mbd"
            >Myanmar Booster Distribution Company Limited</router-link
          >
          <router-link to="#"
            >Loyal Lifeline Company Limited <i class="fa-solid fa-plus"></i
            ><i class="fa-solid fa-minus text-secondary"></i>
            <div class="subMenu text-center">
              <router-link to="/business/loyal-lifeline"
                >Loyal Lifeline Company Limited</router-link
              >
              <router-link to="/business/lifecare"
                >Lifecare Medical Services</router-link
              >
            </div>
          </router-link>
        </div>
      </div>
      <div
        class="menu"
        :class="{
          active:
            currentRoute.slice(0, 8) == '/product' ||
            currentRoute.slice(0, 8) == '/service',
        }"
      >
        <div>
          <router-link to="#">{{ $t("product-service") }}</router-link>
        </div>
        <i class="fa-solid fa-sort-down"></i>
        <div class="dropdown">
          <router-link to="#"
            >Products <i class="fa-solid fa-plus"></i
            ><i class="fa-solid fa-minus text-secondary"></i>
            <div class="subMenu text-center">
              <router-link to="/product-service/catalog"
                >Product Catalogue</router-link
              >
              <router-link to="/coming-soon">Promotions</router-link>
            </div>
          </router-link>
          <router-link to="/service-promotion/service"
            >Services & Promotions</router-link
          >
        </div>
      </div>
      <div class="menu pointer" @click="navigate('/coming-soon')">
        <div>
          <router-link to="/coming-soon">{{ $t("announcement") }}</router-link>
        </div>
      </div>
      <div
        class="menu"
        :class="{ active: currentRoute.slice(0, 12) == '/partnership' }"
      >
        <div>
          <router-link to="#">{{ $t("partnerships") }}</router-link>
        </div>
        <i class="fa-solid fa-sort-down"></i>
        <div class="dropdown">
          <router-link to="/partnership/principles">Principles</router-link>
          <router-link to="/partnership/hospitals">Hospitals</router-link>
        </div>
      </div>
      <div
        class="menu"
        :class="{ active: currentRoute.slice(0, 5) == '/news' }"
      >
        <div>
          <router-link to="#">{{ $t("news-event") }}</router-link>
        </div>
        <i class="fa-solid fa-sort-down"></i>
        <div class="dropdown">
          <router-link to="/news-events/csr-activities"
            >CSR Activities</router-link
          >
          <router-link to="/news-events/news">News & Events</router-link>
        </div>
      </div>
      <div
        class="menu pointer"
        @click="navigate('/career')"
        :class="{ active: currentRoute == '/career' }"
      >
        <div>&nbsp;</div>
        <div>
          <router-link to="/career">{{ $t("career") }}</router-link>
        </div>
        <i class="fa-solid fa-sort-down" style="visibility: hidden"></i>
      </div>
      <div
        class="menu pointer"
        @click="navigate('/contact-us')"
        :class="{ active: currentRoute == '/contact-us' }"
      >
        <div>
          <router-link to="/contact-us">{{ $t("contact") }}</router-link>
        </div>
      </div>
    </div>

    <v-menu transition="slide-x-transition" class="language">
      <template v-slot:activator="{ props }">
        <v-btn color="warning" v-bind="props" class="lang-btn">
          <i class="fa-solid fa-globe" style="color: #000"></i>
          <span class="text-dark ms-2">{{ language }}</span>
        </v-btn>
      </template>

      <v-list>
        <v-list-item class="lang-list" @click="changeLanguage('EN')">
          <v-list-item-title>ENG</v-list-item-title>
        </v-list-item>
        <v-list-item class="lang-list" @click="changeLanguage('MM')">
          <v-list-item-title>MM</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </nav>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const drawer = ref(false);
    const router = useRouter();
    const language = ref("EN");
    const currentRoute = ref("");
    const store = useStore();
    const navigate = (route) => {
      router.push(route);
      drawer.value = false; // Close the drawer after navigation (for mobile)
    };

    let changeLanguage = (lang) => {
      language.value = lang;
      store.dispatch("getLocale", lang);
    };

    router.afterEach((to) => {
      currentRoute.value = to.path;
    });

    return { navigate, drawer, language, currentRoute, changeLanguage };
  },
};
</script>

<style scoped>
.nav1 {
  padding: 10px 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  background: #fff !important;
  height: 120px;
}

.nav1 .brand {
  display: flex;
  align-items: center;
  gap: 15px;
}

#mobile-menu {
  display: none;
}
.nav1 img {
  width: 150px;
  height: 150px;
  object-fit: contain;
}

.nav1 h2 {
  font-weight: bold;
  color: var(--main-color);
}

.nav1 .social {
  display: flex;
  align-items: center;
  gap: 15px;
}

.nav1 .social a i {
  font-size: 30px;
  transition: 0.2s ease;
}

.nav1 .social a i:hover {
  transform: translateY(-6px);
}

/* ----------------------menu navbar---------------------- */
.nav2 {
  padding: 23px 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #01579b;
  height: 30px;
  position: sticky;
  top: 0;
  z-index: 9999;
}

.nav2 .menu-items {
  display: flex;
  align-items: center;
  gap: 15px;
}

.nav2 .menu {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  position: relative;
  padding: 9px 8px;
}

.nav2 .menu div a {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  font-size: 14px;
}

.fa-house-chimney {
  color: var(--sec-color) !important;
  font-size: 22px !important;
}
.nav2 .menu-items i:not(:first-child) {
  margin-bottom: 8px;
  color: #dfd9d9;
  font-size: 20px;
}

.nav2 .language {
  display: flex;
  align-items: center;
  gap: 10px;
}

.v-menu.language {
  z-index: 999999 !important;
}

.v-list-item {
  min-height: 20px !important;
  cursor: pointer;
}

.v-list-item:hover {
  background: #c2c2c2 !important;
}

.v-list-item:hover span {
  color: #fff !important;
}

.home {
  padding: 10px 10px !important;
}

/* -----------dropdown------------ */
.menu .dropdown {
  position: absolute;
  top: 100%;
  left: 0%;
  transform: translateY(-1px);
  z-index: 9999;
}

.menu:hover {
  background: #e1f5fe;
}

.active {
  background: #e1f5fe;
}

.menu.active div a {
  color: #000;
}

.menu:hover .fa-house-chimney {
  color: var(--sec-color) !important;
}

.menu:hover div a {
  color: #000;
}
.menu .dropdown a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  background: #e1f5fe;
  position: relative;
  height: 0;
  padding: 0;
  visibility: hidden;
  transition: height 0.3s ease;
  position: relative;
  font-weight: 400 !important;
}

.menu .dropdown .fa-plus {
  color: var(--sec-color);
}

.menu .dropdown .fa-minus {
  display: none;
}
.menu:hover .dropdown a {
  height: 45px;
  padding: 15px 10px 15px 10px;
  visibility: visible;
  transition: all 0.3s ease-in-out;
  color: #000;
}

.menu:hover .dropdown a:hover {
  background-color: #b3e5fc;
  margin-left: 3px;
}

/* ----------- sub menu dropdown ----------*/
.menu .dropdown a .subMenu {
  position: absolute;
  top: 0%;
  left: 100%;
}
.menu .dropdown a .subMenu a {
  width: 300px;
  background: #e1f5fe;
  display: flex;
  transition: all 0.3s ease-in-out;
  height: 0;
  padding: 0;
  visibility: hidden;
  margin-left: 0;
}

.menu:hover .dropdown a:hover .subMenu a {
  height: 45px;
  padding: 15px 0px 15px 25px;
  visibility: visible;
  transition: all 0.3s ease-in-out;
}

.menu:hover .dropdown a:hover .subMenu a:hover {
  border-left: 1px solid var(--sec-color);
}

.menu:hover .dropdown a:hover .fa-plus {
  display: none;
}

.menu:hover .dropdown a:hover .fa-minus {
  display: inline-block;
  padding-top: 10px;
  color: var(--sec-color) !important;
}

/* menu responsive */
@media (max-width: 1796px) {
  .nav2 .menu-items {
    gap: 5px;
  }
}

@media (max-width: 1680px) {
  .nav2 {
    padding: 23px 13.5%;
  }
}

@media (max-width: 1600px) {
  .nav1 {
    padding: 10px 9%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    background: #fff !important;
    height: 85px;
  }
  .nav1 img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

  .nav1 h2 {
    font-weight: bold;
    color: var(--main-color);
    font-size: 25px;
  }

  .nav1 .social a i {
    font-size: 25px;
    transition: 0.2s ease;
  }

  /* ----------------------menu navbar---------------------- */
  .nav2 {
    padding: 15px 9%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #21538b;
    height: 35px !important;
    position: sticky;
    top: 0;
    z-index: 9999;
    margin-top: -2px;
  }

  .nav2 .menu-items {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .nav2 .menu {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
    position: relative;
    padding: 6px 8px;
  }

  .nav2 .menu div a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    font-size: 13px;
  }

  .fa-house-chimney {
    font-size: 16px !important;
  }
  .nav2 .menu-items i:not(:first-child) {
    margin-bottom: 7px;
    color: #dfd9d9;
    font-size: 15px;
  }

  .lang-btn {
    width: 80px;
    height: 27px !important;
  }

  .v-list-item {
    max-height: 27px !important;
  }

  .v-list-item:hover {
    background: #c2c2c2 !important;
  }

  .v-list-item:hover span {
    color: #fff !important;
  }

  .home {
    padding: 5.5px 10px !important;
  }

  /* -----------dropdown------------ */

  .menu:hover div a {
    color: #000;
  }
  .menu .dropdown a {
    width: 290px;
  }
  .menu:hover .dropdown a {
    height: 38px;
    padding: 15px 10px 15px 10px;
    visibility: visible;
    transition: all 0.3s ease-in-out;
    color: #000;
  }

  .active {
    background: #e1f5fe;
  }

  .menu.active div a {
    color: #000;
  }

  /* ----------- sub menu dropdown ----------*/
  .menu .dropdown a .subMenu a {
    width: 230px;
  }

  .menu:hover .dropdown a:hover .subMenu a {
    height: 38px;
    padding: 15px 0px 15px 25px;
  }
}

@media (max-width: 1280px) {
  .nav2 {
    padding: 15px 8%;
  }
  .nav2 .menu {
    gap: 0px;
    position: relative;
    padding: 6px 8px;
  }
}

@media (max-width: 1200px) {
  .nav1 {
    padding: 10px 3%;
    gap: 10px;
    height: 85px;
  }
  .nav1 img {
    width: 90px;
    height: 90px;
    object-fit: contain;
  }

  .nav1 h2 {
    font-weight: bold;
    color: var(--main-color);
    font-size: 23px;
  }

  .nav1 .social a i {
    font-size: 25px;
    transition: 0.2s ease;
  }

  /* ----------------------menu navbar---------------------- */
  .nav2 {
    padding: 15px 3%;
    height: 35px !important;
  }

  .nav2 .menu-items {
    gap: 0px;
  }

  .nav2 .menu {
    gap: 5px;
    position: relative;
    padding: 6px 8px;
  }

  .nav2 .menu div a {
    font-size: 12px;
  }

  .fa-house-chimney {
    font-size: 14px !important;
    margin-top: 2px;
  }
  .nav2 .menu-items i:not(:first-child) {
    margin-bottom: 3px;
    color: #dfd9d9;
    font-size: 15px;
  }
}

/* for menu bar responsive */
@media (max-width: 1018px) {
  .nav2 {
    padding: 15px 1%;
  }
}

@media (max-width: 980px) {
  .nav2 .menu {
    gap: 1px;
    padding: 6px 8px;
  }

  .nav2 .menu div a {
    font-size: 12px;
  }
}

@media (max-width: 943px) {
  .nav2 .menu div a {
    font-size: 11px;
  }
}

@media (max-width: 920px) {
  .nav1 {
    padding: 10px 1%;
    gap: 10px;
    height: 85px;
  }
}

@media (max-width: 841px) {
  .nav2 {
    padding: 15px 0%;
  }
}

@media (max-width: 880px) {
  .nav1 {
    height: 65px;
  }
  .nav1 img {
    width: 75px;
    height: 75px;
  }

  .nav1 h2 {
    font-size: 18px;
  }

  .nav1 .social a i {
    font-size: 20px;
  }

  .nav2 .menu {
    gap: 2px;
    padding: 6px;
  }

  .nav2 .menu div a {
    font-size: 11px;
  }

  .fa-house-chimney {
    font-size: 13px !important;
    margin-top: 4px;
  }

  .nav2 .menu-items i:not(:first-child) {
    margin-bottom: 2px;
    font-size: 13px;
  }

  .lang-btn {
    width: 60px;
    height: 22px !important;
    font-size: 12px;
  }
}

@media (max-width: 825px) {
  .nav1 {
    background: linear-gradient(to left, #eeb876, #c3d2da) !important;
    position: sticky;
    top: 0;
    z-index: 999;
  }

  .nav1 img {
    width: 85px;
    height: 85px;
  }

  .nav1 .social {
    display: none;
  }

  #mobile-menu {
    display: inline-block;
    font-size: 25px;
  }

  .nav2 {
    display: none;
  }
}

@media (max-width: 500px) {
  .nav1 img {
    width: 75px;
    height: 75px;
  }
  .nav1 h2 {
    font-size: 16px;
    padding-top: 6px;
  }
}

@media (max-width: 425px) {
  .nav1 {
    height: 55px;
  }
  .nav1 img {
    width: 65px;
    height: 65px;
  }
  .nav1 h2 {
    font-size: 14px;
    padding-top: 6px;
  }
  #mobile-menu {
    font-size: 20px;
  }
}
</style>
