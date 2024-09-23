<template>
    <div class="vimut">
        <img src="@/assets/images/hospital/inbound/grandhantar/banner.png" alt="">
        <div class="header">
            <h2>Grand Hantha International Hospital </h2>
            <div class="divider"></div>
        </div>
        <div class="content">
            <p style="text-indent: 50px;">
                Grand Hantha International Hospital is a leading healthcare provider in Myanmar, offering a wide range of specialized medical services with state-of-the-art facilities. The hospital is renowned for its patient-centered approach, international standards of care, and a team of highly qualified healthcare professionals. As an associate hospital of our network, Grand Hantha International ensures seamless referral services and high-quality treatment for our patients. 
            </p>
            <h4 class="my-3">Key Features and Services: </h4>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Comprehensive Medical Services: Offering a wide range of specialties including cardiology, neurology, orthopedics, and more. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Advanced Diagnostic Technology: Equipped with cutting-edge medical imaging, laboratory, and diagnostic facilities.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Experienced Medical Team: Highly qualified doctors, specialists, and healthcare professionals with international experience. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>24/7 Emergency Care: Round-the-clock emergency services with fast response times and dedicated staff. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Surgical Excellence: Specializing in both minimally invasive and complex surgeries with high success rates. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Patient-Centered Care: Focused on providing a personalized treatment approach tailored to the needs of each individual patient. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>International Standards: Adhering to global healthcare practices and safety standards for quality care.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Address : - </span>
            </div>
        </div>
        <div class="hospital-img">
            <img src="@/assets/images/hospital/inbound/grandhantar/image.jpg" alt="">
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
