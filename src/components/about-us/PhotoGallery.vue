<template>
    <div class="photo-gallery">
        <h2>Lifeline's Photo Gallery</h2>
        <div class="d-flex justify-content-end align-items-center gap-3 year-row">
            <h3 class="text-end me-3">Best Momeries</h3>
            <div class="w-25">
                <v-select
                    label="Choose Year"
                    :items="['All','2024', '2023', '2022', '2021', '2020', '2019']"
                    variant="underlined"
                    class="year-select"
                    v-model="selectedYear"
                ></v-select>
            </div>
            <i class="fa-solid fa-magnifying-glass fs-5 text-end"></i>
        </div>
        <div class="photo-view">
            <div class="row mt-5">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"  v-for="(photo,i) in filteredPhotos" :key="i">
                    <img class="w-100" :src="photo.img" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue';
    export default {
        setup() {
            const photos = [
                {
                    img: require('@/assets/images/photo_gallery/1.png'),
                    year: '2024'
                },
                {
                    img: require('@/assets/images/photo_gallery/2.png'),
                    year: '2024'
                },
                {
                    img: require('@/assets/images/photo_gallery/3.png'),
                    year: '2024'
                },
                {
                    img: require('@/assets/images/photo_gallery/4.png'),
                    year: '2023'
                },
                {
                    img: require('@/assets/images/photo_gallery/5.png'),
                    year: '2023'
                },
                {
                    img: require('@/assets/images/photo_gallery/6.png'),
                    year: '2023'
                },
                {
                    img: require('@/assets/images/photo_gallery/7.png'),
                    year: '2022'
                },
                {
                    img: require('@/assets/images/photo_gallery/8.png'),
                    year: '2022'
                },
                {
                    img: require('@/assets/images/photo_gallery/9.png'),
                    year: '2022'
                },
                {
                    img: require('@/assets/images/photo_gallery/10.png'),
                    year: '2021'
                },
                {
                    img: require('@/assets/images/photo_gallery/11.png'),
                    year: '2021'
                },
            ];

            const selectedYear = ref('All');
            const filteredPhotos = ref([]);

            const filterProduct = () => {
                if(selectedYear.value == 'All') {
                    filteredPhotos.value = photos;
                } else {
                    filteredPhotos.value = photos.filter(photo => photo.year == selectedYear.value);
                }
            }

            watch(selectedYear, () => {
                filterProduct();
            })

            onMounted(() => {
                filteredPhotos.value = photos;
            })

            return {filteredPhotos, selectedYear}
        }
    }
</script>

<style scoped>
    .photo-gallery {
        position: relative;
    }
    .photo-gallery h2{
        font-family: "Freeman", sans-serif;
        color: #78909C;
        margin-bottom: 40px;
    }

    .photo-gallery .year-row {
        position: sticky;
        top: 45px;
        background: #fff;
    }

    .photo-gallery h3 {
        font-family: "Courgette", cursive;
        font-weight: 400;
        font-style: normal;
        color:#0288D1;
    }

    .photo-gallery img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
    }
</style>
