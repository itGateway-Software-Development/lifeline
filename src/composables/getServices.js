import api from "@/services/api";
import axios from "axios";
import { ref } from "vue";

let getServices = () => {
  let services = ref(null);
  let error = ref("");

  let load = async () => {
    try {
      let response = await axios.get(api.getServices);
      if (response.status === 404) {
        throw new Error("page not found");
      }
      services.value = response.data.services;

    } catch (err) {
      error.value = err;
      console.log(err);
    }
  };

  return { services, error, load };
};

export default getServices;
