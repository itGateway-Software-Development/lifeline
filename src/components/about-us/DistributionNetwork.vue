<template>
  <div class="distribution-network">
    <img
      data-aos="zoom-in"
      src="@/assets/images/distribution-network-banner.jpg"
      alt=""
    />
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
export default {};
</script>

<style scoped>
.distribution-network img {
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

@media (max-width: 1600px) {
  .distribution-network img {
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
}
</style>
