<template>
  <div class="milestone">
    <div class="img">
      <img data-aos="zoom-in" src="@/assets/images/milestone.png" alt="" />
    </div>

    <div class="header">
      <h2 data-aos="fade-left">Company Milestones</h2>
      <div data-aos="fade-left" class="divider"></div>
    </div>

    <ul>
      <li data-aos="flip-up">Lifeline Co.,Ltd. was established since 2003.</li>
      <li data-aos="flip-up">
        Our journey started with 1 principle, with 2 products and only 8 staffs.
      </li>
      <li data-aos="flip-up">Professional Doctors & Pharmacist - 13 Person.</li>
      <li data-aos="flip-up">
        Now, Lifeline is doing its main functions through 17 principles,
        marketing
      </li>
      <li data-aos="flip-up">
        and distributing 162 products nationwide which are being distributed
        through 8 Branch Offices, 13 Sub-distributer Offices, and currently
        employing 279 Members.
      </li>
    </ul>
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
.img {
  width: 100%;
  height: 300px;
  background: #f8f6f6;
}

.img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: transparent;
}

.header {
  margin: 30px 0 20px;
}

.header h2 {
  font-weight: bold;
  font-size: 26px;
  color: var(--main-color);
}

.header .divider {
  width: 80px;
  height: 3px;
  background: var(--sec-color);
}

ul li {
  margin-bottom: 10px;
}
</style>
