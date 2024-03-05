import api from "@/services/api";
import axios from "axios";
import { ref } from "vue";

let getProducts = () => {
  let products = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      let response = await axios.get(api.getProducts);

      if (response.status === 404) {
        throw new Error("Page not found");
      }

      products.value = response.data.products;
    } catch (err) {
      error.value = err;
      console.log(err);
    }
  };

  return { products, error, load };
};

export default getProducts;
