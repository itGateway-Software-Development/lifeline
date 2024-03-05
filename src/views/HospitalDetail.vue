<template>
    <div class="hospital-detail">
        <div class="row">
            <div class="col-lg-2 col-md-4 col-sm-12 p-0 ">
                <div class="menu  w-100">
                    <router-link to="/partnership/hospitals" :class="{active: slug == 'introduction'}">Back</router-link>
                </div>
            </div>
            <div class="col-lg-10 col-md-8 col-sm-12">
                <div class="content">
                    <div v-if="slug == 'Vejthani'"><Vejthani></Vejthani></div>
                    <div v-if="slug == 'Medpark'"><Medpark></Medpark></div>
                    <div v-if="slug == 'Phyathai1'"><Phyathai1></Phyathai1></div>
                    <div v-if="slug == 'Phyathai2'"><Phyathai2></Phyathai2></div>
                    <div v-if="slug == 'Paolo'"><Paolo></Paolo></div>
                    <div v-if="slug == 'Thonburi'"><Thonburi></Thonburi></div>
                    <div v-if="slug == 'Vimut'"><Vimut></Vimut></div>
                    <div v-if="slug == 'PatRangsit'"><PatRangsit></PatRangsit></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PatRangsit from '../components/hospitals/PatRangsit'
import Vimut from '../components/hospitals/Vimut'
import Thonburi from '../components/hospitals/Thonburi'
import Paolo from '../components/hospitals/Paolo'
import Vejthani from '../components/hospitals/Vejthani'
import Phyathai2 from '../components/hospitals/Phyathai2'
import Phyathai1 from '../components/hospitals/Phyathai1'
import Medpark from '../components/hospitals/Medpark'
export default {
  components: {
    PatRangsit,
    Vimut,
    Thonburi,
    Paolo,
    Vejthani,
    Phyathai2,
    Phyathai1, Medpark },
        props: ['slug'],
    }
</script>

<style scoped>
.hospital-detail {
    padding: 30px 15%;
}

.hospital-detail .menu {
    display: flex;
    flex-direction: column;
    background-color: #e5ecf1;
}

.hospital-detail .menu a {
    text-decoration: none;
    padding: 11px 25px;
    transition: .3s ease;
    color: #000;
}

.hospital-detail .menu a:hover {
    background-color: #3a82a3;
    color: #fff;
}

.active {
    background-color: #3a82a3;
    color: #fff !important;
}

@media (max-width: 1600px) {
    .hospital-detail {
        padding: 30px 9%;
    }

    .hospital-detail .menu a {
        padding: 9px 25px;
        font-size: 14px;
    }
}

@media (max-width: 1200px) {
    .hospital-detail {
        padding: 30px 3%;
    }

    .hospital-detail .menu a {
        padding: 9px 25px;
        font-size: 14px;
    }
}
</style>
