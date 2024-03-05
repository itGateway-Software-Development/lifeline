<template>
    <div class="medpark">
        <img src="@/assets/images/hospital/medpark-banner.png" alt="">
        <div class="header">
            <h2>MedPark Hospital</h2>
            <div class="divider"></div>
        </div>
        <div class="content">
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>MedPark Hospital was established from the cooperation of Mahaichai Hospital Public Company Limited and diverse medical professionals with over 30 years of experience in healthcare industry. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>MedPark Hospital is located at the heart of new business district of Rama IV Road in Bangkok and the duration to reach Medpark Hospital from both Suvurnabhumi International Airport and Don Mueang International Airport usually takes about 30 minutes.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>In the vicinity of MedPark Hospital, Central World, Lotus’s Rama 4, Central Rama 3, Big C Extra and other renowned shopping malls are easily accessible for recreation purpose and shopaholics. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>MedPark Hospital is an international hospital with more than 200 medical officers together with specialists from more than 30 fields of medicine. At full operation, the hospital can provide outpatients in 300 examination rooms and provide beds for 550 inpatients including 130 intensive care beds.  </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>With the cooperation of specialists from respective medical fields, MedPark Hospital can provide state-of-the-art services through the use of comprehensive complement of advanced medical equipment includes PET-CT, MRI3 Tesla, SPECT-CT, Nuclear Medicine, Radiation Therapy (LINAC machine) and a Hybriad Operating Theater. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-hospital"></i>
                <span>Last but not least, Air Ambulance Service provided by MedPark Hospital makes the patients readily accessible to the quality of healthcare services even in the need of emergency care. </span>
            </div>
            <div class="hospital">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Address: 3333 Rama IV Rd, Khlong Toei, Bangkok 10110 </span>
            </div>
        </div>
        <div class="hospital-img">
            <img src="@/assets/images/hospital/medpark.jpeg" alt="">
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
    .medpark img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }

    .medpark .header {
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
        .medpark img {
            height: 230px;
        }
    
        .medpark .header {
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
