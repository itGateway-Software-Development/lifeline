import api from "@/services/api";
import axios from "axios";
import { ref } from "vue";

let getPromotions = () => {
  let promotions = ref(null);
  let error = ref("");

  let load = async () => {
    try {
      let response = await axios.get(api.getPromotions);
      if (response.status === 404) {
        throw new Error("page not found");
      }
      promotions.value = response.data.promotions;
    } catch (err) {
      error.value = err;
      console.log(err);
    }
  };

  return { promotions, error, load };
};

export default getPromotions;
