<template>
    <div class="news-detail">
        <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-12 p-0 ">
                <div class="menu  w-100">
                    <router-link to="/news-events/news" >Back</router-link>
                </div>
            </div>
            <div class="col-lg-6 col-md-7 col-sm-12 ">
                <div class="content">
                    <div class="img">
                        <img :src="require(`@/assets/images/news/news${id}.png`)" alt="">
                    </div>
                    <h2>Humana makes it easy to find the best Medicare</h2>
                    <div class="date">20 - 02 - 2023</div>
                    <p>The standard Lorem Ipsum passage, used since the 1500s
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                        1914 translation by H. Rackham
                        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                    </p>
                </div>
            </div>
            <div class="col-lg-4 col-md-3 col-sm-12 d-flex flex-column align-items-end">
                <div class="popular">
                    <h2>Popular</h2>
                    <div class="divider"></div>
                </div>
                <div class="news-card" v-for="i in 3" :key="i">
                    <img :src="require(`@/assets/images/news/news${i}.png`)" alt="">
                    <router-link :to="`/news-detail/${i}`">Humana makes it easy to find the best Medicare</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
    export default {
        props: ['id'],
        setup() {
            onMounted(() => {
                window.scrollTo(0,0)
            })
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
    height: 440px;
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

.popular {
    margin-bottom: 20px;
}

.popular h2 {
    font-weight: bold;
    color: var(--main-color);
    font-size: 24px;
}

.popular .divider {
    width: 300px;
    height: 3px;
    background: var(--sec-color);
}

.news-card {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
}

.news-card img {
    width: 300px;
}

.news-card a {
    font-size: 20px;
    width: 300px;
    margin-top: 10px;
    color: var(--main-color);
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
    
    .popular {
        margin-bottom: 20px;
    }
    
    .popular h2 {
        font-size: 20px;
    }
    
    .popular .divider {
        width: 250px;
        height: 3px;
    }
    
    .news-card {
        margin-bottom: 30px;
    }
    
    .news-card img {
        width: 250px;
        height: 150px;
        object-fit: cover;
    }
    
    .news-card a {
        font-size: 14px;
        width: 250px;
        margin-top: 10px;
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
