<template>
  <div class="introduction">
    <img
      data-aos="zoom-in"
      src="@/assets/images/introduction-banner.jpg"
      alt=""
    />
    <div class="content">
      <h2 data-aos="fade-left">Introduction</h2>
      <div data-aos="fade-left" class="divider"></div>
    </div>
    <div class="para">
      <p data-aos="flip-up">
        Lifeline Group of Companies is composed of (3) companies: Lifeline Co.,
        Ltd, Myanmar Booster Distribution Co., Limited (MBD) and Loyal Lifeline
        Company Limited.
      </p>
      <p data-aos="flip-up">
        Lifeline Co., Ltd was established in 2003, making it one of the most
        senior pharmaceutical company in Myanmar.
      </p>
      <p data-aos="flip-up">
        It is owned solely by the Myanmar Nationals, founded with the vision of
        being the best healthcare service provider in Myanmar.
      </p>
      <p data-aos="flip-up">
        Lifeline Group of Companies’ business portfolio include importing,
        marketing and distribution of pharmaceutical products, providing medical
        services for the patients looking for the healthcare services from the
        international hospital in Bangkok, Thailand.
      </p>
      <p data-aos="flip-up">
        Our Head Office is located in Kan street, Hlaing township, Yangon,
        Myanmar.
      </p>
    </div>
    <div class="company-img">
      <img
        data-aos="fade-right"
        src="@/assets/images/head-office1.jpg"
        alt=""
        class="img1"
      />
      <img
        data-aos="fade-left"
        src="@/assets/images/head-office2.jpg"
        alt=""
        class="img2"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.introduction img {
  width: 100%;
  height: 350px;
  object-fit: cover;
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

.company-img {
  margin: 50px auto 30px;
  text-align: right;
}

.company-img .img1 {
  width: 60%;
  float: left;
}

.company-img .img2 {
  width: 50%;
  margin-top: -120px;
}

@media (max-width: 1600px) {
  .introduction img {
    width: 100%;
    height: 270px;
    object-fit: cover;
  }

  .content {
    margin: 30px 0 10px;
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

  .company-img {
    margin: 20px auto 10px;
  }

  .company-img .img1 {
    width: 60%;
    height: 250px;
    float: left;
  }

  .company-img .img2 {
    width: 50%;
    height: 250px;
    margin-top: -100px;
  }
}
</style>
