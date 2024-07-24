<template>
  <div class="service" v-if="services">
    <div class="header">
      <h2>{{services.title}}</h2>
      
      <div class="divider"></div>
    </div>
    <div class="content">
      <div v-html="services.content"></div>
    </div>
  </div>
  <div v-else>
    <h2 class="fw-bold text-center">No Services Available !</h2>
  </div>
</template>

<script>
import getServices from "@/composables/getServices";
import { onMounted } from "vue";
export default {
  setup() {
    const {services, error, load} = getServices();
    load();

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return {services}
  },
};
</script>

<style scoped>
.service .header {
  text-align: center;
}

.header h2 {
  font-weight: bold;
  color: #5a5a5a;
}

.header .divider {
  width: 300px;
  height: 3px;
  background: var(--sec-color);
  margin: 0 auto;
}

.content {
  margin: 60px 0 40px;
  padding-left: 40px;
}

.content img {
  width: 300px;
  object-fit: cover;
}


@media (max-width: 1600px) {
  .header h2 {
    font-size: 24px;
  }

  .header .divider {
    width: 200px;
  }

  .content {
    margin: 50px 0 40px;
    padding-left: 40px;
  }

  .content img {
    width: 250px;
    object-fit: cover;
  }

  .content .serv {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
  }

  .serv i {
    font-size: 14px;
    padding-top: 10px;
  }

  .serv span {
    font-size: 14px;
    letter-spacing: 0px;
    line-height: 30px;
  }

  .serv ul {
    margin-top: 20px;
  }

  .serv ul li {
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 0px;
    margin-bottom: 15px;
  }
}

@media (max-width: 550px) {
  .content img {
    width: 150px;
    object-fit: cover;
  }
}

@media (max-width: 400px) {
  .content img {
    width: 120px;
    object-fit: cover;
  }
}
</style>
