<template>
    <div class="mbd">
        <div class="banner">
            <img src="@/assets/images/mbd.png" alt="">
            <h2>Myanmar Booster Distribution</h2>
        </div>

        <div class="content">
            <div class="header">
                <h2>Myanmar Booster Distribution Company Limited</h2>
                <div class="divider"></div>
            </div>
            <ul>
                <li>Myanmar Booster Distribution Co., Ltd. was established in 2010.</li>
                <li>Myanmar Booster Distribution Co., Ltd. Has been taking partnership with ….. principles and marketing and distributing......products accross Myanmar </li>
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
        background-image: linear-gradient(to right, rgba(38, 87, 179, 0.5), rgb(202, 177, 32, .5));
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
        width: 50%;
        margin-left: -30px;
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
    
        .banner img {
            width: 50%;
            margin-left: -30px;
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
</style>
