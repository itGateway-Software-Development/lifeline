<template>
    <div class="lifecare">
        <div class="banner">
            <img src="@/assets/images/lifecare.png" alt="">
            <!-- <h2>Lifecare Company Limited.</h2> -->
        </div>
        <div class="content">
            <div class="header">
                <h2>Lifecare Medical Service</h2>
                <div class="divider"></div>
            </div>
            <ul>
                <li>Lifecare Medical Service was founded in 2022 under Loyal Lifeline Co.,Ltd.</li>
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
        justify-content: center;
        align-items: center;
        gap: 25px;
        padding-left: 35px;
    }

    .banner img {
        width: 40%;
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

