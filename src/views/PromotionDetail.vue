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
                <img :src="selectedPromotion.info_img" alt="">
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
            const {promotions, error, load} = getPromotions();
            
            onMounted( async () => {
                await load();
                if(promotions.value.length > 0) {
                    latestPromotions.value = promotions.value;
                    selectedPromotion.value = latestPromotions.value.find(p => p.id == props.id)
                }
                window.scrollTo(0,0)
            })
            return {selectedPromotion};
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
        margin-top: 17px;
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
