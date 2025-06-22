<template>
    
    <div class="promotion row" v-if="selectedPromotion">
        <div class="col-lg-2 col-md-4 col-sm-12 p-0 ">
            <div class="menu w-100">
                <router-link to="/service-promotion/promotion" >Back</router-link>
            </div>
        </div>
        <div class="col-lg-10 col-md-8 col-sm-12">
            <div class="header">
                <h2>{{selectedPromotion.title}}</h2>
            </div>
            <div class="img">
                <img :src="selectedPromotion.main_img" alt="">
            </div>
    
            <div class="content">
                <div v-html="selectedPromotion.content"></div>
            </div>
    
            <div class="promo-img">
                <div class="gap-3 mb-3  slider-button ">
                    <button @click="changeImage('prev')" class="btn"><i class="fas fa-arrow-left"></i></button>
                    <button @click="changeImage('prev')" class="btn"><i class="fas fa-arrow-right"></i></button>
                </div>
                <img :src="currentImage" alt="" class="w-100 border rounded">
            </div>
        </div>
        
    </div>
</template>

<script>
import getPromotions from '@/composables/getPromotions';
import { onMounted, ref } from 'vue'
export default {
        props: ['id'],
        setup(props) {
            const latestPromotions = ref([]);
            const selectedPromotion = ref();
            const promotionImages = ref();
            const {promotions, error, load} = getPromotions();

            const currentImageIndex = ref(0);
            const currentImage = ref();
            
            onMounted( async () => {
                await load();
                if(promotions.value.length > 0) {
                    latestPromotions.value = promotions.value;
                    selectedPromotion.value = latestPromotions.value.find(p => p.id == props.id)
                    promotionImages.value = selectedPromotion.value?.promotion_images;
                    currentImage.value = promotionImages.value[currentImageIndex.value];
                    
                }
                window.scrollTo(0,0)
            })

            const changeImage = (status) => {
                if(status == 'prev') {
                    if(currentImageIndex.value == 0) {
                    currentImageIndex.value = promotionImages.value.length - 1;
                    currentImage.value = promotionImages.value[promotionImages.value.length -1];
                    } else {
                    currentImage.value = promotionImages.value[--currentImageIndex.value]
                    }
                } else {
                    if(currentImageIndex.value == promotionImages.value.length -1) {
                    currentImage.value = promotionImages.value[0];
                    currentImageIndex.value = 0;
                    } else {
                    currentImage.value = promotionImages.value[++currentImageIndex.value];
                    }
                }
            }


            return {selectedPromotion, currentImage, changeImage};
        }
    }
</script>

<style scoped>
    .promotion {
        padding: 30px 15%;
    }
    .promotion .menu {
        display: flex;
        flex-direction: column;
        background-color: #e5ecf1;
    }
    
    .promotion .menu a {
        text-decoration: none;
        padding: 11px 25px;
        transition: .3s ease;
        color: #000;
    }
    
    .promotion .menu a:hover {
        background-color: #3a82a3;
        color: #fff;
    }

    .header {
        padding: 0 5%;
        margin-bottom: 40px;
    }
    .header h2 {
        font-size: 24px;
        text-align: center;
        background: #43bd86;
        padding: 15px 10px;
        color: #fff;
    }

    .header i {
        color: rgb(253, 83, 83);
        margin: 0 10px 0 5px;
        transform: rotate(-15deg);
    }
    .img {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img img {
        width: 90%;
        object-fit: cover;
    }

    .content {
        margin: 40px 0 20px;
    }

    .content .promo {
        display: flex;
        gap: 15px;
        margin-bottom: 15px;
    }

    .promo i {
        color: rgb(248, 181, 10);
        padding-top: 5px;
    }

    .promo .fa-phone, .promo .fa-plane-departure {
        color: #0379af;
    }

    .promo span {
        font-size: 17px;
        line-height: 30px;
    }

    .promo ul {
        margin-top: 10px;
    }

    .promo ul li {
        margin-bottom: 10px;
        font-size: 17px;
    }

    .promo-img {
        margin-top: 50px;
        position: relative;
    }

    .promo-img .slider-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0px 20px;
        z-index: 9999;
    }

    .promo-img .slider-button .btn {
        background-color: rgba(3, 120, 175, 0.4);
        backdrop-filter: blur(10px);
    }

    .promo-img img {
        width: 100%;
    }

    @media (max-width: 1600px) {
        .header {
            padding: 0 5%;
            margin-bottom: 30px;
        }
        .header h2 {
            font-size: 19px;
            padding: 15px 0px;
        }
    
        .header i {
            font-size: 17px;
        }
    
        .content {
            margin: 30px 0 20px;
        }
    
        .content .promo {
            display: flex;
            gap: 15px;
            margin-bottom: 10px;
        }
    
        .promo i {
            padding-top: 9px;
            font-size: 14px;
        }
    
        .promo span {
            font-size: 14px;
            line-height: 27px;
        }
    
        .promo ul {
            margin-top: 5px;
        }
    
        .promo ul li {
            margin-bottom: 5px;
            font-size: 14px;
        }
    
        .promo-img {
            margin-top: 50px;
        }
    }
</style>
