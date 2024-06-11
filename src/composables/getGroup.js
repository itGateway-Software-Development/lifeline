import api from "@/services/api";
import axios from "axios";
import { ref } from "vue";

let getGroup = (id) => {
  let group = ref([]);
  let categories = ref([]);
  let products = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      let response = await axios.get(api.getGroup+id);
      if (response.status === 404) {
        throw new Error("page not found");
      }

      group.value = response.data.group;
      categories.value = group.value.categories;
      for(const category of categories.value) {
        for(const product of category.products) {
          products.value.push(product)
        }
      }
    } catch (err) {
      error.value = err;
      console.log(err);
    }
  };

  return { group, categories, products, error, load };
};

export default getGroup;
