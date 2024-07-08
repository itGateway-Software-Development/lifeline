<template>
    <div class="vimut">
        <img style="object-position:bottom;" src="@/assets/images/hospital/Samitivej.jpg" alt="">
        <div class="header">
            <h2>Samitivej Hospitals</h2>
            <div class="divider"></div>
        </div>
        <div class="content">
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Samitivej Hospitals is a premier healthcare group in Thailand, offering internationally accredited care with a focus on patient-centered service.   </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>They operate multiple locations throughout Bangkok, including Sukhumvit, Thonburi, Srinakarin, and Sriracha, providing convenient access for residents and international patients alike.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Each hospital boasts a team of over 400 specialists across various medical disciplines, ensuring comprehensive care for a wide range of needs. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Lifecare Medical Services is currently providing services for medical services from Sukhumvit and Srinakarin Branches. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Address : - </span>
            </div>
        </div>
        <div class="hospital-img">
            <img src="@/assets/images/hospital/Samitivej.jpg" alt="">
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
