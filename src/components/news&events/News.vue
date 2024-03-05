<template>
  <div class="news">
    <img src="@/assets/images/news.jpg" alt="" />
    <div class="header">
      <h2>News</h2>
      <div class="divider"></div>
    </div>
    <div class="content">
      <div
        class="news-card pointer"
        v-for="i in 5"
        :key="i"
        @click="goDetail(i)"
      >
        <img :src="require(`@/assets/images/news/news${i}.png`)" alt="" />
        <div class="news-text">
          <h3>Humana makes it easy to find the best Medicare</h3>
          <div class="date">20 - 02 - 2023</div>
          <p>
            Lifeline supports the Medicare Provider and Supplier enrollment
            process by allowing users to securely and electronically submit and
            manage Medicare enrollment ..
          </p>
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
    const goDetail = (id) => router.push("/news-detail/" + id);

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return { goDetail };
  },
};
</script>

<style scoped>
.news img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.header {
  margin: 20px 0;
}
.header h2 {
  font-weight: bold;
}

.header .divider {
  width: 50px;
  height: 3px;
  background: var(--sec-color);
}

.content {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.news-card {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 48%;
  height: 170px;
  transition: 0.4s;
  padding: 10px 10px 15px;
  overflow: hidden;
  margin-bottom: 10px;
}

.news-card:hover {
  background: #f2f2f2;
}

.news-card img {
  width: 200px;
  height: 150px;
  object-fit: cover;
}

.news-card h3 {
  font-weight: bold;
  font-size: 20px;
  color: var(--main-color);
}

.news-card .date {
  color: gray;
}

.news-card p {
  font-size: 14px;
}

@media (max-width: 1600px) {
  .news img {
    width: 100%;
    height: 230px;
  }

  .header {
    margin: 20px 0;
  }
  .header h2 {
    font-size: 24px;
  }

  .header .divider {
    width: 40px;
    height: 3px;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .news-card {
    gap: 10px;
    width: 48%;
    height: 115px;
    transition: 0.4s;
    padding: 10px 10px 15px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .news-card img {
    width: 150px;
    height: 115px;
  }

  .news-card h3 {
    font-size: 17px;
  }

  .news-card .date {
    font-size: 12px;
  }

  .news-card p {
    font-size: 12px;
  }
}

@media (max-width: 999px) {
  .news-card {
    width: 90%;
    height: 170px;
  }
  .news-card img {
    width: 180px;
    height: 130px;
  }

  .news-card h3 {
    font-size: 18px;
  }

  .news-card .date {
    font-size: 13px;
  }

  .news-card p {
    font-size: 13px;
  }
}

@media (max-width: 600px) {
  .news-card img {
    width: 160px;
    height: 110px;
  }

  .news-card h3 {
    font-size: 17px;
  }

  .news-card .date {
    font-size: 12px;
  }

  .news-card p {
    font-size: 12px;
  }
}

@media (max-width: 500px) {
  .news-card {
    flex-direction: column;
    height: auto;
    margin-bottom: 10px;
    width: 100%;
    background: #f2f2f2;
  }

  .news-card img {
    width: 100%;
    height: 210px;
  }
  .news-card h3 {
    font-size: 19px;
  }

  .news-card .date {
    font-size: 14px;
  }

  .news-card p {
    font-size: 14px;
  }
}
</style>
