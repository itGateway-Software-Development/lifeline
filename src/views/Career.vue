<template>
  <div class="career">
    <div class="img">
      <img src="@/assets/images/career.jpg" alt="" />
      <div class="caption">
        Join Our <br />
        Talent Space
      </div>
    </div>
    <div class="content">
      <div class="head shadow">
        <select name="" id="" class="form-select" @change="handleDept">
          <option value="">Choose Department</option>
          <option value="all">All Vacancy</option>
          <option value="HR">HR</option>
          <option value="Marketing">Marketing</option>
          <option value="Sale">Sale</option>
        </select>
        <div class="search d-flex align-items-center">
          <input type="text" placeholder="Explore vacancy ..." />
          <div class="icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <div class="vacancy shadow">
        <div class="job" v-if="currentDept == 'HR' || currentDept == 'all'">
          <div class="title">
            <h2>Assistant HR</h2>
            <div class="department">
              <div class="dept">
                <h4>Department</h4>
                <h6 class="text-center">HR</h6>
              </div>
              <div class="drop-icon">
                <i
                  class="fa-solid fa-arrow-up-right-from-square"
                  title="job detail"
                ></i>
              </div>
            </div>
          </div>
          <div class="jd mt-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              quis itaque corrupti dicta iure dignissimos deleniti. Sed, fuga
              est reiciendis totam odio nobis? Nobis assumenda repellendus rerum
              incidunt quos beatae eos voluptas dolore quasi quia accusamus
              libero in necessitatibus iusto dolor odit facere, sequi obcaecati
              quis eveniet, nihil optio magni.
            </p>
          </div>
        </div>

        <div class="job" v-if="currentDept == 'HR' || currentDept == 'all'">
          <div class="title">
            <h2>Junior HR</h2>
            <div class="department">
              <div class="dept">
                <h4>Department</h4>
                <h6 class="text-center">HR</h6>
              </div>
              <div class="drop-icon">
                <i
                  class="fa-solid fa-arrow-up-right-from-square"
                  title="job detail"
                ></i>
              </div>
            </div>
          </div>
          <div class="jd mt-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              quis itaque corrupti dicta iure dignissimos deleniti. Sed, fuga
              est reiciendis totam odio nobis? Nobis assumenda repellendus rerum
              incidunt quos beatae eos voluptas dolore quasi quia accusamus
              libero in necessitatibus iusto dolor odit facere, sequi obcaecati
              quis eveniet, nihil optio magni.
            </p>
          </div>
        </div>

        <div
          class="job"
          v-if="currentDept == 'Marketing' || currentDept == 'all'"
        >
          <div class="title">
            <h2>Marketing</h2>
            <div class="department">
              <div class="dept">
                <h4>Department</h4>
                <h6 class="text-center">Marketing</h6>
              </div>
              <div class="drop-icon">
                <i
                  class="fa-solid fa-arrow-up-right-from-square"
                  title="job detail"
                ></i>
              </div>
            </div>
          </div>
          <div class="jd mt-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              quis itaque corrupti dicta iure dignissimos deleniti. Sed, fuga
              est reiciendis totam odio nobis? Nobis assumenda repellendus rerum
              incidunt quos beatae eos voluptas dolore quasi quia accusamus
              libero in necessitatibus iusto dolor odit facere, sequi obcaecati
              quis eveniet, nihil optio magni.
            </p>
          </div>
        </div>

        <div class="job" v-if="currentDept == 'Sale' || currentDept == 'all'">
          <div class="title">
            <h2>Sale Manager</h2>
            <div class="department">
              <div class="dept">
                <h4>Department</h4>
                <h6 class="text-center">Sale</h6>
              </div>
              <div class="drop-icon">
                <i
                  class="fa-solid fa-arrow-up-right-from-square"
                  title="job detail"
                ></i>
              </div>
            </div>
          </div>
          <div class="jd mt-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              quis itaque corrupti dicta iure dignissimos deleniti. Sed, fuga
              est reiciendis totam odio nobis? Nobis assumenda repellendus rerum
              incidunt quos beatae eos voluptas dolore quasi quia accusamus
              libero in necessitatibus iusto dolor odit facere, sequi obcaecati
              quis eveniet, nihil optio magni.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let currentDept = ref("all");
    let handleDept = (event) => {
      currentDept.value = event.target.value;
    };

    return { handleDept, currentDept };
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
  height: 500px;
  object-fit: cover;
  filter: brightness(0.9);
}

.career .img .caption {
  position: absolute;
  bottom: 20%;
  left: 30%;
  font-size: 42px;
  font-style: italic;
  font-weight: bold;
  color: #fff;
}

.career .content .head {
  background: #f5f5f5;
  padding: 30px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.career .content .head select {
  width: 350px;
  padding: 10px 20px;
  border-radius: 30px;
  appearance: none;
  font-size: 16px;
}

.career .content .search input {
  background: #fff;
  padding: 10px 20px;
  border-radius: 100px 0 0 100px;
}

.career .content .search input:focus {
  border: none;
  outline: none;
}

.career .content .search .icon {
  background: #e2e2e2;
  padding: 10px 15px;
  border-radius: 0 100px 100px 0;
  cursor: pointer;
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
  padding-bottom: 10px;
}

.career .content .job .title h2 {
  font-weight: bold;
  color: #ff8c00;
  font-size: 26px;
}

.career .content .vacancy .job .title .department {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
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

@media (max-width: 1600px) {
  .career {
    padding: 0 9%;
  }
}

@media (max-width: 1200px) {
  .career {
    padding: 0 3%;
  }
}
</style>
