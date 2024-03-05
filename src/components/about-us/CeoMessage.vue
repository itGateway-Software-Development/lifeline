<template>
  <div class="ceo-message">
    <div class="ceo-image">
      <div class="photo-container" data-aos="zoom-in">
        <img src="@/assets/images/ceo-photo.png" alt="" class="ceo" />
      </div>
      <div class="content">
        <h2>Dr.Mu Mu Win</h2>
        <p>CEO</p>
      </div>
    </div>
    <div class="message-header">
      <h2 data-aos="fade-left">CEO's Message</h2>
      <div data-aos="fade-left" class="divider"></div>
    </div>

    <div class="message">
      <p>Dr.Mu Mu Win, Our Great Leader, always said & practice</p>
      <div class="quote">
        <i class="fa-solid fa-quote-left"></i>
        <h3 data-aos="flip-right">
          "Train to be well, practice to be skillful"
        </h3>
        <i class="fa-solid fa-quote-right"></i>
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
.ceo-image {
  width: 100%;
  height: 350px;
  position: relative;
  background-size: cover;
  background-image: linear-gradient(
    to right,
    rgb(236, 203, 94, 0.5),
    rgb(131, 207, 241)
  );
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo-container {
  width: 250px !important;
  height: 250px !important;
  border-radius: 10px;
  position: absolute;
  left: 0;
  background-image: url("@/assets/images/office-bg.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
}

.ceo {
  width: 100% !important;
  height: 250px !important;
  border-radius: 100%;
  background: transparent;
  object-fit: cover;
}

.content h2 {
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
  font-size: 26px;
}

.content p {
  font-weight: bold;
  font-size: 20px;
  color: rgb(206, 161, 48);
}

.message-header,
.message {
  margin-top: 30px;
}

.message-header h2 {
  color: var(--main-color);
  margin-bottom: 0px;
}

.message-header .divider {
  width: 80px;
  height: 5px;
  background-color: var(--sec-color);
}

.message p {
  color: #5e5a5a;
}

.message .quote {
  padding: 30px 200px 10px 100px;
  display: flex;
  flex-direction: column;
}

.message h3 {
  margin: 10px auto;
  color: var(--sec-color);
  font-weight: bold;
}

.quote .fa-quote-left {
  align-self: start;
  color: var(--main-color);
}

.quote .fa-quote-right {
  align-self: end;
  color: var(--main-color);
}

@media (max-width: 1600px) {
  .ceo-image {
    width: 100%;
    height: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .photo-container {
    width: 200px !important;
    height: 200px !important;
    margin-left: 40px;
  }

  .ceo {
    height: 100% !important;
  }

  .content {
    margin-left: 30px;
  }

  .content h2 {
    margin-bottom: 20px;
  }

  .content p {
    font-size: 20px;
  }

  .message-header h2 {
    color: var(--main-color);
    margin-bottom: 0px;
    font-size: 24px;
  }

  .message-header .divider {
    width: 50px;
    height: 3px;
  }

  .message p {
    font-size: 18px;
  }

  .message .quote {
    padding: 20px 150px 10px 50px;
  }

  .message h3 {
    margin: 10px auto;
    font-size: 22px;
  }

  .quote .fa-quote-left,
  .fa-quote-right {
    font-size: 16px;
  }
}
</style>
