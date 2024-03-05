<template>
    <div class="phyathai2">
        <img src="@/assets/images/hospital/phyathai2.jpg" alt="">
        <div class="header">
            <h2>Phyathai 2 Hospital  </h2>
            <div class="divider"></div>
        </div>
        <div class="content">
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Phayathai 2 International Hospital was founded in 1987 and has been providing healthcare services for monthly for an average of 50,000 outpatients and 1,600 inpatients. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Together with the advanced medical techniques and well-experienced healthcare professionals, Phayathai 2 International Hospital provides different medical checkup programmes and variety of treatment procedures. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Phayathai 2 Hospital is located at the heart of of Bangkok which is in Phayathai District and  

                    time taken to arrive Phayathai 2 Hospital is approximately 30 minutes from  both Suvarnabhumi International Airport and Don Mueang International Airport. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>As Phayathai 2 Hospital is located in a popular neighborhood, Central World, Platinum Fashion Mall, Baiyoke Shopping Centre, Four Season Mall, Century The Movie Plaza are available for shopping and recreational activities. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Address : 943 Phaholyothin Road , Phyathai Subdistrict , Phaya Thai , Bangkok 10400 , Thailand</span>
            </div>
        </div>
        <div class="hospital-img">
            <img src="@/assets/images/hospital/phyathai2.jpg" alt="">
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
    .phyathai2 img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }

    .phyathai2 .header {
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
        .phyathai2 img {
            height: 230px;
        }
    
        .phyathai2 .header {
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
