<template>
  <div class="hospital">
    <img
      src="@/assets/images/hospital/medpark-banner.png"
      class="banner"
      alt=""
    />

    <div class="header">
      <h2>Hospitals</h2>
      <div class="divider"></div>
    </div>

    <div class="content">
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-6 col-12 p-0 px-2 hospital-column"
          v-for="(hospital, i) in hospitals"
          :key="i"
        >
          <div class="hospital-card">
            <div class="hospital-image">
              <img :src="hospital.img" class="hospital-img" alt="" />
              <div class="logo">
                <img
                  :src="hospital.logo"
                  :class="{
                    small: hospital.status === 'small',
                    medium: hospital.status == 'medium',
                  }"
                  alt=""
                />
              </div>
            </div>
            <div class="hospital-info">
              <h3>{{ hospital.title }}</h3>
              <p>{{ hospital.content.slice(0, 100) }} ...</p>
              <router-link :to="`/hospital/${hospital.name}`"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const hospitals = [
      {
        name: "Vejthani",
        title: "Vejthani Hospital",
        content:
          "Vejthani Hospital, established in 1994, is one of the leading private international hospitals in Thailand that provides JCI accredited quaternary health care services.",
        img: require("@/assets/images/hospital/vejthani.jpg"),
        logo: require("@/assets/images/hospital/logo1.png"),
      },
      {
        name: "Medpark",
        title: "Medpark Hospital",
        content:
          "MedPark Hospital was established from the cooperation of Mahaichai Hospital Public Company Limited and diverse medical professionals with over 30 years of experience in healthcare industry. ",
        img: require("@/assets/images/hospital/medpark.jpeg"),
        logo: require("@/assets/images/hospital/logo2.png"),
      },
      {
        name: "Phyathai1",
        title: "Phyathai1 Hospital",
        content:
          "Phayathai 1 International Hospital was founded in 1976 and has been providing healthcare services for average 40,000 patients per month.",
        img: require("@/assets/images/hospital/Phyathai1.jpg"),
        logo: require("@/assets/images/hospital/logo3.png"),
      },
      {
        name: "Phyathai2",
        title: "Phyathai2 Hospital",
        content:
          "Phayathai 2 International Hospital was founded in 1987 and has been providing healthcare services for monthly for an average of 50,000 outpatients and 1,600 inpatients.",
        img: require("@/assets/images/hospital/phyathai2.jpg"),
        logo: require("@/assets/images/hospital/logo4.png"),
      },
      {
        name: "Paolo",
        title: "Paolo Hospital",
        content:
          "Paolo International Hospital was established in 1972 and provides affrodable services for different medical checkup programmes and variety of treatment procedures. Furthermore, Paolo Hospital Phaholyothin is regarded as the member of Bangkok Dusit Medical Services (BDMS )group.",
        img: require("@/assets/images/hospital/paolo.jpg"),
        logo: require("@/assets/images/hospital/logo5.png"),
      },
      {
        name: "Thonburi",
        title: "Thonburi Hospital",
        content:
          "Thonburi Bamrungmuang Hospital was established in 1976 and is the medical centre of Thonburi Healthcare Group PLC (THG), which has been Thailand’s leader of Healthcare Service for over 42 years.  ",
        img: require("@/assets/images/hospital/thonburi.jpg"),
        logo: require("@/assets/images/hospital/logo6.png"),
      },
      {
        name: "Vimut",
        title: "Vimut Hospital",
        content:
          "Vimut Hospital is designed in accordance with Joint Commission International (JCI) Standards and offers comprehensive range of medical services including diagnosis and treatment with advanced technology, latest medical equipment, as well as, high quality medications. ",
        img: require("@/assets/images/hospital/vimut.jpg"),
        logo: require("@/assets/images/hospital/logo7.png"),
      },
      {
        name: "PatRangsit",
        title: "PatRangsit Hospital",
        content:
          "Pat Rangsit Hospital was established in 1985 in accordance with the Social welfare so that patients can be assured to receive a qualified healthcare services with affordable prices. ",
        img: require("@/assets/images/hospital/patRangsit.jpg"),
        logo: require("@/assets/images/hospital/logo8.png"),
      },
    ];

    const viewHospital = (name) => router.push(`/hospital/${name}`);

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return { viewHospital, hospitals };
  },
};
</script>

<style scoped>
.hospital img.banner {
  width: 100%;
  height: 250px;
  object-fit: cover;
  filter: brightness(0.8);
}

.header {
  margin: 20px 0;
}

.header h2 {
  font-weight: bold;
  color: var(--main-color);
}

.header .divider {
  width: 80px;
  height: 3px;
  background-color: var(--sec-color);
}

.content {
  margin: 30px 0 20px;
}

.hospital-card {
  background: rgb(146, 212, 243, 0.3);
  border-radius: 7px;
  margin-bottom: 20px;
}

.hospital-card .hospital-image {
  height: 200px;
  position: relative;
}

.hospital-image img.hospital-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9);
  border-radius: 5px 5px 0 0;
}

.hospital-image .logo {
  position: absolute;
  top: 0%;
  right: 0%;
  width: 85px;
  display: flex;
  align-items: start;
  justify-content: start;
  border-radius: 0 0 0 7px;
}

.hospital-image .logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0.98);
  border-radius: 0 0 0 7px;
  background: rgba(255, 255, 255);
}
.hospital-info {
  padding: 10px 15px;
}

.hospital-card h3 {
  font-size: 22px;
  color: var(--sec-color);
  font-weight: bold;
}

.hospital-card p {
  font-size: 14px;
  color: rgb(71, 74, 77);
  height: 70px;
}

.hospital-card a {
  font-size: 13px;
  color: #b88b10;
  font-weight: bold;
  text-decoration: none;
  border-bottom: 3px solid #dbd8d8;
  transition: 0.3s ease;
}

.hospital-card a:hover {
  border-bottom: 3px solid #b88b10;
}

@media (max-width: 1600px) {
  .hospital img {
    width: 100%;
    height: 230px;
  }

  .header {
    margin: 20px 0 0;
  }
  .header h2 {
    font-size: 24px;
  }

  .header .divider {
    width: 50px;
    height: 3px;
  }

  .content {
    margin: 30px 0 20px;
  }

  .hospital-card {
    margin-bottom: 20px;
    border-radius: 5px;
  }

  .hospital-card .hospital-image {
    height: 160px;
    position: relative;
  }

  .hospital-image img.hospital-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7);
    border-radius: 5px 5px 0 0;
  }

  .hospital-image img.hospital-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.9);
    border-radius: 5px 5px 0 0;
  }

  .hospital-image .logo {
    position: absolute;
    top: 0%;
    right: 0%;
    width: 85px;
    display: flex;
    align-items: start;
    justify-content: start;
    border-radius: 0 0 0 7px;
  }

  .hospital-image .logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(0.98);
    border-radius: 0 0 0 7px;
  }

  .hospital-info {
    padding: 10px 15px;
  }

  .hospital-card h3 {
    font-size: 16px;
    color: var(--sec-color);
    font-weight: bold;
  }

  .hospital-card p {
    font-size: 12px;
    height: 60px;
  }

  .hospital-card a {
    font-size: 13px;
    color: #b88b10;
    font-weight: bold;
    text-decoration: none;
    border-bottom: 3px solid #dbd8d8;
    transition: 0.3s ease;
  }

  .hospital-card a:hover {
    border-bottom: 3px solid #b88b10;
  }
}

@media (max-width: 575px) {
  .hospital .hospital-column {
    padding: 10px 30px !important;
  }
}
</style>
