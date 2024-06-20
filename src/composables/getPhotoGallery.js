import api from "@/services/api";
import axios from "axios";
import { ref } from "vue";

let getPhotoGallery = () => {
  let photo_gallery = ref([]);
  let years = ref([])
  let error = ref("");

  let load = async () => {
    try {
      let response = await axios.get(api.getPhotoGallery);
      if (response.status === 404) {
        throw new Error("page not found");
      }
      photo_gallery.value = response.data.photo_gallery;
      years.value = response.data.years;

    } catch (err) {
      error.value = err;
      console.log(err);
    }
  };

  return { photo_gallery, years, error, load };
};

export default getPhotoGallery;
