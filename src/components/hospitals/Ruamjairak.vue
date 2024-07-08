<template>
    <div class="vimut">
        <img src="@/assets/images/hospital/Ruamjairak.jpg" alt="">
        <div class="header">
            <h2>Ruamjairak Hospital</h2>
            <div class="divider"></div>
        </div>
        <div class="content">
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Established in late 2022, Ruamjairak Hospital @ Sukhumvit 62 is a modern multi-disciplinary general hospital in Bangkok, Thailand.   </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>This 12-story facility offers a 144-bed capacity, ensuring ample space for comprehensive medical care.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Ruamjairak Hospital provide a team of specialist doctors equipped to handle a wide range of medical needs. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>They prioritize patient-centered care and utilize advanced medical technology for effective treatment.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Conveniently located at 77 Sukhumvit 62 Alley, the hospital is easily accessible for residents and visitors seeking quality healthcare in Bangkok.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Address : 77 Sukhumvit 62 Alley, Khwaeng Phra Khanong Nuea, Khet Phra Khanong, Krung Thep Maha Nakhon 10260, Thailand</span>
            </div>
        </div>
        <div class="hospital-img">
            <img src="@/assets/images/hospital/Ruamjairak.jpg" alt="">
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
