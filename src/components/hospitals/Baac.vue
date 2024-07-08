<template>
    <div class="vimut">
        <img src="@/assets/images/hospital/BAAC.png" alt="">
        <div class="header">
            <h2>Bangkok Anti-Aging Center (BAAC)</h2>
            <div class="divider"></div>
        </div>
        <div class="content">
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Seeking a holistic approach to wellness and rejuvenation? Look no further than the Bangkok Anti-Aging Center (BAAC).   </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>This integrative medical center in Bangkok, Thailand, specializes to serve health-conscious individuals focused on preventing and reversing the signs of aging.Utilizing a personalized approach, BAAC prioritizes identifying the root cause of health concerns rather than just treating symptoms.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Their unique protocols emphasize cellular repair and revitalization, promoting a more youthful and energetic you.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>BAAC boasts a team of professionals dedicated to creating a positive and effective experience for each patient.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Address : - </span>
            </div>
        </div>
        <div class="hospital-img">
            <img src="@/assets/images/hospital/BAAC.png" alt="">
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
