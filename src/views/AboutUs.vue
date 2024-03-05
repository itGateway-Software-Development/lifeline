<template>
  <div class="about-us">
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
            >Marketing Strength</router-link
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarketingStrength from "../components/about-us/MarketingStrength";
import DistributionNetwork from "../components/about-us/DistributionNetwork";
import CompanyMilestone from "../components/about-us/CompanyMilestone";
import VisionMission from "../components/about-us/VisionMission";
import CeoMessage from "../components/about-us/CeoMessage";
import { onMounted } from "vue";
import Introduction from "../components/about-us/Introduction";
export default {
  components: {
    MarketingStrength,
    DistributionNetwork,
    CompanyMilestone,
    VisionMission,
    CeoMessage,
    Introduction,
  },
  props: ["slug"],
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
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

@media (max-width: 768px) {
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
