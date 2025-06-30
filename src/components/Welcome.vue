<template>
  <div class="welcome">
    <h2 data-aos="fade-right">{{ locale == 'EN' ? 'Welcome To Lifeline Group of Companies' : 'Lifeline Group of Companies မှ နှုတ်ခွန်းဆက်ပါတယ်။ ' }}</h2>
    <p data-aos="flip-up" v-if="locale == 'EN'">
      Lifeline Group of Companies is a group of healthcare companies mainly
      focusing on pharmaceutical products, healthcare products and healthcare
      services. We are located in Myanmar with our headquarter in Yangon and
      many branch offices in different state and divisions of Myanmar.
    </p> 

    <p data-aos="flip-up" v-else>
      Lifeline Group of Companies သည် ဆေးဝါးများ နှင့် ကျန်းမာရေးဆိုင်ရာ ထုတ်ကုန်ပစ္စည်းများကို အဓိက တင်သွင်းဖြန့်ချိလျက်ရှိပြီး ကျန်းမာရေး ဝန်ဆောင်မှုများကိုပါ ပေးလျက်ရှိသော ကုမ္ပဏီလုပ်ငန်းစု တစ်ခုဖြစ်ပါသည်။ ရန်ကုန်မြို့တွင် ရုံးချုပ်ကို တည်ထောင်ဖွင့်လှစ်ထားပြီး မြန်မာနိုင်ငံ၏ တိုင်းဒေသကြီးနှင့် ပြည်နယ်အသီးသီးတွင်လည်း ရုံးခွဲများ ဖွင့်လှစ်ထားရှိပါသည်။   
    </p>
    <p data-aos="flip-up" v-if="locale == 'EN'">
      Founded since 2003, we have over 20 years of experience and expertise in
      marketing and distribution of healthcare products and services accessible
      to the majority of population in Myanmar.
    </p>
    <p data-aos="flip-up" v-else>
      ကျွန်မတို့ ကုမ္ပဏီကို ၂၀၀၃ ခုနှစ်တွင် စတင် တည်ထောင်ခဲ့ခြင်းဖြစ်ပြီး မြန်မာနိုင်ငံတဝှမ်းလုံးရှိ ပြည်သူများထံ အရည်အသွေးမြင့် ဆေးဝါးများ၊ ကျန်းမာရေးဆိုင်ရာ ထုတ်ကုန်ပစ္စည်းများ ဖြန့်ဖြူး ရောင်းချခြင်းအပြင် ကျန်းမာရေးဝန်ဆောင်မှုပေးခဲ့သည်မှာ နှစ်(၂၀) ကျော် ကြာမြင့်ခဲ့ပြီ ဖြစ်ပါသည်။  
    </p>
    <p data-aos="flip-up" v-if="locale == 'EN'">
      Our products are of high quality with reasonable price and our services
      being prompt, Lifeline Group of Companies is working constantly to be one
      of the best healthcare providers in Myanmar.
    </p>
    <p data-aos="flip-up" v-else>
      ကျွန်မတို့ ကုမ္ပဏီသည် အရည်အသွေးမြင့်မားပြီး ဈေးနှုန်းသင့်တင့်မျှတသော ဆေးဝါးများကို မြန်ဆန်တိကျသော ဝန်ဆောင်မှုများဖြင့် ဖြန့်ဖြူး ရောင်းချလျက်ရှိပါသည်။ Lifeline Group of Companies ကို မြန်မာနိုင်ငံ၏ အကောင်းဆုံး ကျန်းမာရေးဝန်ဆောင်မှုများပေးနိုင်သည့် ကုမ္ပဏီလုပ်ငန်းစုတစ်ခုဖြစ်အောင်လည်း စဉ်ဆက်မပြတ် ကြိုးပမ်းလျက်ရှိပါသည်။  
    </p>
    <p data-aos="flip-up" v-if="locale == 'EN'">
      Our company is dedicated to delivering diverse products with top-notch
      quality through unwavering commitment and hard work, ensuring exceptional
      quality for our customers. Our medical services are also delivered with a
      warm heart, ensuring both prompt and accurate care.
    </p>
    <p data-aos="flip-up" v-else>
      ကျွန်မတို့ Customer များအတွက် အရည်အသွေးအမြင့်ဆုံး ဆေးဝါးများကို အကောင်းဆုံး ဝန်ဆောင်မှု ပေးနိုင်ရန် အစဉ်အမြဲကြိုးစားလျက်ရှိပြီး ကျန်းမာရေး စောင့်ရှောက်မှုများကိုလည်း နွေးထွေးစွာ ဝန်ဆောင်မှုများ ပေးလျက်ရှိပါသည်။  
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
