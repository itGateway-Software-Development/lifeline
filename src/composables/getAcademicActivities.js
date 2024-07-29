import api from "@/services/api";
import axios from "axios";
import { ref } from "vue";

let getAcademicActivities = () => {
  let academic_activities = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      let response = await axios.get(api.getAcademicActivities);
      if (response.status === 404) {
        throw new Error("page not found");
      }

      academic_activities.value = response.data.academic_activities;
    
    } catch (err) {
      error.value = err;
      console.log(err);
    }
  };

  return { academic_activities, error, load };
};

export default getAcademicActivities;
