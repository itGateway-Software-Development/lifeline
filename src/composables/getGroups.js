import api from "@/services/api";
import axios from "axios";
import { ref } from "vue";

let getGroups = () => {
  let groups = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      let response = await axios.get(api.getGroups);
      if (response.status === 404) {
        throw new Error("page not found");
      }
      groups.value = response.data.groups;
    } catch (err) {
      error.value = err;
      console.log(err);
    }
  };

  return { groups, error, load };
};

export default getGroups;
