<template>
    <div class="lifeline">
        <div class="banner">
            <img src="@/assets/images/ll.png" alt="">
            <h2>Lifeline Company Limited.</h2>
        </div>
        <div class="content">
            <div class="header">
                <h2>Lifeline Company Limited</h2>
                <div class="divider"></div>
            </div>
            <ul>
                <li>Lifeline Co., Ltd. was established since 2003.</li>
                <li>Our journey started with 1 principle, with 2 products and only 8 staffs.</li>
                <li>Professional Doctors & Pharmacist – 13 Person.</li>
                <li>Now, Lifeline is doing its main function through 17 principles, marketing </li>
                <li>and distributing 162  products nationwide which are being distributed 
                    through 8 Branch Offices, 13 Sub-distributer Offices, and currently
                     employing  279 Members.</li>
            </ul>

            <div class="img">
                <img src="@/assets/images/lifeline-group.jpg" alt="">
            </div>
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
        gap: 15px;
        padding-left: 30px;
    }

    .banner h2 {
        color: #fff;
        font-weight: bold;
        font-size: 40px;
    }

    .banner img {
        width: 30%;
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
    
        .banner img {
            width: 25%;
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
</style>
