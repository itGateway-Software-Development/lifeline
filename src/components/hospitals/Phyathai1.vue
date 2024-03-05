<template>
    <div class="phyathai1">
        <img src="@/assets/images/hospital/Phyathai1.jpg" alt="">
        <div class="header">
            <h2>Phyathai 1 Hospital</h2>
            <div class="divider"></div>
        </div>
        <div class="content">
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Phayathai 1 International Hospital was founded in 1976 and has been providing healthcare services for average 40,000 patients per month.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Along with the cooperation of well experienced specialists, skillfull healthcare professionals and the use of high technology and  equipments, patients can get all in one services with affordable costs and premium quality customer care. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>The location of Phayathai 1 Hospital is in Phayathai District, downtown area of Bangkok, which usually takes approximately 40 minutes from Suvarnabhumi International Airport and 30 minutes from Don Mueang International Airport. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>The well-known Central World Shopping Centre, Platinum Fashion Mall, Baiyoke Shopping Centre, Four Season Mall, Century The Movie Plaza are located in the neighborhood of Phayathai 1 Hospital. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Address: 364, 1 Thanon Si Ayutthaya, Thanon Phaya Thai, Ratchathewi, Bangkok 10400, Thailand </span>
            </div>
        </div>
        <div class="hospital-img">
            <img src="@/assets/images/hospital/Phyathai1.jpg" alt="">
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
    .phyathai1 img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }

    .phyathai1 .header {
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
        .phyathai1 img {
            height: 230px;
        }
    
        .phyathai1 .header {
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
