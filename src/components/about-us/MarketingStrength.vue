<template>
  <div class="marketing-strength">
    <img
      data-aos="zoom-in"
      src="@/assets/images/marketing-strength-banner.jpg"
      alt=""
    />
    <div class="content">
      <h2 data-aos="fade-left">{{  locale == 'EN' ? 'Marketing Strength' : 'ကုမ္ပဏီ၏ အားသာချက်များ  '}}</h2>
      <div data-aos="fade-left" class="divider"></div>
    </div>
    <div class="para">
      <p data-aos="fade-right">
        Lifeline Group of Companies possess several our strengths that
        distinguish us from other companies in the market:
      </p>
      <ol>
        <li data-aos="flip-up" v-if="locale == 'EN'">
          Extensive Product Portfolio: We offer a diverse range of high-quality
          pharmaceutical products, covering a wide range of medical needs and
          disease. This broad portfolio allows us to cater to various market
          segments and ensures a strong market presence.
        </li>
        <li data-aos="flip-up" v-else>
          ဆေးဝါးများ အမျိုးအစားစုံလင်စွာ ရရှိနိုင်ခြင်း  : ကျွန်မတို့သည် ရောဂါအမျိုးမျိုးအတွက် လိုအပ်သော အရည်အသွေးမြင့် ဆေးဝါးအမျိုးမျိုးကို စုံစုံလင်လင် တင်သွင်းဖြန့်ချိလျက်ရှိပါသည်။ သို့ဖြစ်ပါ၍ စျေးကွက်အတွင်း လိုအပ်ချက် အသီးသီးကို ဖြည့်ဆည်းပေးနိုင်သောကြောင့် စျေးကွက်အတွင်းတွင်လည်း ခိုင်ခိုင်မာမာ ရပ်တည်လျက်ရှိပါသည်။  
        </li>
        <li data-aos="flip-up" v-if="locale == 'EN'">
          National Reach and Distribution: With a robust distribution network,
          our products are widely available, reaching customers across the
          country. This extensive reach not only helps in market penetration but
          also establishes our brand as a trusted name in healthcare sector.
        </li>
        <li data-aos="flip-up" v-else>
          နိုင်ငံအနှံ့ ဖြန့်ဖြူးနိုင်သော ဖြန့်ချိရေးကွန်ရက် ပိုင်ဆိုင်ထားခြင်း : ကျွန်မတို့၏ ဆေးဝါး ထုတ်ကုန်များကို မြန်မာနိုင်ငံတစ်ဝှမ်းလုံးရှိ နေရာဒေသများထံသို့ ဖြန့်ဖြူးရောင်းချလျက်ရှိပါသည်။ ယခုကဲ့သို့ နေရာအနှံ့အပြားသို့ ကျယ်ပြန့်စွာ ပို့ဆောင်နိုင်ခြင်းသည် ဈေးကွက်ထိုးဖောက်ရာတွင် အထောက်အကူပြုစေရုံသာမက ကျွန်မတို့၏ ကုမ္ပဏီကို ကျန်းမာရေး စောင့်ရှောက်မှုကဏ္ဍတွင် ယုံကြည်စိတ်ချရသော နာမည်ကောင်းတစ်ခုဖြင့် ရပ်တည်စေရန်လည်း အထောက်အပံ့ဖြစ်စေပါသည်။  
        </li>
        <li data-aos="flip-up" v-if="locale == 'EN'">
          Strategic Partnerships: We have founded strategic partnerships with
          key stakeholders in the healthcare industry, including private and
          government healthcare providers, retail and wholesale distributors,
          and academic institutions. These collaborations enhance our market
          influence and contribute to the success of our marketing campaigns.
        </li>
        <li data-aos="flip-up" v-else>
          မိတ်ဖက်များနှင့် မဟာဗျူဟာမြောက် ပူးပေါင်းထားခြင်း  : ကျွန်မတို့သည် ကျန်းမာရေးစောင့်ရှောက်မှု ကဏ္ဍတွင် အဓိက သက်ဆိုင်သူများဖြစ်သည့် အစိုးရဆေးရုံများ၊ ပုဂ္ဂလိကဆေးရုံများ၊ လက်လီ၊ လက်ကားဖြန့်ဖြူး ရောင်းချသူများ၊ ဆေးဘက်ဆိုင်ရာ အဖွဲ့အစည်းများနှင့် လည်း ပူးပေါင်းဆောင်ရွက်၍ ဝန်‌ဆောင်မှုများပေးလျက်ရှိပါသည်။ 

          ဤပူးပေါင်းဆောင်ရွက်မှုများသည် ကျွန်မတို့ ကုမ္ပဏီ၏ စျေးကွက်အပေါ် လွှမ်းမိုးနိုင်မှုကို မြှင့်တင်ပေးပြီး စျေးကွက်ရှာဖွေရေးအတွက်လည်း အောင်မြင်မှုများစွာရရှိစေပါသည်။  
        </li>
        <li data-aos="flip-up" v-if="locale == 'EN'">
          Qualified Manufacturers and Service Providers: Choosing a qualified
          manufacturer for our goods is a strategic necessity that make sure the
          success of our marketing efforts.
        </li>
        <li data-aos="flip-up" v-else>
          အရည်အသွေးပြည့်မီသော ထုတ်လုပ်သူများနှင့် ဝန်ဆောင်မှုပေးသူများ ပိုင်ဆိုင်ထားခြင်း: ကျွန်မတို့တင်သွင်းမည့် ဆေးဝါးများအတွက် အရေးအကြီးဆုံးသော လိုအပ်ချက်တစ်ခုဖြစ်သည့် အရည်အသွေးပြည့်မီသော ဆေးဝါးများဖြစ်ရေးအတွေက် အရည်အသွေးပြည့်မီပြီး နိုင်ငံတကာ စံချိန်စံညွှန်းများဖြင့်ထုတ်လုပ်သူများထံမှသာ ဆေးဝါးများကို တင်သွင်း ဖြန့်ချိလျက်ရှိပါသည်။  
        </li>
        <li data-aos="flip-up" v-if="locale == 'EN'">
          Regulatory Compliance: Our commitment to regulatory compliance ensure
          confidence in both healthcare professionals and end-users. Adhering to
          the highest industry standards ensures the safety and efficacy of our
          products, with systematic pharmacovigilance measures being in place,
          both healthcare professionals and end-users recognize Lifeline Group
          of Companies as a responsible and trustworthy pharmaceutical provider.
        </li>
        <li data-aos="flip-up" v-else>
          စည်းမျဉ်းစည်းကမ်းများ လေးစားလိုက်နာခြင်း : စည်းမျဉ်းစည်းကမ်းများကို လေးစားစွာ လိုက်နာခြင်းသည် ဆေးဘက်ဆိုင်ရာ အသိုင်းအဝိုင်း နှင့် သုံးစွဲသူများထံမှ ယုံကြည်မှုများရရှိစေပါသည်။ Lifeline Group of Companies သည် ဆေးဝါး ထုတ်လုပ်မှုစံနှုန်းများ၊ သယ်ယူပို့ဆောင်ရာတွင် လိုက်နာရမည့် အချက်များကို စနစ်တကျ လိုက်နာကျင့်ကြံလျက်ရှိပြီး ကျွန်မတို့၏ ဆေးဝါး ထုတ်ကုန်များ၏ ဘေးကင်းမှုနှင့် ထိရောက်မှု အရည်အသွေးကိုလည်း အာမခံနိုင်သည့်အတွက် Lifeline Group of Companies သည် တာဝန်ယူမှုရှိပြီး ယုံကြည်စိတ်ချရသော ကုမ္ပဏီတစ်ခုအဖြစ် အသိအမှတ်ပြုခံထားရပါသည်။  
        </li>
        <li data-aos="flip-up" v-if="locale == 'EN'">
          Customer-Centric Approach: We prioritize the needs and preferences of
          our customers. By actively seeking feedback, addressing concerns
          promptly, and continuously improving our services, we build lasting
          relationships that contribute to positive word-of-mouth and brand
          loyalty.
        </li>
        <li data-aos="flip-up" v-else>
          သုံးစွဲသူ ဗဟိုပြု၍ အလေးထားခြင်း : ကျွန်မတို့ Lifeline Group of Companies သည် သုံးစွဲသူများ၏ လိုအပ်မှုများနှင့် ဦးစားပေး သုံးစွဲမှုများအပေါ် အလေးထားပါသည်။ အကြံပြုချက်များကိုလည်း လက်ခံလိုက်နာခြင်း၊ သုံးစွဲသူများ၏ စိုးရိမ်မှုများကို အမြန်ဆုံးဖြေရှင်းခြင်း နှင့် ဝန်ဆောင်မှုများကိုလည်း စဉ်ဆက်မပြတ် တိုးတက်အောင်လုပ်ဆောင်ခြင်း စသည်တို့အပြင် စားသုံးသူများနှင့် ရေရှည်တည်တံ့စေသော ဆက်ဆံရေးများ တည်ဆောက်ထားသည့်အတွက် နာမည်ကောင်းကို ပိုင်ဆိုင်ထားပါသည်။  
        </li>
      </ol>
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
.marketing-strength img {
  width: 100%;
  height: 350px;
  object-fit: fill;
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
