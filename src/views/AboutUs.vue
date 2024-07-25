<template>
  <div class="about-us position-relative">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-12 p-0">
        <div class="menu w-100" data-aos="flip-right">
          <router-link
            to="/about-us/introduction"
            :class="{ active: slug == 'introduction' }"
            >Introduction</router-link
          >
          <router-link
            to="/about-us/ceo-message"
            :class="{ active: slug == 'ceo-message' }"
            >CEO Message</router-link
          >
          <router-link
            to="/about-us/vision-mission"
            :class="{ active: slug == 'vision-mission' }"
            >Vision & Mission</router-link
          >
          <router-link
            to="/about-us/company-milestone"
            :class="{ active: slug == 'company-milestone' }"
            >Company Milestones</router-link
          >
          <router-link
            to="/about-us/distribution-network"
            :class="{ active: slug == 'distribution-network' }"
            >Distribution Network</router-link
          >
          <router-link
            to="/about-us/marketing-strength"
            :class="{ active: slug == 'marketing-strength' }"
            >Our Strength</router-link
          >
          <router-link
            to="/about-us/photo-gallery"
            :class="{ active: slug == 'photo-gallery' }"
            >Photo Gallery</router-link
          >
        </div>
        <div v-if="slug == 'photo-gallery'" class="menu w-75 mt-5" style="position: sticky; top: 60px;" data-aos="flip-right">
          <router-link
            to="#"
            :class="{ active: selectYear == 'All' }"
            @click="chooseYear('All')"
            >All</router-link
          >
          <router-link
            to="#"
            :class="{ active: selectYear == '2024' }"
            @click="chooseYear('2024')"
            >2024</router-link
          >
          <router-link
            to="#"
            :class="{ active: selectYear == '2023' }"
            @click="chooseYear('2023')"
            >2023</router-link
          >
          <router-link
            to="#"
            :class="{ active: selectYear == '2022' }"
            @click="chooseYear('2022')"
            >2022</router-link
          >
          <router-link
            to="#"
            :class="{ active: selectYear == '2021' }"
            @click="chooseYear('2021')"
            >2021</router-link
          >
          <router-link
            to="#"
            :class="{ active: selectYear == '2020' }"
            @click="chooseYear('2020')"
            >2020</router-link
          >
        </div>
      </div>
      <div class="col-lg-9 col-md-9 col-sm-12">
        <div class="content">
          <div v-if="slug == 'introduction'"><Introduction></Introduction></div>
          <div v-if="slug == 'ceo-message'"><CeoMessage></CeoMessage></div>
          <div v-if="slug == 'vision-mission'"><VisionMission /></div>
          <div v-if="slug == 'company-milestone'"><CompanyMilestone /></div>
          <div v-if="slug == 'distribution-network'">
            <DistributionNetwork />
          </div>
          <div v-if="slug == 'marketing-strength'"><MarketingStrength /></div>
          <div v-if="slug == 'photo-gallery'"><PhotoGallery :selectYear="selectYear"></PhotoGallery></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoGallery from '../components/about-us/PhotoGallery'
import MarketingStrength from "../components/about-us/MarketingStrength";
import DistributionNetwork from "../components/about-us/DistributionNetwork";
import CompanyMilestone from "../components/about-us/CompanyMilestone";
import VisionMission from "../components/about-us/VisionMission";
import CeoMessage from "../components/about-us/CeoMessage";
import { onMounted, ref } from "vue";
import Introduction from "../components/about-us/Introduction";
export default {
  components: {
    PhotoGallery,
    MarketingStrength,
    DistributionNetwork,
    CompanyMilestone,
    VisionMission,
    CeoMessage,
    Introduction,
  },
  props: ["slug"],
  setup() {
    const selectYear = ref('All');

    const chooseYear = (year) => {
      selectYear.value = year;
    }

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return {selectYear, chooseYear}
  },
};
</script>

<style scoped>
.about-us {
  padding: 30px 15%;
}

.about-us .menu {
  display: flex;
  flex-direction: column;
  background-color: #e5ecf1;
}

.about-us .menu a {
  text-decoration: none;
  padding: 11px 25px;
  transition: 0.3s ease;
  color: #000;
}

.about-us .menu a:hover {
  background-color: #3a82a3;
  color: #fff;
}

.active {
  background-color: #3a82a3;
  color: #fff !important;
}

@media (max-width: 1600px) {
  .about-us {
    padding: 30px 9%;
  }

  .about-us .menu a {
    padding: 9px 25px;
    font-size: 14px;
  }
}

@media (max-width: 1200px) {
  .about-us {
    padding: 30px 3%;
  }

  .about-us .menu a {
    padding: 9px 25px;
    font-size: 14px;
  }
}

@media (max-width: 767px) {
  .about-us .menu {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 15px;
    background: none;
  }

  .about-us .menu a {
    padding: 9px 25px;
    font-size: 13px;
    text-align: center;
    border-right: 1px solid #3a82a3;
    background-color: #e5ecf1;
  }
}

@media (max-width: 685px) {
  .about-us .menu {
    flex-wrap: wrap;
    background: none;
    justify-content: start;
    margin-left: 13px;
  }
  .about-us .menu a {
    padding: 5px 25px;
    font-size: 13px;
    text-align: center;
    border: 1px solid #3a82a3;
    background-color: #e5ecf1;
    color: #000;
    margin-bottom: 5px;
  }
}
</style>
