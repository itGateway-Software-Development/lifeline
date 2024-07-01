import api from "@/services/api";
import axios from "axios";
import { ref } from "vue";

let getProduct = () => {
  let product = ref([]);
  let error = ref("");

  let load = async (id) => {
    try {
      let response = await axios.get(api.getProduct+id);

      if (response.status === 404) {
        throw new Error("Page not found");
      }

      product.value = response.data.product;
    } catch (err) {
      error.value = err;
      console.log(err);
    }
  };

  return { product, error, load };
};

export default getProduct;
