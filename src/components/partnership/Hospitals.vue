<template>
  <div class="hospital">
    <img
      src="@/assets/images/hospital/banner.jpg"
      class="banner"
      alt=""
    />

    <div class="header">
      <h2>Hospitals</h2>
      <div class="divider"></div>
    </div>

    <div class="hospital-tab d-flex gap-2">
      <div @click="status = 'outbound'" class="inbound py-1 px-2 cursor" :class="{'bg-info border-info' : status == 'outbound'}" style="cursor: pointer; border-radius: 100px; font-size: 14px; border: 1px solid #FF8C00;">Outbound</div>
      <div @click="status = 'inbound'" class="outbound py-1 px-2 cursor" :class="{'bg-info border-info' : status == 'inbound'}" style="cursor: pointer; border-radius: 100px; font-size: 14px; border: 1px solid #FF8C00;">Inbound</div>
    </div>

    <div class="content">
      <div class="row" v-if="status == 'outbound'">
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
      <div class="row" v-else>
        <div
          class="col-lg-4 col-md-6 col-sm-6 col-12 p-0 px-2 hospital-column"
          v-for="(hospital, i) in inbound_hospitals"
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
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const hospitals = [
      {
        name: "Samitivej",
        title: "Samitivej Hospital",
        content:
          "Samitivej Hospitals is a premier healthcare group in Thailand, offering internationally accredited care with a focus on patient-centered service.  ",
        img: require("@/assets/images/hospital/Samitivej.jpg"),
        logo: require("@/assets/images/hospital/Samitivej-logo.png"),
      },
      {
        name: "Ruamjairak",
        title: "Ruamjairak Hospital",
        content:
          "Established in late 2022, Ruamjairak Hospital @ Sukhumvit 62 is a modern multi-disciplinary general hospital in Bangkok, Thailand.  ",
        img: require("@/assets/images/hospital/Ruamjairak.jpg"),
        logo: require("@/assets/images/hospital/Ruamjairak-logo.svg"),
      },
      {
        name: "Praram_9",
        title: "Praram 9 Hospital",
        content:
          "Praram 9 Hospital has been delivering excellence in healthcare for over two decades. They boast a comprehensive range of specialties with a focus on innovative and up-to-date medical services.  ",
        img: require("@/assets/images/hospital/Praram-9.jpg"),
        logo: require("@/assets/images/hospital/Praram-9-logo.webp"),
      },
      {
        name: "Ladprao",
        title: "Ladprao General Hospital",
        content:
          "Established in 1990 by a consortium of medical professionals, Ladprao General Hospital has become a trusted healthcare provider in Bangkok, Thailand.",
        img: require("@/assets/images/hospital/Ladprao.jpeg"),
        logo: require("@/assets/images/hospital/Ladprao-logo.png"),
      },
      {
        name: "Kasemrad",
        title: "Kasemrad International Hospital",
        content:
          "Kasemrad International Hospital - Rattanatibeth has been serving the community with comprehensive healthcare,  since 1992.  ",
        img: require("@/assets/images/hospital/Kasemrad.jpg"),
        logo: require("@/assets/images/hospital/Kasemrad-logo.jpg"),
      },
      {
        name: "Bumrungrad ",
        title: "Bumrungrad International Hospital",
        content:
          "Established in 1980, Bumrungrad International Hospital is a highly regarded private medical center located in Bangkok, Thailand.   ",
        img: require("@/assets/images/hospital/Bumrungrad.png"),
        logo: require("@/assets/images/hospital/Bumrungrad-logo.webp"),
      },
      {
        name: "baac",
        title: "Bangkok Anti-Aging Center",
        content:
          "Seeking a holistic approach to wellness and rejuvenation? Look no further than the Bangkok Anti-Aging Center (BAAC).This integrative medical center in Bangkok, Thailand, specializes to serve health-conscious individuals focused on preventing and reversing the signs of aging.Utilizing a personalized approach, BAAC prioritizes identifying the root cause of health concerns rather than just treating symptoms.  ",
        img: require("@/assets/images/hospital/BAAC.png"),
        logo: require("@/assets/images/hospital/baac-logo.png"),
      },
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

    const inbound_hospitals = [
      {
        name: "GrandHantha",
        title: "Grand Hantha International Hospital ",
        content:
          "Grand Hantha International Hospital is a leading healthcare provider in Myanmar, offering a wide range of specialized medical services with state-of-the-art facilities.  ",
        img: require("@/assets/images/hospital/inbound/grandhantar/image.jpg"),
        logo: require("@/assets/images/hospital/inbound/grandhantar/logo.jpg"),
      },
    ]

    const status = ref('outbound');

    const viewHospital = (name) => router.push(`/hospital/${name}`);

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return { viewHospital, hospitals, status, inbound_hospitals };
  },
};
</script>

<style >
.hospital img.banner {
  width: 100%;
  height: 300px;
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
  height: 45px;
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
    margin-bottom: 30px !important;
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
