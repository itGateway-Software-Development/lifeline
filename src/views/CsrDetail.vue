<template>
    <div class="csr-detail">
        <img class="w-100 banner" src="@/assets/images/csr.jpg" alt="" />

        <div class="csr-detail-content">
            <div class="mb-3">
                <router-link to="" @click="goback"><i class="fa-solid fa-arrow-left"></i> &nbsp; Back</router-link>
            </div>
            <h4>{{csr.title}}</h4>
            <p>{{csr.content}}</p>

            <div class="car-detail-photos row  border border-5 py-2">
                <div class="col-12 col-sm-6 col-lg-4 mb-3" v-for="(img, index) in csr.media" :key="index">
                    <img class="w-100" :src="img.original_url" alt="" data-bs-toggle="modal" data-bs-target="#picModal" @click="sendUrl(img.original_url)" />
                </div>
            </div>
            <Modal :url="url" />
        </div>
    </div>
</template>

<script>
import Modal from '../components/usable/Modal'
import getCsrDetail from '@/composables/getCsrDetail';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

    export default {
  components: { Modal },
        props: ['id'],
        setup(props) {
            const router = useRouter();

            const url = ref('');

            const sendUrl = (pic_url) => {
                url.value = pic_url;
            }

            const {csr, error, load}  = getCsrDetail();
            load(props.id)

            const goback = () => {
                router.back();
            }

            onMounted(() => {
                scrollTo(0,0)
            })

            return {csr, goback, url, sendUrl}
        }
    }
</script>

<style scoped>
    .csr-detail {
    padding: 20px 14%;
  }

  .csr-detail-content {
    margin-top: 30px;
  }

  .csr-detail-content a {
    text-decoration: none;
    color: #646669;
    font-size: 14px;
  }

  .car-detail-photos {
    margin-top: 50px;
  }

  @media (max-width: 1500px) {
    .csr-detail {
        padding: 20px 9%;
      }
  }

  @media (max-width: 890px) {
    .csr-detail .banner {
        height: 250px;
      }
  }

  @media (max-width: 590px) {
    .csr-detail {
        padding: 20px 3%;
      }
  }
</style>
