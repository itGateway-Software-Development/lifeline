<template>
    <div class="vimut">
        <img src="@/assets/images/hospital/vimut.jpg" alt="">
        <div class="header">
            <h2>Vimut Hospitall</h2>
            <div class="divider"></div>
        </div>
        <div class="content">
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Vimut Hospital is designed in accordance with Joint Commission International (JCI) Standards and offers comprehensive range of medical services including diagnosis and treatment with advanced technology, latest medical equipment, as well as, high quality medications.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Vimut Hospital intends to provide medical services with an exceptional care at affordable prices for international patients. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>It takes about 50 minutes from Suvarnabhumi International Airport to the hospital and 40 minutes away from Don Mueang International Airport. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Moreover, it is also located at the heart of Bangkok and only takes about 30 minutes to visit variety of  tourist attraction malls such as Future Park Rangsit , Makro Rangsit Mall, Big C Supercenter , Central World and Siam Paragon Mall. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Address : 500 Phahonyothin Road , Samsen Nai , Phaya Thai , Bangkok 10400 , Thailand </span>
            </div>
        </div>
        <div class="hospital-img">
            <img src="@/assets/images/hospital/vimut.jpg" alt="">
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
