<template>
    <div class="loyal-lifeline">
        <div class="banner">
            <img src="@/assets/images/loyan-lifeline.png" alt="">
        </div>

        <div class="content">
            <div class="header">
                <h2>Loyal Lifeline Company Limited</h2>
                <div class="divider"></div>
            </div>
            <ul>
                <li>In 2020, Loyal Lifeline company limited was created to serve and satisfy the rising demand for medical consumables and pharmaceutical products during COVID pandemic. This also ensure that the timely distribution of the products </li>
                <li>By utilizing the already established network of marketing and distribution of its sister companies, Loyal Lifeline company limited continue to deliver quality products, customer satisfaction, and with reliable timelines.  </li>
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
        background-image: linear-gradient(to top, rgba(61, 105, 187, 0.5), rgba(190, 170, 57, 0.5));
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
    }

    .banner img {
        width: 50%;
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
    
        .banner img {
            width: 40%;
            object-fit: cover;
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
