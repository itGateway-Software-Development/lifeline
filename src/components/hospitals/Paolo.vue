<template>
    <div class="paolo">
        <img src="@/assets/images/hospital/paolo.jpg" alt="">
        <div class="header">
            <h2>Paolo Hospital Phaholyothin  </h2>
            <div class="divider"></div>
        </div>
        <div class="content">
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Paolo International  Hospital was established in 1972 and provides affrodable services for different medical checkup programmes and variety of treatment procedures. Furthermore, Paolo Hospital Phaholyothin is regarded as the member of Bangkok Dusit Medical Services (BDMS )group. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Paolo Hospital is comprised of well-trained medical personnel in order to act as a center for Healthcare services which provides a better quality of life. Paolo Hospital Phaholyothin has different types of specialised services for surgical procesures, gastroenterology and hemorrhoidectomy. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Paolo Hospital is 45 minutes away from Suvarnabhumi International Airport and only 20 minutes far from Don Mueang International Airport. Tourist attractions such as Central World and Big C supercenter are situated in the same Phayathai Area with the Paolo Hospital’s location, however, it takes around 40 minutes to get those places from the hospital. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Address : 670/1 Phahonyothin Rd , Samsen Nai , Phaya Thai , Bangkok</span>
            </div>
        </div>
        <div class="hospital-img">
            <img src="@/assets/images/hospital/paolo.jpg" alt="">
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
    .paolo img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }

    .paolo .header {
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
        .paolo img {
            height: 230px;
        }
    
        .paolo .header {
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
