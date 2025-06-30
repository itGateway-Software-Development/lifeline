<template>
    <div class="mbd">
        <div class="banner">
            <img src="@/assets/images/mbd_banner.jpg" alt="">
        </div>

        <div class="content">
            <div class="header">
                <h2>Myanmar Booster Distribution Company Limited</h2>
                <div class="divider"></div>
            </div>
            <ul>
                <li v-if="locale == 'EN'">To elevate our service standards, in 2010, we have created a sister company with the name of “Myanmar Booster Distribution Company Limited” dedicated to providing even more tailored services. This expansion is geared towards offering an elevated experience to our valued clients. It distributes pharmaceutical products from (5) principles which can cover most of the prescription usage for healthcare services. </li>
                <li v-else>
                    Myanmar Booster Distribution Company Limited ကျွန်မတို့ ကုမ္ပဏီမှ ဝန်ဆောင်မှု အရည်အသွေးများကို မြှင့်တင်သွားရန်အတွက် ၂၀၁၀ ခုနှစ်တွင် Lifeline Company ၏ ကုမ္ပဏီခွဲ(ညီအမ ကုမ္ပဏီ) တစ်ခုအဖြစ် “Myanmar Booster Distribution Company Limited” ကို ထပ်မံတိုးချဲ့ တည်ထောင်ခဲ့ပါသည်။ ကျွန်မတို့ တန်ဖိုးထားရပါသော သုံးစွဲသူများကို ပိုမိုကောင်းမွန်သော ကျန်းမာရေး ဝန်ဆောင်မှုများ ပေးရန် ကျန်းမာရေးစောင့်ရှောက်မှု ကဏ္ဍအတွက် လိုအပ်သော ဆေးဝါးထုတ်လုပ်သူ ကုမ္ပဏီကြီး (၅) ခုမှ ထပ်မံတင်သွင်းဖြန့်ချိနိုင်ခဲ့ပါသည်။  
                </li>
                <li v-if="locale == 'EN'">By utilizing the already established network of marketing and distribution, Myanmar Booster Distribution continue to deliver quality products, customer satisfaction, and reliable timelines.  </li>
                <li v-else>
                    Myanmar Booster Distribution ကုမ္ပဏီ အနေဖြင့် အရည်အသွေးပြည့်ဝသော ဆေးဝါးများ တင်သွင်း၍ သုံးစွဲသူများ စိတ်ကျေနပ်မှုရရှိစေရန်၊ အချိန်မီ ပို့ဆောင်ပေးနိုင်ရန် နဂိုမူလ ရှိထားခဲ့ပြီးသော ဈေးကွက် နှင့် ဖြန့်ချိရေး ကွန်ယက်များကို အသုံးပြုနိုင်ခဲ့ပါသည်။   
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
        justify-content: start;
        align-items: center;
    }

    .banner h2 {
        color: #fff;
        font-weight: bold;
        font-size: 37px;
        margin-left: -50px;
    }

    .banner img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
    
        .banner h2 {
            font-size: 32px;
            margin-left: -60px;
        }
    
        .content {
            margin: 30px auto 20px;
        }
    
        .header h2 {
            font-size: 22px;
        }
    
        .header .divider {
            width: 90px;
        }
    
        .content ul {
            margin: 20px auto 50px;
        }

        .content ul li {
            font-size: 14px;
        }
    }
    @media (max-width: 1100px) {
        .banner img {
            object-fit: fill !important;
        }
    }
</style>
