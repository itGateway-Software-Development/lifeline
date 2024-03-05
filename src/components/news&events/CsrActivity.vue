<template>
  <div class="csr">
    <img src="@/assets/images/csr-activity.webp" alt="" />
    <h4>Corporate Responsibility</h4>
    <span>Our commitment to corporate responsibility</span>
    <div class="para">
      We prioritize Corporate Social Responsibility (CSR) and actively engage in
      initiatives that create a positive impact. Through strategic partnerships
      and community-driven projects, we address social and environmental
      challenges. Our focus areas include education, healthcare, environmental
      sustainability, and community development. Together, we are committed to
      building a better future and making a meaningful difference. Join us in
      our CSR journey for a more inclusive and sustainable world.
    </div>
    <div class="header">
      <h4>Activities</h4>
      <div class="divider"></div>
    </div>
    <div class="content">
      <div class="csr-card pointer" v-for="i in 6" :key="i">
        <img :src="require(`@/assets/images/csr/csr${i}.png`)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      scrollTo(0, 0);
    });
  },
};
</script>

<style scoped>
.csr img {
  width: 100%;
  height: 270px;
  object-fit: cover;
}

.csr h4 {
  margin: 50px 0 10px;
  font-weight: bold;
}

.csr span {
  font-weight: bold;
  color: rgb(147, 149, 151);
  letter-spacing: 1px;
}

.para {
  margin: 30px 100px 20px;
  background-color: rgb(0, 120, 189);
  padding: 30px 40px;
  text-align: center;
  color: #fff;
}

.header {
  margin: 30px 0 15px;
}

.header .divider {
  width: 60px;
  height: 3px;
  background-color: var(--sec-color);
}

.content {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 40px;
}

.csr-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 30%;
  border-radius: 7px;
  transition: 0.5s;
}

.csr-card:hover {
  transform: scale(1.1);
}

.csr-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

@media (max-width: 1600px) {
  .csr img {
    width: 100%;
    height: 230px;
  }

  .csr h4 {
    margin: 30px 0 10px;
    font-size: 22px;
  }

  .csr span {
    letter-spacing: 1px;
    font-size: 14px;
  }

  .para {
    margin: 30px 100px 20px;
    padding: 30px 40px;
    font-size: 15px;
  }

  .header {
    margin: 30px 0 10px;
  }

  .header .divider {
    width: 60px;
    height: 3px;
  }

  .content {
    gap: 10px;
    margin-top: 30px;
  }

  .csr-card {
    padding: 5px;
    width: 30%;
    border-radius: 7px;
    transition: 0.5s;
  }
  .csr-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}

@media (max-width: 1200px) {
  .para {
    margin: 30px 80px 20px;
    padding: 30px 40px;
    font-size: 15px;
  }
}

@media (max-width: 999px) {
  .para {
    margin: 30px 20px 20px;
    padding: 30px 40px;
    font-size: 14px;
  }

  .csr-card {
    width: 48%;
  }
}

@media (max-width: 600px) {
  .para {
    margin: 30px 0px 20px;
    padding: 30px 40px;
    font-size: 14px;
  }

  .content {
    justify-content: center;
  }

  .csr-card {
    width: 80%;
  }

  .csr-card img {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 500px) {
  .csr-card {
    width: 95%;
  }
}
</style>
