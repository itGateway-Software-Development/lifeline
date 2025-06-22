<template>
    <div class="mt-5 product-detail">
        <div class="mb-3">
            <router-link to="" @click="goback"><i class="fa-solid fa-arrow-left"></i> &nbsp; Back To Products</router-link>
        </div>
        <br>
        <div class="row">
            <div class="col-12  col-lg-5 mb-5">
                <div class="photo d-flex">
                    <img class="w-100 object-fit-cover" :src="product.image" alt="">
                </div>
            </div>
            <div class="col-12  col-lg-7">
                <div class="details mt-5 ms-0 ms-lg-5">
                    <div class="row align-items-center mb-2">
                        <div class="col-4">
                            <h6 class="fw-bold">{{ $t("product.brand_name") }}</h6>
                        </div>
                        <div class="col-8">
                            <div class="d-flex align-items-center gap-2">
                                <b>:</b>
                                <h4 class="fw-bold">{{product.name}}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-4">
                            <h6 class="fw-bold">{{ $t("product.composition") }}</h6>
                        </div>
                        <div class="col-8">
                            <div class="d-flex align-items-start gap-2">
                                <b>:</b>
                                <div>
                                    <span class="" v-for="(ingr, index) in product.ingredients" :key="index">{{ ingr }}, </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-4">
                            <h6 class="fw-bold">{{ $t("product.presentation") }}</h6>
                        </div>
                        <div class="col-8">
                            <div class="d-flex align-items-start gap-2">
                                <b>:</b>
                                <div>
                                    <span> {{ locale == 'EN' ? product.presentation : product.presentation_mm }} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-4">
                            <h6 class="fw-bold">{{ $t("product.group") }}</h6>
                        </div>
                        <div class="col-8">
                            <div class="d-flex align-items-start gap-2">
                                <b>:</b>
                                <div>
                                    <span> {{ locale == 'EN' ? product.detail_group : product.detail_group_mm }} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-4">
                            <h6 class="fw-bold">{{ $t("product.dose") }}</h6>
                        </div>
                        <div class="col-8">
                            <div class="d-flex align-items-start gap-2">
                                <b>:</b>
                                <div>
                                    <span v-html="locale == 'EN' ? product.dose : product.dose_mm"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-4">
                            <h6 class="fw-bold">{{ $t("product.indication") }}</h6>
                        </div>
                        <div class="col-8">
                            <div style="margin-left: -15px;">
                                <span v-html="locale == 'EN' ? product.indication : product.indication_mm"> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getProduct from '@/composables/getProduct'
import { useRouter } from 'vue-router';
import store from '@/store';
import { computed } from 'vue';

    export default {
        props: ['id'],
        setup(props) {
            const router = useRouter();

            const {product, error, load}  = getProduct();
            load(props.id)

            const goback = () => {
                router.back();
            }

            const locale = computed(() => store.state.locale)

            return {product, goback, locale}
        }
    }
</script>

<style scoped>
.product-detail {
    padding: 20px 15% 30px;
  }

  .product-detail a {
    text-decoration: none;
    color: rgb(112, 113, 116);
    transition: .5s ease;
    font-weight: bold;
  }

  .product-detail a:hover {
    color: #135768;
  }

  .product-detail .photo {
    background: #f2f3f5;
    border-radius: 7px;
    padding: 20px;
  }

  @media (max-width: 991px) {
    .product-detail .photo {
        justify-content: center;
        margin: auto;
    }
  }
</style>
