import api from "@/services/api";
import axios from "axios";
import { ref } from "vue";

let getActivityPhotos = () => {
  let photos = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      let response = await axios.get(api.getActivityPhotos);
      if (response.status === 404) {
        throw new Error("page not found");
      }
      photos.value = response.data.photos;
    } catch (err) {
      error.value = err;
      console.log(err);
    }
  };

  return { photos, error, load };
};

export default getActivityPhotos;
