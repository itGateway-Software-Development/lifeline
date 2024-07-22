<template>
  <div class="distribution-network">
    <div class="map d-flex justify-content-center">
      <img src="@/assets/images/map.png" alt="">
    </div>
    <div class="content">
      <h2 data-aos="fade-left">Distribution Network</h2>
      <div data-aos="fade-left" class="divider"></div>
    </div>
    <div class="para">
      <p data-aos="flip-up">
        We have 9 Branch offices and 9 Sub-distributor offices in nearly every
        state and division of Myanmar.
      </p>
      <p data-aos="flip-up">
        Our distribution network can cover all of the states and divisions of
        Myanmar ensuring comprehensive coverage and efficient reach, making us
        one of the most reliable healthcare and pharmaceutical products provider
        in Myanmar.
      </p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
export default {
  setup() {
    const isTaungGyi = ref(false);
    const isYangon = ref(false);
    const isMandalay = ref(false);
    const mdybg = computed(() => isMandalay.value ? '#4DB6AC' : '#90A4AE');
    const tgbg = computed(() => isTaungGyi.value ? '#4DB6AC' : '#90A4AE');
    const ygnbg = computed(() => isYangon.value ? '#4DB6AC' : '#90A4AE');

    const showNetworks = (network) => {
      if(network == 'taunggyi') {
        isTaungGyi.value = true;
      } else if(network == 'yangon') {
        isYangon.value = true;
      } else if(network == 'mandalay') {
        isMandalay.value = true;
      } else {
        isTaungGyi.value = false;
        isYangon.value = false;
        isMandalay.value = false;
      }


    }

    return {showNetworks, isTaungGyi, isYangon, isMandalay, mdybg, tgbg, ygnbg}
  }
};
</script>

<style scoped>

.distribution-network circle {
  z-index: 9999 !important;
}

.map {
  position: relative;
  overflow: hidden;
  background-image: url('@/assets/images/background.png');
}

.map-info {
  position: absolute;
  bottom: 80px;
  left: 0;
}

.map img {
  width: 60%;
}


#MM06 {
  transition: .5s ease;
  cursor: pointer;
}

/* taunggyi */
#MM17 {
  transition: .5s ease;
  cursor: pointer;
}

/* mandalay */
#MM04 {
  transition: .5s ease;
  cursor: pointer;
}

.box {
  width: 20px;
  height: 20px;
  border-radius: 100%;
}

.office {
  background: red;
}

.upper-mm {
  background: #6200EA;
}

.lower-mm {
  background: #81C784;
}

.content {
  margin: 40px 0 35px;
}

.content h2 {
  color: var(--main-color);
  font-weight: bold;
}
.content .divider {
  width: 80px;
  height: 5px;
  background-color: var(--sec-color);
}

.para p {
  line-height: 30px;
}

@media (max-width: 1600px) {

  .content {
    margin: 30px auto 10px;
  }

  .content h2 {
    font-size: 24px;
  }
  .content .divider {
    width: 60px;
    height: 3px;
  }

  .para p {
    line-height: 30px;
    font-size: 14px;
  }
}

@media(max-width: 1400px) {
  .map svg {
    margin-left: -150px;
  }
}

@media(max-width: 950px) {
  .map svg {
    margin-left: -300px;
  }
}

@media(max-width: 768px) {
  .map svg {
    margin-left: -200px;
  }
}

@media(max-width: 540px) {
  .map svg {
    margin-left: -270px;
  }
}

@media(max-width: 480px) {
  .map {
    overflow-x: scroll !important;
  }
  .map svg {
    overflow: scroll;
  }
}
</style>
