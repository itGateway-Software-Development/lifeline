<template>
  <div class="principle">
    <img src="@/assets/images/partnership-banner.jpg" alt="" />
    <div class="header">
      <h2>Principles</h2>
      <div class="divider"></div>
    </div>
    <div class="content">
      <div class="principle-card pointer" v-for="i in 16" :key="i">
        <img :src="require(`@/assets/images/principle/p${i}.png`)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style scoped>
.principle img {
  width: 100%;
  height: 250px;
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
