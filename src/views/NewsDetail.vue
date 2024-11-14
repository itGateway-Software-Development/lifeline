<template>
    <div class="news-detail">
        <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-12 p-0 ">
                <div class="menu  w-100">
                    <router-link to="/news-events/news" >Back</router-link>
                </div>
            </div>
            <div class="col-lg-10 col-md-9 col-sm-12 ">
                <div class="content">
                    <h2>{{new_events.title}}</h2>
                    <div class="date"> <i class="fa-regular fa-calendar-check"></i> {{new_events.date}}</div>
                    <p v-html="new_events.content"></p>
                    
                    <div class="img border p-2 border-3 rounded row">
                       <div class="col-12 col-md-6 col-lg-4 mb-3" v-for="(img, i) in new_events.media" :key="i">
                        <img class="new-detail-img" :src="img" alt="" data-bs-toggle="modal" data-bs-target="#picModal" @click="sendUrl(img)">
                       </div>
                    </div>
                    <Modal :url="url" :title="new_events.title" />

                    <div class="row my-3 border p-3">
                        <div class="col-12 col-sm-6 col-lg-4 mb-3" v-for="(video, index) in new_events.videos" :key="index">
                          <div class="video w-100">
                            <video controls style="width: 100%;">
                                <source :src="video.full_url" type='video/mp4' />
                            </video>  
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from '../components/usable/Modal'
import getNewsDetail from '@/composables/getNewsDetail';
import { onMounted, ref } from 'vue'
    export default {
  components: { Modal },
        props: ['id'],
        setup(props) {
            const {new_events, error, load} = getNewsDetail();
            load(props.id)

            const url = ref('');
            const sendUrl = (pic_url) => {
                url.value = pic_url;
            }

            onMounted(() => {
                window.scrollTo(0,0)
            })

            return {new_events, url, sendUrl}
        }
    }
</script>

<style scoped>
.news-detail {
    padding: 30px 15%;
}

.news-detail .menu {
    display: flex;
    flex-direction: column;
    background-color: #e5ecf1;
}

.news-detail .menu a {
    text-decoration: none;
    padding: 11px 25px;
    transition: .3s ease;
    color: #000;
}

.news-detail .menu a:hover {
    background-color: #3a82a3;
    color: #fff;
}

.active {
    background-color: #3a82a3;
    color: #fff !important;
}

.content .img {
    display: flex;
    justify-content: start;
}

.content img {
    width: 600px;
    object-fit: cover;
}

.content h2 {
    font-size: 24px;
    margin: 15px 0 10px;
    font-weight: bold;
    color: var(--main-color);
}

.content .date {
    color: gray;
    margin-bottom: 10px;
}

.content p {
    padding-right: 10px;
}

.content .new-detail-img {
    width: 100%;
}

@media (max-width: 1600px) {
    .news-detail {
        padding: 30px 9%;
    }

    .news-detail .menu a {
        padding: 9px 25px;
        font-size: 14px;
    }

    .content img {
        width: 500px;
        height: 350px;
    }
    
    .content h2 {
        font-size: 20px;
        margin: 15px 0 10px;
    }
    
    .content .date {
        margin-bottom: 10px;
        font-size: 13px;
    }
    
    .content p {
        padding-right: 10px;
        font-size: 13px;
    }
    
   
}

@media (max-width: 1200px) {
    .news-detail {
        padding: 30px 3%;
    }

    .news-detail .menu a {
        padding: 9px 25px;
        font-size: 14px;
    }
}
</style>
