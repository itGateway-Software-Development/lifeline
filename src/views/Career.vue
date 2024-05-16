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
                          <h6 class="mb-3 fw-bold text-success">Apply Here</h6>
                          <v-file-input
                            label="Please import your cv"
                            chips
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
                          <h6 class="fw-bold">Job Descriptin</h6>
                          <div v-html="jdData ? jdData.job_description : ''"></div>
                        </div>
                        <div class="row mb-3">
                          <h6 class="fw-bold">Requirements</h6>
                          <div v-html="jdData ? jdData.requirements : ''"></div>
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
        position: 'Senior HR',
        department: 'HR',
        location: 'Yangon',
        job_info: 'We offer an open vacancy for the HR department.',
        posts: 2,
        job_description: `
          <ul>
            <li>Ensure Attendance</li>
            <li>Manage HR Policies</li>
            <li>Oversee Recruitment Processes</li>
          </ul>
        `,
        requirements: `
          <ul>
            <li>Bachelor's Degree in Human Resources or related field</li>
            <li>5+ years of experience in HR management</li>
            <li>Excellent communication skills</li>
          </ul>
        `,
      },
      {
        id: 2,
        position: 'Software Developer',
        department: 'IT',
        location: 'Mandalay',
        job_info: 'Join our IT team to develop and maintain software applications.',
        posts: 3,
        job_description: `
          <ul>
            <li>Develop new software applications</li>
            <li>Maintain and improve existing codebases</li>
            <li>Collaborate with cross-functional teams</li>
          </ul>
        `,
        requirements: `
          <ul>
            <li>Bachelor's Degree in Computer Science or related field</li>
            <li>3+ years of experience in software development</li>
            <li>Proficiency in JavaScript, HTML, CSS</li>
          </ul>
        `,
      },
      {
        id: 3,
        position: 'Marketing Specialist',
        department: 'Marketing',
        location: 'Naypyidaw',
        job_info: 'We are looking for a creative Marketing Specialist to join our team.',
        job_description: `
          <ul>
            <li>Develop marketing strategies</li>
            <li>Manage social media accounts</li>
            <li>Create content for various platforms</li>
          </ul>
        `,
        requirements: `
          <ul>
            <li>Bachelor's Degree in Marketing or related field</li>
            <li>2+ years of experience in marketing</li>
            <li>Strong analytical and communication skills</li>
          </ul>
        `,
      },
      {
        id: 4,
        position: 'Sales Manager',
        department: 'Sales',
        location: 'Yangon',
        job_info: 'We are seeking a dynamic Sales Manager to lead our sales team.',
        job_description: `
          <ul>
            <li>Develop sales strategies</li>
            <li>Manage sales team performance</li>
            <li>Build and maintain customer relationships</li>
          </ul>
        `,
        requirements: `
          <ul>
            <li>Bachelor's Degree in Business Administration or related field</li>
            <li>4+ years of experience in sales management</li>
            <li>Strong leadership skills</li>
          </ul>
        `,
      },
      {
        id: 5,
        position: 'Accountant',
        department: 'Finance',
        location: 'Mandalay',
        job_info: 'We are looking for a meticulous Accountant to join our finance team.',
        job_description: `
          <ul>
            <li>Manage financial transactions</li>
            <li>Prepare financial reports</li>
            <li>Ensure compliance with financial regulations</li>
          </ul>
        `,
        requirements: `
          <ul>
            <li>Bachelor's Degree in Accounting or Finance</li>
            <li>3+ years of experience in accounting</li>
            <li>Proficiency in accounting software</li>
          </ul>
        `,
      },
      {
        id: 6,
        position: 'Customer Service Representative',
        department: 'Customer Service',
        location: 'Naypyidaw',
        job_info: 'We need a friendly Customer Service Representative to assist our customers.',
        job_description: `
          <ul>
            <li>Handle customer inquiries</li>
            <li>Resolve customer complaints</li>
            <li>Provide product information</li>
          </ul>
        `,
        requirements: `
          <ul>
            <li>High School Diploma or equivalent</li>
            <li>1+ year of experience in customer service</li>
            <li>Excellent communication skills</li>
          </ul>
        `,
      },
      {
        id: 7,
        position: 'Graphic Designer',
        department: 'Design',
        location: 'Yangon',
        job_info: 'We are looking for a talented Graphic Designer to join our creative team.',
        job_description: `
          <ul>
            <li>Create visual content for marketing campaigns</li>
            <li>Design graphics for social media and websites</li>
            <li>Collaborate with marketing and product teams</li>
          </ul>
        `,
        requirements: `
          <ul>
            <li>Bachelor's Degree in Graphic Design or related field</li>
            <li>2+ years of experience in graphic design</li>
            <li>Proficiency in Adobe Creative Suite</li>
          </ul>
        `,
      },
      {
        id: 8,
        position: 'Project Manager',
        department: 'Project Management',
        location: 'Mandalay',
        job_info: 'Join us as a Project Manager to oversee and lead project teams.',
        job_description: `
          <ul>
            <li>Plan and execute projects</li>
            <li>Manage project timelines and budgets</li>
            <li>Coordinate with stakeholders</li>
          </ul>
        `,
        requirements: `
          <ul>
            <li>Bachelor's Degree in Project Management or related field</li>
            <li>4+ years of experience in project management</li>
            <li>Strong organizational skills</li>
          </ul>
        `,
      },
      {
        id: 9,
        position: 'IT Support Specialist',
        department: 'IT',
        location: 'Naypyidaw',
        job_info: 'We need an IT Support Specialist to provide technical assistance to our staff.',
        job_description: `
          <ul>
            <li>Troubleshoot hardware and software issues</li>
            <li>Install and configure software</li>
            <li>Maintain IT systems</li>
          </ul>
        `,
        requirements: `
          <ul>
            <li>Bachelor's Degree in Information Technology or related field</li>
            <li>2+ years of experience in IT support</li>
            <li>Strong problem-solving skills</li>
          </ul>
        `,
      },
      {
        id: 10,
        position: 'Content Writer',
        department: 'Marketing',
        location: 'Yangon',
        job_info: 'We are looking for a creative Content Writer to produce engaging content.',
        job_description: `
          <ul>
            <li>Write articles and blog posts</li>
            <li>Create content for social media</li>
            <li>Develop marketing copy</li>
          </ul>
        `,
        requirements: `
          <ul>
            <li>Bachelor's Degree in English, Journalism, or related field</li>
            <li>2+ years of experience in content writing</li>
            <li>Excellent writing skills</li>
          </ul>
        `,
      },
      {
        id: 11,
        position: 'Business Analyst',
        department: 'Business Development',
        location: 'Mandalay',
        job_info: 'We are seeking a skilled Business Analyst to improve our business processes.',
        job_description: `
          <ul>
            <li>Analyze business requirements</li>
            <li>Identify areas for improvement</li>
            <li>Develop business strategies</li>
          </ul>
        `,
        requirements: `
          <ul>
            <li>Bachelor's Degree in Business Administration or related field</li>
            <li>3+ years of experience in business analysis</li>
            <li>Strong analytical skills</li>
          </ul>
        `,
      },
      {
        id: 12,
        position: 'Data Scientist',
        department: 'Data Analysis',
        location: 'Naypyidaw',
        job_info: 'We need a Data Scientist to analyze complex data sets and provide insights.',
        job_description: `
          <ul>
            <li>Analyze large data sets</li>
            <li>Develop data models</li>
            <li>Generate business insights from data</li>
          </ul>
        `,
        requirements: `
          <ul>
            <li>Bachelor's Degree in Data Science, Statistics, or related field</li>
            <li>3+ years of experience in data analysis</li>
            <li>Proficiency in data analysis tools and programming languages</li>
          </ul>
        `,
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
