<template>
  <div class="marketing-strength">
    <img
      data-aos="zoom-in"
      src="@/assets/images/marketing-strength-banner.png"
      alt=""
    />
    <div class="content">
      <h2 data-aos="fade-left">Marketing Strength</h2>
      <div data-aos="fade-left" class="divider"></div>
    </div>
    <div class="para">
      <p data-aos="fade-right">
        Lifeline Group of Companies possess several marketing strengths that
        distinguish us from other companies in the market:
      </p>
      <ol>
        <li data-aos="flip-up">
          Extensive Product Portfolio: We offer a diverse range of high-quality
          pharmaceutical products, covering a wide range of medical needs and
          disease. This broad portfolio allows us to cater to various market
          segments and ensures a strong market presence.
        </li>
        <li data-aos="flip-up">
          National Reach and Distribution: With a robust distribution network,
          our products are widely available, reaching customers across the
          country. This extensive reach not only helps in market penetration but
          also establishes our brand as a trusted name in healthcare sector.
        </li>
        <li data-aos="flip-up">
          Strategic Partnerships: We have founded strategic partnerships with
          key stakeholders in the healthcare industry, including private and
          government healthcare providers, retail and wholesale distributors,
          and academic institutions. These collaborations enhance our market
          influence and contribute to the success of our marketing campaigns.
        </li>
        <li data-aos="flip-up">
          Qualified Manufacturers and Service Providers: Choosing a qualified
          manufacturer for our goods is a strategic necessity that make sure the
          success of our marketing efforts.
        </li>
        <li data-aos="flip-up">
          Regulatory Compliance: Our commitment to regulatory compliance ensure
          confidence in both healthcare professionals and end-users. Adhering to
          the highest industry standards ensures the safety and efficacy of our
          products, with systematic pharmacovigilance measures being in place,
          both healthcare professionals and end-users recognize Lifeline Group
          of Companies as a responsible and trustworthy pharmaceutical provider.
        </li>
        <li data-aos="flip-up">
          Customer-Centric Approach: We prioritize the needs and preferences of
          our customers. By actively seeking feedback, addressing concerns
          promptly, and continuously improving our services, we build lasting
          relationships that contribute to positive word-of-mouth and brand
          loyalty.
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.marketing-strength img {
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
  font-size: 18px;
  font-weight: bold;
}

.marketing-strength ol li {
  font-size: 17px;
  line-height: 30px;
  margin-bottom: 20px;
}

@media (max-width: 1600px) {
  .marketing-strength img {
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
