<template>
    <div class="academic">
        <div>
            <div class="row">
                <div class="col-12 col-lg-8">
                    <div class="row">
                        <div class="col-12 col-sm-6 mb-5" v-for="(video, index) in academic_activities" :key="index">
                            <div class="youtube-video">
                                <div class="video">
                                    <div v-html="video.link"></div>
                                </div>
                                <!-- <div class="video-title">
                                    <h3>A Webinar Recording of "Critical Thinking in Medical Practice" which was delivered by Professor Chit Soe and Associate Professor Dr Kyaw Thu Yaa</h3>
                                </div> -->
                                <div class="view-yt">
                                    <a :href="video.full_link" target="_blank">
                                        View Full Video
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 mt-5 mt-lg-0">
                    <div class="form position-sticky" style="top: 80px;">
                        <h3 class="text-center mb-3">Subscribe Form</h3>
                        <form action="">
                            <v-text-field
                                label="Name"
                            ></v-text-field>
                            <v-text-field
                                type="email"
                                label="Email"
                            ></v-text-field>
                            <v-text-field
                                label="Phone"
                            ></v-text-field>

                            <v-textarea label="Address"></v-textarea>

                            <div class="d-flex gap-2 justify-content-end mt-4">
                                <v-btn
                                color="grey-lighten-3"
                                >
                                    Cancel
                                </v-btn>

                                <v-btn
                                color="green-darken-3"
                                prepend-icon="mdi-check-circle"
                                >
                                <template v-slot:prepend>
                                    <v-icon color="green-lighten-5"></v-icon>
                                </template>
                                Submit
                                </v-btn>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getAcademicActivities from '@/composables/getAcademicActivities';

    export default {
        setup() {
            const {academic_activities, error, load} = getAcademicActivities();
            load();

            return {academic_activities}
        }
    }
</script>

<style scoped>
    .academic {
        padding: 50px 14%;
    }

    .academic .youtube-video .view-yt a {
        text-decoration: none;
        color: var(--main-color);
        transition: .5s ease;
    }

    .academic .youtube-video .view-yt a:hover {
        color: var(--sec-color);
        margin-left: 10px;
    }

    .academic .youtube-video .video-title h3 {
        font-size: 18px;
        font-weight: bold;
        margin-top: 10px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    .academic .form {
        border: 2px solid rgb(224, 224, 224);
        border-radius: 7px;
        padding: 20px 10px;
    }
</style>
