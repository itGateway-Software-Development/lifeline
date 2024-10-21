import api from "@/services/api";
import axios from "axios";
import { ref } from "vue";

let getCareers = () => {
  let vacancies = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      let response = await axios.get(api.getCareers);

      if (response.status === 404) {
        throw new Error("Page not found");
      }

      vacancies.value = response.data.careers;
    } catch (err) {
      error.value = err;
      console.log(err);
    }
  };

  return { vacancies, error, load };
};

export default getCareers;
