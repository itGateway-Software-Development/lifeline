<template>
    <div class="vejthani">
        <img src="@/assets/images/hospital/vejthani-banner.png" alt="">
        <div class="header">
            <h2>Vejthani Hospital</h2>
            <div class="divider"></div>
        </div>
        <div class="content">
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Vejthani Hospital, established in 1994, is one of the leading private international hospitals in Thailand that provides JCI accredited quaternary health care services.</span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Cutting-edge medical technologies, internationally trained specialists and world-class health care standards are key competencies of Vejthani Hospital. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Vejthani Hospital is serving over 300,000 patients from over 100 countries for a wide range of medical checkups and other healthcare procedures. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Since Vejthani Hospital orthopedic center is referred as the King of Bones building by its patients,  the hospital provides premium quality surgical procedures with the use of advanced technologies for both spines and other orthopedic disesases. 
                    Furthermore, rehabilitation center from Vejthani Hospital serves for patients with needs for physiotherapy section.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Air Ambulance Service is also available for patients for both domestic and international patients with urgent care. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Vejthani Hospital is located in Bang Kapi District which is approximately 30 minutes drive from Suvarnabhumi International Airport and about 40 minutes drive from Don Mueang International Airport. Additionally, Vejthani  hospital is close to Mall Bang Kapi, the Paseo Ramkhamhaeng, Tesco Lotus and Makro Bangkapi Mall.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Address: 1 Soi Lat Phrao 111, Khlong Chan, Bang Kapi District, Bangkok 10240, Thailand </span>
            </div>
        </div>
        <div class="hospital-img">
            <img src="@/assets/images/hospital/vejthani.jpg" alt="">
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
    .vejthani img {
        width: 100%;
        height: 300px;
        object-fit: fill;
    }

    .vejthani .header {
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
        .vejthani img {
            height: 230px;
        }
    
        .vejthani .header {
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
