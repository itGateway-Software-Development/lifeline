import api from "@/services/api";
import axios from "axios";
import { ref } from "vue";

let getCategory = () => {
  let categories = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      let response = await axios.get(api.getCategories);
      if (response.status === 404) {
        throw new Error("page not found");
      }

      categories.value = response.data.categories;
    } catch (err) {
      error.value = err;
      console.log(err);
    }
  };

  return { categories, error, load };
};

export default getCategory;
