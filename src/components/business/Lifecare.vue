<template>
    <div class="lifecare">
        <div class="banner">
            <img src="@/assets/images/lifecare_banner.jpg" alt="">
        </div>
        <div class="content">
            <div class="header">
                <h2>Lifecare Medical Service</h2>
                <div class="divider"></div>
            </div>
            <ul>
                <li v-if="locale == 'EN'">Lifecare Medical Services was established in 2022 in order to provide medical services for those who seek healthcare services in the International Hospitals of Bangkok. </li>
                <li v-else>
                    Lifecare Medical Services ထိုင်းနိုင်ငံ၊ ဘန်ကောက်မြို့ရှိ နိုင်ငံတကာအဆင့်မီ ဆေးရုံကြီးများကို သွားရောက်ဆေးကုသမှု ခံယူလိုသူများအတွက် လိုအပ်သော ကျန်းမာရေးဝန်ဆောင်မှုများ ပေးအပ်နိုင်ရန် ၂၀၂၂ ခုနှစ်တွင် Lifecare Medical Services ကို စတင်တည်ထောင်ခဲ့ပါသည်။  
                </li>
                <li v-if="locale == 'EN'">
                    Services have partnered up with over 13 international hospitals in Bangkok to make the international healthcare system easily available to the people of Myanmar.
                </li>
                <li v-else>
                    ဘန်ကောက်မြို့ရှိ နိုင်ငံတကာ အဆင့်မီ ဆေးရုံကြီး (၁၃) ခု နှင့်အထက် ချိတ်ဆက်ထားပြီး မြန်မာပြည်မှတဆင့် နိုင်ငံတကာအဆင့်မီသော ကျန်းမာရေးစောင့်ရှောက်မှုများကို လွယ်လင့်တကူ လက်လှမ်းမီနိုင်ရန်အတွက် ဝန်ဆောင်မှုများ ပေးလျက်ရှိပါသည်။  
                </li>
                <li v-if="locale == 'EN'">
                    We have carefully selected our partner hospital through high level of standard in healthcare system and hospitality services, making sure our customer will get the kind of healthcare service they are hoping for. 
                </li>
                <li v-else>
                    ဆေးကုသမှု သွားရောက်ပြုလုပ်လိုသူများအတွက် နိုင်ငံတကာအဆင့်မီသော ကျန်းမာရေး စောင့်ရှောက်မှုများကို နွေးထွေးပြုငှာစွာ ဝန်ဆောင်မှုများ ပေးအပ်နိုင်သော ဆေးရုံကြီးများကိုသာ ရွေးချယ်၍ ချိတ်ဆက်ထားရှိပါသည်။  
                </li>
                <li v-if="locale == 'EN'">
                    Lifecare Medical Services will continue its partnership with more international hospitals to ensure that the customer can choose the most suitable hospital and services according to their specific need. 
                </li>
                <li v-else>
                    Lifecare Medical Services အနေဖြင့် ကျန်းမာရေးဝန်ဆောင်မှု ရယူလိုသူများ နှင့် ကိုက်ညီသော ဆေးရုံကြီးများကို အဆင်ပြေလွယ်ကူစွာ ရွေးချယ်နိုင်စေရန်အတွက် နောင်အခါတွင်လည်း တခြားသော နိုင်ငံတကာအဆင့်မီ ဆေးရုံကြီးများနှင့် ချိတ်ဆက်လက်တွဲ၍ အကောင်းဆုံး ဝန်ဆောင်မှုများ ပေးသွားမည်ဖြစ်ပါသည်။  
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
        width: 100px;
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
            width: 80px;
            height: 3px;
            background: var(--sec-color);
        }
    
        .content ul {
            margin: 20px auto 50px;
        }
    
        .content ul li {
            margin-bottom: 13px;
            font-size: 14px;
        }
    }
</style>

