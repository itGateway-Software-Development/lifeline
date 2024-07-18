import api from "@/services/api";
import axios from "axios";
import { ref } from "vue";

let getCsr = () => {
  let csr = ref([]);
  let years = ref([])
  let error = ref("");

  let load = async () => {
    try {
      let response = await axios.get(api.getCsr);
      if (response.status === 404) {
        throw new Error("page not found");
      }
      csr.value = response.data.csr;
      years.value = response.data.years;

    } catch (err) {
      error.value = err;
      console.log(err);
    }
  };

  return { csr, years, error, load };
};

export default getCsr;
