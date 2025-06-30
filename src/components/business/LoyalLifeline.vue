<template>
    <div class="loyal-lifeline">
        <div class="banner">
            <img src="@/assets/images/loyal_lifeline_banner.jpg" alt="">
        </div>

        <div class="content">
            <div class="header">
                <h2>Loyal Lifeline Company Limited</h2>
                <div class="divider"></div>
            </div>
            <ul>
                <li v-if="locale == 'EN'">In 2020, Loyal Lifeline company limited was created to serve and satisfy the rising demand for medical consumables and pharmaceutical products during COVID pandemic. This also ensure that the timely distribution of the products </li>
                <li v-else>
                    Loyal Lifeline Company Limited Loyal Lifeline Company Limited ကို ကိုဗစ် ကပ်ရောဂါ ကာလအတွင်း ဆေးဝါး နှင့် ဆေးပစ္စည်း လိုအပ်ချက်များကို အချိန်မီ ဖြည့်ဆည်းရန် အတွက် ၂၀၂၀ ခုနှစ်တွင် စတင်တည်ထောင်ခဲ့ပါသည်။ သို့ဖြစ်ပါ၍ ဆေးဝါးဆိုင်ရာ လိုအပ်ချက်များကို အချိန်နဲ့တပြေးညီ တင်သွင်း ဖြန့်ချိနိုင်ခဲ့ပါသည်။  
                </li>
                <li v-if="locale == 'EN'">By utilizing the already established network of marketing and distribution of its sister companies, Loyal Lifeline company limited continue to deliver quality products, customer satisfaction, and with reliable timelines.  </li>
                <li v-else>
                    မူလရှိပြီးသော ကုမ္ပဏီများ၏ ဈေးကွက်တင်ပို့ရေး နှင့် ဖြန့်ချိရေး ကွန်ယက်များကို အသုံးပြု၍ Loyal Lifeline Company သည်လည်း အရည်အသွေးပြည့်မီသော ဆေးဝါးဆိုင်ရာ ထုတ်ကုန်များကို သုံးစွဲသူများ စိတ်တိုင်းကျ အချိန်မီ ပို့ဆောင်ပေးလျက်ရှိပါသည်။  
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import store from '@/store'
    export default {
        setup() {
            const locale = computed(() => store.state.locale)

            onMounted(() => {
                window.scrollTo(0,0)
            })

            return {locale}
        }
    }
</script>

<style scoped>
    .banner {
        width: 100%;
        height: 270px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .banner img {
        width: 100%;
        height: 100%;
    }
    .content {
        margin: 30px auto 20px;
    }

    .header h2 {
        color: var(--main-color);
        font-weight: bold;
    }

    .header .divider {
        width: 150px;
        height: 3px;
        background: var(--sec-color);
    }

    .content ul {
        margin: 30px auto 50px;
    }

    .content ul li {
        margin-bottom: 15px;
        text-align: justify;
    }

    @media (max-width: 1600px) {
        .banner {
            width: 100%;
            height: 230px;
        }
    
       
        .content {
            margin: 30px auto 20px;
        }
    
        .header h2 {
            font-size: 22px;
        }
    
        .header .divider {
            width: 100px;
        }
    
        .content ul {
            margin: 20px auto 50px;
        }
    
        .content ul li {
            font-size: 14px;
        }
    }


</style>
