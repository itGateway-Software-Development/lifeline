<template>
  <div class="career">
    <div class="img">
      <img src="@/assets/images/career.jpg" alt="" />
    </div>
    <div class="content">
      <div class="head shadow">
        <div class="d-flex select-group w-100 gap-4">
          <div class="filter-box">
            <v-select
              label="Select Location"
              :items="locations"
              variant="underlined"
              v-model="selectLocation"
            ></v-select>
          </div>
          <div class="filter-box">
            <v-select
              label="Select Position"
              :items="positions"
              variant="underlined"
              v-model="selectPosition"
            ></v-select>
          </div>
        </div>
        
        <div class="filter-box search">
          <v-text-field
            append-inner-icon="mdi mdi-magnify"
            label="Search"
            variant="underlined"
          ></v-text-field>
        </div>
      </div>
      <div class="vacancy shadow">
        <div class="job" v-for="vacancy in filteredVacancies" :key="vacancy.id">
          <div class="title">
            <div>
              <h2>{{vacancy.position}}</h2>
              <p class="fw-bold" style="color: #78909C;">{{vacancy.posts ?? 1}} Posts</p>
            </div>
            <div class="department">
              <div class="dept">
                <h4>Department</h4>
                <h6 class="text-center">{{vacancy.department}}</h6>
              </div>
              <button class="btn btn-sm text-white" style="background: #1E88E5;" @click="showJD(vacancy.id)">JD & Apply</button>
              
                <!-- Modal -->
                <div class="modal fade" id="jdModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="jdModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">{{jdData ? jdData.position : ''}}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body position-relative">
                        <div class="file-import">
                          <!-- <h6 class="mb-3 fw-bold text-success">Apply Here</h6>
                          <v-file-input
                            label="Please import your cv"
                            chips
                          ></v-file-input> -->
                        </div>
                        <div class="row mb-3">
                          <div class="col-6 col-md-4 col-md-2">
                            Department
                          </div>
                          <div class="col-6 col-md-4 col-md-2">
                            : &nbsp; {{ jdData ? jdData.department : '' }}
                          </div>
                        </div>
                        <div class="row mb-3">
                          <div class="col-6 col-md-4 col-md-2">
                            Position
                          </div>
                          <div class="col-6 col-md-4 col-md-2">
                            : &nbsp; {{ jdData ? jdData.position : '' }}
                          </div>
                        </div>
                        <div class="row mb-5">
                          <div class="col-6 col-md-4 col-md-2">
                            Posts
                          </div>
                          <div class="col-6 col-md-4 col-md-2">
                            : &nbsp; {{ jdData && jdData.posts ? jdData.posts : '1' }}
                          </div>
                        </div>
                        <hr>
                        <div class="row mb-3">
                          <h6 class="fw-bold">Job Description</h6>
                          <div v-html="jdData ? jdData.job_description : '-'"></div>
                        </div>
                        <div class="row mb-3">
                          <h6 class="fw-bold">Requirements</h6>
                          <div v-html="jdData ? jdData.requirements : ''"></div>
                        </div>
                        <div class="row mb-3">
                          <div v-html="jdData ? jdData.note : ''"></div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn text-white" style="background: #616161;" data-bs-dismiss="modal">Close</button>
                        <button type="button" @click="submitCV" class="btn btn-primary text-white">Submit Your CV</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div class="jd">
            <p>
              {{ vacancy.job_info }}
            </p>
          </div>
          <div class="job-detail">

          </div>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export default {
  setup() {
    let locations = ref([]);
    let positions = ref([]);

    let selectLocation = ref('All');
    let selectPosition = ref('All');
    let filteredVacancies = ref([]);

    const $toast = useToast();
    let modal = null;

    const vacancies = [
      {
        id: 1,
        position: 'Warehouse Supervisor',
        department: 'Store',
        location: 'Yangon',
        job_info: 'We offer an open vacancy for the Store department.',
        posts: 2,
        job_description: null,
        requirements: `
          <ul>
            <li>တက္ကသိုလ်မှ ဘွဲ့တစ်ခု ရရှိထားသူဖြစ်ရမည်။ </li>
            <li>English စာ အခြေခံကောင်းမွန်ရမည်။ </li>
            <li>Computer ကိုကျွမ်းကျင်စွာအသုံးပြုနိုင်သူဖြစ်ရမည်။  </li>
            <li>သက်ဆိုင်ရာလုပ်ငန်း အတွေ့အကြုံရှိသူ ဦးစားပေးမည်။    </li>
            <li>စာရင်းဇယားများနှင့်ပတ်သက်၍ ကျွမ်းကျင်စွာလုပ်ကိုင်နိုင်သူဖြစ်ရမည်။   </li>
            <li>လုပ်ငန်းအပေါ်တွင် အချိန်ပေးဆောင်ရွက်နိုင်သူဖြစ်ရမည်။ </li>
            <li>မိမိ Team Member များအား ကောင်းမွန်စွာ စီမံအုပ်ချုပ်နိုင်သူဖြစ်ရမည်။ </li>
            <li>လိုအပ်ပါက နယ်ခရီးသွားလာနိုင်သူဖြစ်ရမည်။  </li>
            <li>ဆက်ဆံရေးပြေပြစ်ကောင်းမွန်၍ လုပ်ငန်းအပေါ်တွင် စိတ်ဝင်စားသူ ဖြစ်ရမည်။</li>
          </ul>
        `,
        note: `
        <p>
          စိတ်ပါဝင်စား၍ လျှောက်ထားလိုပါက အောက်ပါပေးထားသော လိပ်စာသို့ လူကိုယ်တိုင် လာရောက်၍ဖြစ်စေ၊ Email (သို့မဟုတ်) Viber Phone Number များသို့ဖြစ်စေ မျှော်မှန်းလစာနှင့်အတူ ဤကြော်ငြာပါသည့်နေ့မှ (၁၄) ရက်အတွင်းလျှောက်ထားနိုင်ပါသည်။ 
        </p>
        <ul>
          <li>Address - အမှတ် (၁၃)၊ လှိုင်မြင့်မိုရ်လမ်းသွယ်(၇)၊ (၁၀)ရပ်ကွက်၊ လှိုင်မြိုနယ်၊ ရန်ကုန်တိုင်းဒေသကြီး။  </li>
          <li>Email - contact@lifelinemyanmar.com</li>
          <li>Viber - 09977875949</li>
        </ul>
        `
      },
      {
        id: 2,
        position: 'Warehouse Staff',
        department: 'Store',
        location: 'Yangon',
        job_info: 'We offer an open vacancy for the Store department.',
        posts: 3,
        job_description: null,
        requirements: `
          <ul>
            <li>တက္ကသိုလ်ဝင်တန်းအောင်မြင်ပြီးသူဖြစ်ရမည်။ </li>
            <li>ရိုးသားကြိုးစားသူ ဖြစ်ရမည်။  </li>
            <li>အတွေ့အကြုံရှိသူ ဦးစားပေးမည်  </li>
            <li>စာရင်းဇယားများနှင့်ပတ်သက်၍ ကျွမ်းကျင်စွာလုပ်ကိုင်နိုင်သူဖြစ်ရမည်။   </li>
            <li>လုပ်ငန်းအပေါ်တွင် အချိန်ပေးဆောင်ရွက်နိုင်သူဖြစ်ရမည်။  </li>
            <li>လိုအပ်ပါက နယ်ခရီးသွားလာနိုင်သူဖြစ်ရမည်။   </li>
            <li>မိမိ Team Member များအား ကောင်းမွန်စွာ စီမံအုပ်ချုပ်နိုင်သူဖြစ်ရမည်။ </li>
            <li>လိုအပ်ပါက နယ်ခရီးသွားလာနိုင်သူဖြစ်ရမည်။  </li>
            <li>ပေါင်းသင်းဆက်ဆံရေးကောင်းမွန်ပြီး Team Work ဖြင့် လုပ်ဆောင်နိုင်သူဖြစ်ရမည်။ </li>
          </ul>
        `,
        note: `
          <p>
            စိတ်ပါဝင်စား၍ လျှောက်ထားလိုပါက အောက်ပါပေးထားသော လိပ်စာသို့ လူကိုယ်တိုင် လာရောက်၍ဖြစ်စေ၊ Email (သို့မဟုတ်) Viber Phone Number များသို့ဖြစ်စေ မျှော်မှန်းလစာနှင့်အတူ ဤကြော်ငြာပါသည့်နေ့မှ (၁၄) ရက်အတွင်းလျှောက်ထားနိုင်ပါသည်။ 
          </p>
          <ul>
            <li>Address - အမှတ် (၁၃)၊ လှိုင်မြင့်မိုရ်လမ်းသွယ်(၇)၊ (၁၀)ရပ်ကွက်၊ လှိုင်မြိုနယ်၊ ရန်ကုန်တိုင်းဒေသကြီး။  </li>
            <li>Email - contact@lifelinemyanmar.com</li>
            <li>Viber - 09977875949</li>
          </ul>
        `
      },
      {
        id: 3,
        position: 'Operation Supervisor',
        department: 'Operation',
        location: 'Yangon',
        job_info: 'We offer an open vacancy for the Operation department.',
        posts: 2,
        job_description: null,
        requirements: `
          <ul>
            <li>တက္ကသိုလ်မှ ဘွဲ့တစ်ခု ရရှိထားသူဖြစ်ရမည်။ </li>
            <li>English စာ အခြေခံကောင်းမွန်ရမည်။  </li>
            <li>Computer ကိုကျွမ်းကျင်စွာအသုံးပြုနိုင်သူဖြစ်ရမည်။ (Excel/Word)  </li>
            <li>သက်ဆိုင်ရာလုပ်ငန်း အတွေ့အကြုံရှိသူ ဦးစားပေးမည်။    </li>
            <li>လုပ်ငန်းအပေါ်တွင် အချိန်ပေးဆောင်ရွက်နိုင်သူဖြစ်ရမည်။ </li>
            <li>မိမိ Team Member များအား ကောင်းမွန်စွာ စီမံအုပ်ချုပ်နိုင်သူဖြစ်ရမည်။   </li>
            <li>လိုအပ်ပါက နယ်ခရီးသွားလာနိုင်သူဖြစ်ရမည်။ </li>
            <li>ဆက်ဆံရေးပြေပြစ်ကောင်းမွန်၍ လုပ်ငန်းအပေါ်တွင် စိတ်ဝင်စားသူ ဖြစ်ရမည်။  </li>
          </ul>
        `,
        note: `
          <p>
            စိတ်ပါဝင်စား၍ လျှောက်ထားလိုပါက အောက်ပါပေးထားသော လိပ်စာသို့ လူကိုယ်တိုင် လာရောက်၍ဖြစ်စေ၊ Email (သို့မဟုတ်) Viber Phone Number များသို့ဖြစ်စေ မျှော်မှန်းလစာနှင့်အတူ ဤကြော်ငြာပါသည့်နေ့မှ (၁၄) ရက်အတွင်းလျှောက်ထားနိုင်ပါသည်။ 
          </p>
          <ul>
            <li>Address - အမှတ် (၁၃)၊ လှိုင်မြင့်မိုရ်လမ်းသွယ်(၇)၊ (၁၀)ရပ်ကွက်၊ လှိုင်မြိုနယ်၊ ရန်ကုန်တိုင်းဒေသကြီး။  </li>
            <li>Email - contact@lifelinemyanmar.com</li>
            <li>Viber - 09977875949</li>
          </ul>
        `
      },
      {
        id: 4,
        position: 'Accountant ',
        department: 'Account',
        location: 'Yangon',
        job_info: 'We offer an open vacancy for the Account department.',
        posts: 2,
        job_description: null,
        requirements: `
          <ul>
            <li>တက္ကသိုလ်တစ်ခုခုမှ ဘွဲ့ရရှိထားသူဖြစ်ရမည်။ </li>
            <li>LCCI Level (1,2) ပြီးမြောက်ထားသူဖြစ်ရပါမည်။  </li>
            <li>Microsoft Excel အား ကျွမ်းကျင်စွာ အသုံးပြုနိုင်သူဖြစ်ရမည်။  </li>
            <li>အသင်းအဖွဲ့နှင့်ပူးပေါင်းဆောင်ရွက်နိုင်ပြီး ရေရှည်လုပ်ကိုင်သူဖြစ်ရပါမည်။  </li>
            <li>လှိုင်သာယာမြို့နယ်တွင် အလုပ်ဆင်းနိုင်သူဖြစ်ရပါမည်။  </li>
          </ul>
        `,
        note: `
          <p>
            စိတ်ပါဝင်စား၍ လျှောက်ထားလိုပါက အောက်ပါပေးထားသော လိပ်စာသို့ လူကိုယ်တိုင် လာရောက်၍ဖြစ်စေ၊ Email (သို့မဟုတ်) Viber Phone Number များသို့ဖြစ်စေ မျှော်မှန်းလစာနှင့်အတူ ဤကြော်ငြာပါသည့်နေ့မှ (၁၄) ရက်အတွင်းလျှောက်ထားနိုင်ပါသည်။ 
          </p>
          <ul>
            <li>Address - အမှတ် (၁၃)၊ လှိုင်မြင့်မိုရ်လမ်းသွယ်(၇)၊ (၁၀)ရပ်ကွက်၊ လှိုင်မြိုနယ်၊ ရန်ကုန်တိုင်းဒေသကြီး။  </li>
            <li>Email - contact@lifelinemyanmar.com</li>
            <li>Viber - 09977875949</li>
          </ul>
        `
      },
    ];

    const jdData = ref(null);

    const setLoation = () => locations.value = ['All', ...new Set(vacancies.map(vacancy => vacancy.location))];
    const setPosition = () => positions.value = ['All', ...new Set(vacancies.map(vacancy => vacancy.position))];

    const filterVacancies = () => {
      if (selectLocation.value === 'All' && selectPosition.value === 'All') {
        filteredVacancies.value = vacancies;
      } else if (selectLocation.value === 'All' && selectPosition.value !== 'All') {
        filteredVacancies.value = vacancies.filter(vacancy => vacancy.position === selectPosition.value);
      } else if (selectLocation.value !== 'All' && selectPosition.value === 'All') {
        filteredVacancies.value = vacancies.filter(vacancy => vacancy.location === selectLocation.value);
      } else {
        filteredVacancies.value = vacancies.filter(vacancy => 
          vacancy.location === selectLocation.value && vacancy.position === selectPosition.value
        );
      }
    };

    const showJD = (id) => {
      jdData.value = filteredVacancies.value.find(vacancy => vacancy.id == id);
      modal = new bootstrap.Modal('#jdModal');
      modal.show();
    }

    const submitCV = () => {
      if(modal) {
        modal.hide();
      }
      $toast.success('Successfully submitted your CV! Thanks', {position: 'top-right'})
    }

    watch(([selectLocation, selectPosition]), () => {
      filterVacancies();
    })

    onMounted(() => {
      filterVacancies();
      setLoation();
      setPosition();
    })

    return { vacancies, locations, positions, selectLocation, selectPosition, filteredVacancies, showJD, jdData, submitCV};
  },
};
</script>

<style scoped>
.career {
  padding: 0 15%;
}

.career .img {
  border-bottom: 5px solid rgb(204, 131, 37);
  position: relative;
}
.career .img img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.9);
}

.career .content .head {
  background: #f5f5f5;
  padding: 30px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.career .filter-box {
  width: 25%;
}

.career .content .vacancy {
  background: #fff;
  padding: 30px 60px;
}

.career .content .vacancy .job {
  border-bottom: 1px solid #ccc;
  margin: 20px auto;
  padding-bottom: 10px;
}
.career .content .vacancy .job .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
}

.career .content .job .title h2 {
  font-weight: bold;
  color: #ff8c00;
  font-size: 26px;
}

.career .content .vacancy .job .title .department {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 20px;
}

.career .content .title .department .dept h4 {
  font-size: 17px;
  font-weight: bold;
  color: rgb(153, 138, 52);
  border-bottom: 1px solid #ccc;
}
.career .content .title .department .dept h6 {
  font-weight: bold;
  color: #40c4ff;
}

.career .content .title .department .drop-icon i {
  color: green;
  font-size: 20px;
}

.career .file-import {
  position: absolute;
  top: 10px;
  right: 30px;
  width: 30%;
}

@media (max-width: 1600px) {
  .career {
    padding: 0 9%;
  }
}

@media (max-width: 1200px) {
  .career {
    padding: 0 3%;
  }

  .career .content .head {
    padding: 30px;
  }

  .career .filter-box {
    width: 35%;
  }
}

@media (max-width: 991px) {
  .career .file-import {
    position: static;
    width: 100%;
  }
}

@media (max-width: 650px) {
  .career .filter-box {
    width: 50%;
  }

 .career .content .head {
    flex-direction: column
  }

  .career .filter-box.search {
    width: 100%;
  }
}

@media (max-width: 450px) {
  .career .select-group {
    flex-direction: column;
  }
  .career .filter-box {
    width: 100%;
  }
  .career .filter-box.search {
    margin-top: 25px;
  }
}
</style>
