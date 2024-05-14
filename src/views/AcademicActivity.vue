<template>
    <div class="academic">
        <div>
            <div class="row">
                <div class="col-12 col-lg-8">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-lg-4 mb-5">
                            <div class="youtube-video">
                                <div class="video">
                                    <iframe width="100%" height="250" src="https://www.youtube.com/embed/fFS4aDpWrd4?si=ukG8w8Ur5xBNDlVh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                                <div class="video-title">
                                    <h3>A Webinar Recording of "Critical Thinking in Medical Practice" which was delivered by Professor Chit Soe and Associate Professor Dr Kyaw Thu Yaa</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 mb-5" v-for="i in 20" :key="i">
                            <div class="youtube-video">
                                <div class="video">
                                    <img height="250" src="@/assets/images/youtube.jpg" alt="">
                                </div>
                                <div class="video-title">
                                    <h3>A Webinar Recording of "Critical Thinking in Medical Practice" which was delivered by Professor Chit Soe and Associate Professor Dr Kyaw Thu Yaa</h3>
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
    export default {
        
    }
</script>

<style scoped>
    .academic {
        padding: 50px 14%;
    }

    .academic .youtube-video .video img {
        width: 100%;
        border-radius: 10px;
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
