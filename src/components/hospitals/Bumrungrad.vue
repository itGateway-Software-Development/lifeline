<template>
    <div class="vimut">
        <img src="@/assets/images/hospital/Bumrungrad.png" alt="">
        <div class="header">
            <h2>Bumrungrad International Hospital</h2>
            <div class="divider"></div>
        </div>
        <div class="content">
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Established in 1980, Bumrungrad International Hospital is a highly regarded private medical center located in Bangkok, Thailand.   </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>They are Southeast Asia's largest private hospital and a popular destination for medical tourism. The hospital boasts a wide range of specialties with over 1,300 internationally certified doctors. Bumrungrad is conveniently located near Sukhumvit Road, offering easy access to a variety of restaurants and shops.   </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Address : 33 Soi Sukhumvit 3, Khwaeng Khlong Toei Nuea, Watthana, Krung Thep Maha Nakhon, Thailand.  </span>
            </div>
        </div>
        <div class="hospital-img">
            <img src="@/assets/images/hospital/Bumrungrad.png" alt="">
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
