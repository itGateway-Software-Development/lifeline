<template>
    <div class="patRangsit">
        <img src="@/assets/images/hospital/patRangsit.jpg" alt="">
        <div class="header">
            <h2>Pat Rangsit Hospital </h2>
            <div class="divider"></div>
        </div>
        <div class="content">
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Pat Rangsit Hospital was established in 1985 in accordance with the Social welfare so that patients can be assured to receive a qualified healthcare services with affordable prices. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Pat Rangsit Hospital expand the hospital area by establishing more hospitals in the network , totaling of 3 hospitals, consisting of Pat  Rangsit Hospital , Pat Rangsit 2 Hospital , Rangsit Maternal and Child specialist Hospital .  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Pat Rangsit Hospital is providing essential healthcare services for man, woman and children and specilaised in surgery concerned with heart diseases for international patients with reasonable prices.   </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Pat Rangsit Hospital is located on the Phaholyothin Road and 1 hour drive away from Suvarnabhumi International Airport and is 20 minutes away from Don Mueang International Airport.The renowned tourist attraction shopping malls nearby Pat Rangsit Hospital are Future Park Rangsit and Makro Rangsit Mall.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Address : 733345 Phahonyothin Road , Khu Khot , Lam Luk Ka District , Pathum Thani 12130 Thailand</span>
            </div>
        </div>
        <div class="hospital-img">
            <img src="@/assets/images/hospital/patRangsit.jpg" alt="">
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
    .patRangsit img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }

    .patRangsit .header {
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
        .patRangsit img {
            height: 230px;
        }
    
        .patRangsit .header {
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
