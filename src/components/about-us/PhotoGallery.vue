<template>
    <div class="photo-gallery">
        <div v-if="isLoading">
            <Loading />
        </div>
        <h2>Lifeline's Photo Gallery </h2>
        <div class="d-flex justify-content-end align-items-center gap-3 year-row">
            <h3 class="text-end me-3">Best Momeries</h3>
            <div class="w-25">
                <v-select
                    label="Choose Title"
                    :items="titles"
                    item-title="name"
                    item-value="value"
                    variant="underlined"
                    class="year-select"
                    v-model="selectedTitle"
                ></v-select>
            </div>
            <i class="fa-solid fa-magnifying-glass fs-5 text-end"></i>
        </div>
        <div class="photo-view">
            <div class="row ms-1 mt-5">
                <div class="col-12 col-sm-6 pe-0 col-lg-4 mb-3" v-for="(photo,i) in photo_array" :key="i">
                    <div class="border w-100" style="height: 300px;">
                        <img class="w-100 h-100" style="object-fit:cover;" @click="sendUrl(photo.original_url)" :src="photo.original_url" alt="" data-bs-toggle="modal" data-bs-target="#picModal">
                    </div>
                </div>
            </div>
            <Modal :url="url" />
        </div>
    </div>
</template>

<script>
import Modal from '../usable/Modal'
import Loading from '../Loading'
import { onMounted, ref, watch } from 'vue';
import getPhotoGallery from "@/composables/getPhotoGallery";

    export default {
        components: {Modal, Loading },
        props: ['selectYear'],
        setup(props) {

            const selectedYear = ref(props.selectYear);
            const selectedTitle = ref('all');
            const filteredPhotos = ref([]);
            let photo_array = ref([]);
            let isLoading = ref(true);
            const url = ref('');

            const titles = [
                {name: 'All', value: 'all'},
                {name: 'Donation', value: 'donation'},
                {name: 'CSR', value: 'csr'},
                {name: 'Academic Activities', value: 'academic_acitivity'},
                {name: 'Events', value: 'events'},
            ]

            const {photo_gallery, years, error, load} = getPhotoGallery();

            const loadPhotos = async() => {
                await load();
                filterProduct();
            }

            const sendUrl = (img_url) => {
                url.value = img_url;
            }

            const filterProduct = () => {
                if(selectedTitle.value == 'all' && selectedYear.value == 'All') {
                    filteredPhotos.value = photo_gallery.value.map(photo => photo.media);

                    photo_array.value = [];
                    for(const gallery of filteredPhotos.value) {
                        for(const media of gallery) {
                            photo_array.value.push(media)
                        }
                    }
                } else if(selectedTitle.value == 'all' && selectedYear.value != 'All') {
                    filteredPhotos.value = photo_gallery.value.filter(photo => photo.date == selectedYear.value);

                    photo_array.value = [];
                    for(const key in filteredPhotos.value) {
                        for(const photo of filteredPhotos.value[key].media) {
                            photo_array.value.push(photo)
                        }
                    }
                } else if(selectedTitle.value != 'all' && selectedYear.value == 'All') {
                    filteredPhotos.value = photo_gallery.value.filter(photo => photo.title == selectedTitle.value);

                    photo_array.value = [];
                    for(const key in filteredPhotos.value) {
                        for(const photo of filteredPhotos.value[key].media) {
                            photo_array.value.push(photo)
                        }
                    }
                } else if(selectedTitle.value != 'all' && selectedYear.value != 'All') {
                    filteredPhotos.value = photo_gallery.value.filter(photo => photo.title == selectedTitle.value && photo.date == selectedYear.value);

                    photo_array.value = [];
                    for(const key in filteredPhotos.value) {
                        for(const photo of filteredPhotos.value[key].media) {
                            photo_array.value.push(photo)
                        }
                    }
                }
            }

            watch(
                () => props.selectYear,
                (newValue) => {
                    if (newValue !== selectedYear.value) {
                    selectedYear.value = newValue;
                    filterProduct();
                    }
                }
            );

            watch(selectedTitle, () => {
                filterProduct();
                console.log(selectedYear.value);
            })
            
            onMounted(async () => {
                await loadPhotos();
                if(!error.value) {
                    isLoading.value = false;
                }
            })

            return {photo_array,titles,  selectedYear, selectedTitle, years, isLoading, url, sendUrl}
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
