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
                <li>Lifeline Company Limited was established in 2003 with the Vision of “To be the best healthcare service provider in Myanmar”. </li>
                <li>Initially there was only 1 principle and 2 products. But now, Lifeline Co., Ltd is currently marketing and distributing the products from 8 principles. </li>
                <li>Although Lifeline Company is very tedious with the selection process for principles, it is to make sure that we deliver the right business partners who can supply us the products which align with our definition of quality and value. </li>
                <li>From our establishment in a single office, we are proud to announce our growth and expansion.  </li>
                <li>Today, our offices extend to 8 branch offices and 15 sub-distributor offices, strategically located in every states and divisions of Myanmar. These coverages prove our commitment to providing quality service and products, and we look forward to serving our customers with a greater reach and efficiency with timely manner. </li>
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
