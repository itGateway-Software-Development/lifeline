<template>
    <div class="thonburi">
        <img src="@/assets/images/hospital/thonburi.jpg" alt="">
        <div class="header">
            <h2>Thonburi Bamrungmuang Hospital  </h2>
            <div class="divider"></div>
        </div>
        <div class="content">
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Thonburi Bamrungmuang Hospital was established in 1976 and is the medical centre of Thonburi Healthcare Group PLC (THG), which has been Thailand’s leader of Healthcare Service for over 42 years.   </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Thonburi Bamrungmuang Hospital provides healthcare services through advanced technology for general medical checkup processes, as well as, for dental procedure, eye examination and gastrointestinal scope investigation. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Thonburi Bamrungmuang Hospital is about 45 minutes away from Suvarnabhumi International Airport and around 40 minutes far from Don Mueang International Airport.   

                    The famous Iconsiam and Central World Shopping Mall are located in the area which is approximately 30 minutes away from Thonburi Bamrungmuang Hospital. Likewise, the duration from the hospital to  the renowned Emerald Palace takes around 15 minutes.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Address : 611 Bamrung Mueang Rd , Khlong Maha Nak , Pom Prap Sattru Phai , Bangkok 10100 , Thailand</span>
            </div>
        </div>
        <div class="hospital-img">
            <img src="@/assets/images/hospital/thonburi.jpg" alt="">
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
    .thonburi img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }

    .thonburi .header {
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
        .thonburi img {
            height: 230px;
        }
    
        .thonburi .header {
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
