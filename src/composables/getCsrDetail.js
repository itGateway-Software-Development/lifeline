import api from "@/services/api";
import axios from "axios";
import { ref } from "vue";

let getCsrDetail = () => {
  let csr = ref([]);
  let error = ref("");

  let load = async (id) => {
    try {
      let response = await axios.get(api.getCsrDetail+id);

      if (response.status === 404) {
        throw new Error("Page not found");
      }

      csr.value = response.data.csr;
      console.log(csr.value);
    } catch (err) {
      error.value = err;
      console.log(err);
    }
  };

  return { csr, error, load };
};

export default getCsrDetail;
