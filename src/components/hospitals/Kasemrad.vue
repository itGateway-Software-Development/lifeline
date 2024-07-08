<template>
    <div class="vimut">
        <img src="@/assets/images/hospital/Kasemrad-banner.jpg" alt="">
        <div class="header">
            <h2>Kasemrad International Hospital</h2>
            <div class="divider"></div>
        </div>
        <div class="content">
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Kasemrad International Hospital - Rattanatibeth has been serving the community with comprehensive healthcare,  since 1992.   </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>This private hospital in Nonthaburi, Thailand, offers a focus on preventative care, medical treatment, and overall wellness.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Their team of highly-qualified doctors specialize in various fields, ensuring a well-rounded approach to patient needs.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>The hospital boasts a welcoming atmosphere and prioritizes patient comfort throughout their medical journey. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Address : 60 Moo 6 Kanchanaphisek Road, Sao Thong Hin Subdistrict, Bang Yai District, Nonthaburi 11140, Thailand </span>
            </div>
        </div>
        <div class="hospital-img">
            <img src="@/assets/images/hospital/Kasemrad.jpg" alt="">
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
