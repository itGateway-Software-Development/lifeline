<template>
  <div class="welcome">
    <h2 data-aos="fade-right">Welcome To Lifeline Group of Companies</h2>
    <p data-aos="flip-up">
      Lifeline Group of Companies is a group of healthcare companies mainly
      focusing on pharmaceutical products, healthcare products and healthcare
      services. We are located in Myanmar with our headquarter in Yangon and
      many branch offices in different state and divisions of Myanmar.
    </p>
    <p data-aos="flip-up">
      Founded since 2003, we have over 20 years of experience and expertise in
      marketing and distribution of healthcare products and services accessible
      to the majority of population in Myanmar.
    </p>
    <p data-aos="flip-up">
      Our products are of high quality with reasonable price and our services
      being prompt, Lifeline Group of Companies is working constantly to be one
      of the best healthcare providers in Myanmar.
    </p>
    <p data-aos="flip-up">
      Our company is dedicated to delivering diverse products with top-notch
      quality through unwavering commitment and hard work, ensuring exceptional
      quality for our customers. Our medical services are also delivered with a
      warm heart, ensuring both prompt and accurate care.
    </p>
    <br />
    <router-link to="#">Read More</router-link>
  </div>
  <div class="bar">
    <v-progress-linear
      model-value="100"
      height="5"
      striped
      color="#FF8C00"
    ></v-progress-linear>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.welcome {
  padding: 60px 15% 20px;
}

.welcome h2 {
  font-size: 32px;
  font-weight: bolder;
  margin-bottom: 15px;
  color: var(--main-color);
}

.welcome p {
  font-size: 18px;
  text-align: justify;
  text-indent: 50px;
}

.welcome a {
  text-decoration: none;
  background: var(--sec-color);
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
}

.bar {
  padding: 0px 15%;
}

@media (max-width: 1600px) {
  .welcome {
    padding: 60px 9% 20px;
  }

  .welcome h2 {
    font-size: 25px;
    font-weight: bolder;
    margin-bottom: 15px;
    color: var(--main-color);
  }

  .welcome p {
    font-size: 15px;
  }

  .welcome a {
    padding: 5px 15px;
    font-size: 12px;
  }

  .bar {
    padding: 0px 9%;
  }
}

@media (max-width: 1200px) {
  .welcome {
    padding: 60px 3% 20px;
  }
}
</style>
