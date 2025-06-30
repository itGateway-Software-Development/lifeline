<template>
  <div class="introduction">
    <img
      data-aos="zoom-in"
      src="@/assets/images/introduction_banner.jpg"
      alt=""
    />
    <div class="content">
      <h2 data-aos="fade-left">{{locale == 'EN' ? 'Introduction' : 'မိတ်ဆက်'}}</h2>
      <div data-aos="fade-left" class="divider"></div>
    </div>
    <div class="para">
      <p data-aos="flip-up" v-if="locale == 'EN'">
        Lifeline Group of Companies is composed of (3) companies: Lifeline Co.,
        Ltd, Myanmar Booster Distribution Co., Limited (MBD) and Loyal Lifeline
        Company Limited.
      </p>
      <p data-aos="flip-up" v-if="locale == 'EN'">
        Lifeline Co., Ltd was established since 2003, making it one of the reputable company in Myanmar.
      </p>
      <p data-aos="flip-up" v-else>
        ကျွန်မတို့ Lifeline Group of Companies တွင် Lifeline Co., Ltd, Myanmar Booster Distribution Co., Limited (MBD) နှင့် Loyal Lifeline Company Limited ဟူ၍ ကုမ္ပဏီ (၃) ခုဖြင့် တည်ထောင်ထားပါသည်။ Lifeline Co., Ltd ကို ၂၀၀၃ ခုနှစ်မှ စတင်တည်ထောင်ခဲ့ခြင်းဖြစ်ပြီး မြန်မာနိုင်ငံတွင် ဂုဏ်သတင်း မွှေးပျံ့သော ကုမ္ပဏီတစ်ခု ဖြစ်ပါသည်။   
      </p>
      
      <p data-aos="flip-up" v-if="locale == 'EN'">
        It is owned solely by the Myanmar Nationals, founded with the vision of
        being the best healthcare service provider in Myanmar.
      </p>
      <p data-aos="flip-up" v-else>
        မြန်မာလူမျိုးများသာ ပိုင်ဆိုင်သော ကုမ္ပဏီတစ်ခု ဖြစ်ကာ မြန်မာနိုင်ငံတွင် အကောင်းဆုံးသော ကျန်းမာရေး ဝန်ဆောင်မှု ပေးအပ်နိုင်သော ကုမ္ပဏီတစ်ခု ဖြစ်စေရန် ရည်မှန်းချက်ဖြင့် တည်ထောင်ခဲ့ခြင်း ဖြစ်ပါသည်။     
      </p>
      <p data-aos="flip-up" v-if="locale == 'EN'">
        Lifeline Group of Companies’ business portfolio include importing,
        marketing and distribution of pharmaceutical products, providing medical
        services for the patients looking for the healthcare services from the
        international hospital in Bangkok, Thailand.
      </p>
      <p data-aos="flip-up" v-else>
        Lifeline Group of Companies ၏ အဓိက လုပ်ငန်းများအနေဖြင့် မြန်မာနိုင်ငံသို့ ပြည်ပမှ အရည်အသွေးမြင့် ဆေးဝါးများ တင်သွင်းခြင်း၊ ဈေးကွက်ရှာဖွေခြင်း နှင့် ဖြန့်ဖြူးရောင်းချခြင်းတို့အပြင် မြန်မာနိုင်ငံမှတစ်ဆင့် ထိုင်းနိုင်ငံသို့ ဆေးကုသမှုသွားရောက်လိုသော လူနာများအတွက် ဘန်ကောက်မြို့ရှိ နိုင်ငံတကာ အဆင့်မီ ဆေးရုံကြီးများနှင့် ချိတ်ဆက်၍လည်း ကျန်းမာရေးဝန်ဆောင်မှုများ ပေးလျက်ရှိပါသည်။       
      </p>
      <p data-aos="flip-up" v-if="locale == 'EN'">
        Our Head Office is located in Kan street, Hlaing township, Yangon,
        Myanmar.
      </p>
      <p data-aos="flip-up" v-else>
        ကျွန်မတို့ Lifeline Group of Companies ၏ ရုံးချုပ်သည် အမှတ်(၁၃)၊ လှိုင်မြင့်မိုရ် (၇) လမ်း၊ ကန်လမ်း အနီး၊ (၁၀)ရပ်ကွက်၊ လှိုင်မြို့နယ်၊ ရန်ကုန်မြို့တွင် တည်ရှိပါသည်။         
      </p>
    </div>
  </div>
</template>

<script>
  import store from '@/store';
  import { computed } from 'vue';

  export default {
    setup() {
      const locale = computed(() => store.state.locale)

      return {locale}
    }
  };
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
}
</style>
