<template>
    <div class="vimut">
        <img src="@/assets/images/hospital/Ladprao.jpeg" alt="">
        <div class="header">
            <h2>Ladprao General Hospital</h2>
            <div class="divider"></div>
        </div>
        <div class="content">
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Established in 1990 by a consortium of medical professionals, Ladprao General Hospital has become a trusted healthcare provider in Bangkok, Thailand.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Situated conveniently on Ladprao Road between Soi 95 and 97, the hospital boasts a team of qualified doctors and a commitment to modern medical technology.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Ladprao General Hospital caters to a wide range of medical needs, from general check-ups to specialized treatments.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Address : 2699 Ladprao Rd., Khlong Chaokhun Sing, Wang Thong Lang, Bangkok 10310 </span>
            </div>
        </div>
        <div class="hospital-img">
            <img src="@/assets/images/hospital/Ladprao.jpeg" alt="">
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
    export default {
        setup() {
            onMounted(() => {
                window.scrollTo(0,0);
            })
        }
    }
</script>

<style scoped>
    .vimut img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }

    .vimut .header {
        margin: 30px 0 20px;
    }

    .header h2 {
        font-weight: bold;
        color: var(--main-color);
    }

    .header .divider {
        width: 90px;
        height: 3px;
        background-color: var(--sec-color);
    }

    .content .hospital {
        display: flex;
        gap: 10px;
        margin-bottom: 15px;
        line-height: 25px;
    }

    .hospital i {
        padding-top: 5px;
        color: rgb(11, 122, 141);
    }

    .hospital .fa-map-location-dot {
        color: var(--sec-color);
    }

    .hospital-img {
        margin: 50px 0 20px;
    }

    .hospital-img img {
        height: 500px;
        object-fit: contain;
    }

    @media (max-width: 1600px) {
        .vimut img {
            height: 230px;
        }
    
        .vimut .header {
            margin: 20px 0 20px;
        }
    
        .header h2 {
            font-size: 24px;
        }
    
        .header .divider {
            width: 70px;
            height: 3px;
        }
    
        .content .hospital {
            gap: 10px;
            margin-bottom: 15px;
            line-height: 25px;
        }
    
        .hospital i {
            padding-top: 5px;
            font-size: 13px;
        }

        .hospital span {
            font-size: 14px;
        }
    
        .hospital-img img {
            height: 450px;
            object-fit: contain;
        }
    }
</style>
