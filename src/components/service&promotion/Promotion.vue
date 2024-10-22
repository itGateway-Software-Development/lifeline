<template>
    <div class="promotion" v-if="promotions">
        <div class="header">
            <h2>{{promotions.title}}</h2>
        </div>
        <div class="img">
            <img :src="promotions.main_img" alt="">
        </div>

        <div class="content">
            <div v-html="promotions.content"></div>
        </div>

        <div class="promo-img">
            <img :src="promotions.info_img" alt="">
        </div>
    </div>
    <h2 v-else class="fw-bold text-center">No Promotions Available !</h2>
</template>

<script>
import getPromotions from '@/composables/getPromotions';
import { onMounted } from 'vue'
    export default {
        setup() {
            const {promotions, error, load} = getPromotions();
            load();
            onMounted(() => {
                window.scrollTo(0,0)
            })
            return {promotions};
        }
    }
</script>

<style scoped>
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
