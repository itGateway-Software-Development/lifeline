<template>
  <div class="career">
    <div class="img">
      <img src="@/assets/images/career.jpg" alt="" />
    </div>

    <div v-if="isLoading">
      <Loading />
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
            v-model="keyword"
            @input="search"
          ></v-text-field>
        </div>
      </div>
      <div class="vacancy shadow">
        <div v-if="filteredVacancies.length > 0" class="job" v-for="(vacancy,index) in filteredVacancies" :key="vacancy.id">
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
                          <h6 class="mb-3 fw-bold text-success">Apply Here</h6>
                          <v-file-input
                            label="Please import your cv"
                            chips
                            accept="application/pdf"
                            @change="handleFileChange"
                          ></v-file-input>
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
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn text-white" style="background: #616161;" data-bs-dismiss="modal">Close</button>
                        <button type="button" @click="submitCV(vacancy.position)" class="btn btn-primary text-white">Submit Your CV</button>
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
       
        <div v-else>
          <div class="d-flex flex-column justify-content-center align-items-center gap-4" >
            <img class="w-25" src="@/assets/images/no-data.jpg" alt="">
            <h5>No Data Found</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCareers from "@/composables/getCareers";
import { onMounted, ref, watch } from "vue";
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import debounce from 'lodash/debounce';
import axios from "axios";
import api from "@/services/api";
import Loading from "@/components/Loading";

export default {
  components: { Loading },
  setup() {
    let locations = ref([]);
    let positions = ref([]);

    let selectLocation = ref('All');
    let selectPosition = ref('All');
    let filteredVacancies = ref([]);

    const $toast = useToast();
    let modal = null;
    const keyword = ref('');
    const file = ref(null);
    const isLoading = ref(false);

    let {vacancies,error, load} = getCareers();
    

    const jdData = ref(null);

    const setLoation = () => locations.value = ['All', ...new Set(vacancies.value.map(vacancy => vacancy.location))];
    const setPosition = () => positions.value = ['All', ...new Set(vacancies.value.map(vacancy => vacancy.position))];

    const filterVacancies = () => {
      if (selectLocation.value === 'All' && selectPosition.value === 'All') {
        filteredVacancies.value = vacancies.value;
      } else if (selectLocation.value === 'All' && selectPosition.value !== 'All') {
        filteredVacancies.value = vacancies.value.filter(vacancy => vacancy.position === selectPosition.value);
      } else if (selectLocation.value !== 'All' && selectPosition.value === 'All') {
        filteredVacancies.value = vacancies.value.filter(vacancy => vacancy.location === selectLocation.value);
      } else {
        filteredVacancies.value = vacancies.value.filter(vacancy => 
          vacancy.location === selectLocation.value && vacancy.position === selectPosition.value
        );
      }
    };

    const showJD = (id) => {
      jdData.value = filteredVacancies.value.find(vacancy => vacancy.id == id);
      modal = new bootstrap.Modal('#jdModal');
      modal.show();
    }

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            file.value = selectedFile;
        } else {
            file.value = null;
        }
    };

    const submitCV = async(position) => {
      if(modal) {
        modal.hide();
      }
      
      if(!file.value) {
        $toast.error('Please import your CV !', {position: 'top-right'})
        return
      }

      isLoading.value = true;

      try {
        let formData = new FormData();
        formData.append('file', file.value);
        formData.append('position', position);

        let response = await axios.post(api.sendCV, formData,  {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        
        if(response.data.status) {
          isLoading.value = false;
          $toast.success(response.data.message, {position: 'top-right'})
        } 
      } catch (error) {
        $toast.error('Something went wrong', {position: 'top-right'})
      }
      
    }

    const search = debounce( async() => {
      let response = await axios.get(api.getCareers+"?q="+keyword.value);
      vacancies.value = response.data.careers;
      filterVacancies();
    }, 300)

    watch(([selectLocation, selectPosition]), () => {
      filterVacancies();
    })
    
    onMounted(async () => {
      await load()
      if(vacancies.value) {
        filterVacancies();
        setLoation();
        setPosition();
      }
    })

    return { vacancies, locations, positions, selectLocation, selectPosition, filteredVacancies, showJD, jdData, submitCV, keyword, search, handleFileChange, isLoading};
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

.career #jdModal {
  z-index: 9999 !important;
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
