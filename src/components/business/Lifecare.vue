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
                <li>Lifecare Medical Services was established in 2022 in order to provide medical services for those who seek healthcare services in the International Hospitals of Bangkok. </li>
                <li>
                    Services have partnered up with over 13 international hospitals in Bangkok to make the international healthcare system easily available to the people of Myanmar.
                </li>
                <li>
                    We have carefully selected our partner hospital through high level of standard in healthcare system and hospitality services, making sure our customer will get the kind of healthcare service they are hoping for. 
                </li>
                <li>
                    Lifecare Medical Services will continue its partnership with more international hospitals to ensure that the customer can choose the most suitable hospital and services according to their specific need. 
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
    export default {
        setup() {
            onMounted(() => {
                window.scrollTo(0,0)
            })
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
    
        .banner img {
            width: 40%;
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

