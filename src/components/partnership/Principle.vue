<template>
  <div class="principle">
    <img src="@/assets/images/partnership-banner.jpg" alt="" />
    <div class="header">
      <h2>Principles</h2>
      <div class="divider"></div>
    </div>
    <div class="content">
      <div class="principle-card pointer" v-for="principle in principles" :key="principle.name">
        <a :href="principle.web_link" target="_blank">
          <img :src="principle.img" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    const principles = [
      {
        name: 'Aqatc',
        img: require("@/assets/images/principle/p1.png"),
        web_link: "http://aquaticgroup.in/",
      },
      {
        name: 'Baroque',
        img: require("@/assets/images/principle/p2.png"),
        web_link: "https://baroquepharma.com/",
      },
      {
        name: 'Finecure',
        img: require("@/assets/images/principle/p3.png"),
        web_link: "https://www.finecurepharma.com",
      },
      {
        name: 'Gufic',
        img: require("@/assets/images/principle/p4.png"),
        web_link: "https://gufic.com/",
      },
      {
        name: 'Impact',
        img: require("@/assets/images/principle/p5.png"),
        web_link: 'https://impactcare.co.in/',
      },
      {
        name: 'MJ',
        img: require("@/assets/images/principle/p6.png"),
        web_link: 'https://www.mjgroup.co.in',
      },
      {
        name: 'Novell',
        img: require("@/assets/images/principle/p7.png"),
        web_link: 'https://www.novellpharm.com',
      },
      {
        name: 'Pulse',
        img: require("@/assets/images/principle/p8.png"),
        web_link: 'https://pulsepharma.net',
      },
      {
        name: 'Renata',
        img: require("@/assets/images/principle/p9.png"),
        web_link: 'https://www.renata-ltd.com',
      },
      {
        name: 'S Kant',
        img: require("@/assets/images/principle/p10.png"),
        web_link: 'http://www.skant.com/',
      },
      {
        name: 'Sydler',
        img: require("@/assets/images/principle/p11.png"),
        web_link: 'https://sydlerindia.com',
      },
      {
        name: 'Torrent',
        img: require("@/assets/images/principle/p12.png"),
        web_link: 'https://www.torrentpharma.com',
      },
    ];
    
    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return {principles};

  },
};
</script>

<style scoped>
.principle img {
  width: 100%;
  height: 300px;
  object-fit: cover;
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
  background: var(--sec-color);
}

.content {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 40px;
}

.principle-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  width: 24%;
  border-radius: 7px;
  transition: 0.5s;
}

.principle-card:hover {
  transform: scale(1.3);
}

.principle-card img {
  width: 200px;
  height: 120px;
  object-fit: contain;
}

@media (max-width: 1600px) {
  .principle img {
    width: 100%;
    height: 230px;
    object-fit: cover;
  }

  .header {
    margin: 20px 0;
  }

  .header h2 {
    font-size: 24px;
  }

  .header .divider {
    width: 60px;
    height: 3px;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 30px;
  }

  .principle-card {
    padding: 0;
    width: 23%;
    margin-bottom: 15px;
  }
  .principle-card img {
    width: 150px;
    height: 90px;
    object-fit: contain;
  }
}

@media (max-width: 1100px) {
  .principle-card img {
    width: 130px;
    height: 80px;
  }
}

@media (max-width: 775px) {
  .principle-card {
    padding: 0;
    width: 30%;
    margin-bottom: 15px;
  }
}

@media (max-width: 477px) {
  .principle-card {
    padding: 0;
    width: 45%;
    margin-bottom: 15px;
  }

  .principle-card img {
    width: 150px;
    height: 90px;
  }
}
</style>
