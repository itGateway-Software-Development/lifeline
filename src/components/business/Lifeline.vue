<template>
    <div class="lifeline">
        <div class="banner">
            <img src="@/assets/images/lifeline_banner.jpg" alt="">
        </div>
        <div class="content">
            <div class="header">
                <h2>Lifeline Company Limited</h2>
                <div class="divider"></div>
            </div>
            <ul>
                <li v-if="locale == 'EN'">Lifeline Company Limited was established in 2003 with the Vision of “To be the best healthcare service provider in Myanmar”. </li>
                <li v-else>
                    Lifeline Company Limited Lifeline Company Limited ကို “မြန်မာနိုင်ငံတွင် အကောင်းဆုံး ကျန်းမာရေးဝန်ဆောင်မှု ပေးနိုင်သော ကုမ္ပဏီဖြစ်စေရန်” ဟူသော ရည်မှန်းချက်ဖြင့် ၂၀၀၃ ခုနှစ်တွင် စတင် တည်ထောင်ခဲ့ပါသည်။  
                </li>
                <li v-if="locale == 'EN'">Initially there was only 1 principle and 2 products. But now, Lifeline Co., Ltd is currently marketing and distributing the products from 8 principles. </li>
                <li v-else>
                    အစပိုင်းတွင် ဆေးဝါးထုတ်လုပ်သူ Principle (၁) ခုနှင့်သာ ချိတ်ဆက်၍ သွင်းကုန်ဆေးဝါး (၂) မျိုးသာ ရှိခဲ့သော်လည်း ယခုအခါ ဆေးဝါးထုတ်လုပ်သူ Principle (၈) ခုမှ ဆေးဝါးထုတ်ကုန်များကို တိုးချဲ့၍ တရားဝင်တင်သွင်း ဖြန့်ချိလျက်ရှိပါသည်။ Lifeline Company သည် ဆေးဝါးထုတ်လုပ်သူ ကုမ္ပဏီကြီးများရွေးချယ်ရာတွင် နိုင်ငံတကာအရည်အသွေး၊ စံချိန်စံညွှန်း သတ်မှတ်ချက်များနှင့် ကိုက်ညီသော ထုတ်ကုန်များ ရရှိနိုင်သည့် မှန်ကန်သော စီးပွားရေးလုပ်ဖော်ကိုင်ဖက်များကိုသာ ရွေးချယ်ထားပါသည်။ 
                </li>
                <li v-if="locale == 'EN'">Although Lifeline Company is very tedious with the selection process for principles, it is to make sure that we deliver the right business partners who can supply us the products which align with our definition of quality and value. </li>
                <li v-if="locale == 'EN'">From our establishment in a single office, we are proud to announce our growth and expansion.  </li>
                <li v-if="locale == 'EN'">Today, our offices extend to 8 branch offices and 15 sub-distributor offices, strategically located in every states and divisions of Myanmar. These coverages prove our commitment to providing quality service and products, and we look forward to serving our customers with a greater reach and efficiency with timely manner. </li>

                <li v-else>
                    ကျွန်မတို့ ကုမ္ပဏီကို ရုံးခန်းတစ်ခုတည်းဖြင့် စတင်တည်ထောင်ခဲ့ရာမှ  ယနေ့တွင် ကျွန်မတို့ ကုမ္ပဏီသည် မြန်မာနိုင်ငံ၏ တိုင်းဒေသကြီးများနှင့် ပြည်နယ်အသီးသီး၌ ရုံးခွဲ (၈)ခု နှင့် တဆင့်ပြန်လည် ဖြန့်ဖြူးရေး ကိုယ်စားလှယ်ရုံးခွဲ (၁၅) ခုအထိ တိုးချဲ့တည်ထောင် ထားပါသည်။ သို့ဖြစ်ပါ၍ ကျွန်မတို့၏ အရည်အသွေးမြင့် ဆေးဝါး ထုတ်ကုန်များကို မြန်မာနိုင်ငံရှိ နေရာအနှံ့အပြားမှ သုံးစွဲသူများထံ အချိန်နှင့်တပြေးညီ ဝန်ဆောင်မှု ပေးလျက်ရှိပါသည်။   
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

            return {
                locale
            }
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
        font-size: 40px;
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

    .content .img {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content .img img {
        width: 90%;
        height: 400px;
        object-fit: cover;
    }

    @media (max-width: 1600px) {
        .banner {
            width: 100%;
            height: 230px;
            gap: 15px;
            padding-left: 30px;
        }
    
        .banner h2 {
            font-size: 34px;
        }
    
        .content {
            margin: 30px auto 20px;
        }
    
        .header h2 {
            font-size: 22px;
        }
    
        .header .divider {
            width: 60px;
            height: 3px;
        }
    
        .content ul {
            margin: 20px auto 50px;
        }
    
        .content ul li {
            margin-bottom: 12px;
            font-size: 14px;
        }
    
        .content .img img {
            width: 70%;
            height: 300px;
            object-fit: cover;
        }
    }

    @media (max-width: 1100px) {
        .banner img {
            object-fit: fill !important;
        }
    }
</style>
