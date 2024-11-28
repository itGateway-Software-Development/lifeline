import api from "@/services/api";
import axios from "axios";
import { ref } from "vue";

let getAnnouncement = () => {
  let announcement = ref(null);
  let error = ref("");

  let load = async () => {
    try {
      let response = await axios.get(api.getAnnouncement);
      if (response.status === 404) {
        throw new Error("page not found");
      }
      announcement.value = response.data.announcement;

    } catch (err) {
      error.value = err;
      console.log(err);
    }
  };

  return { announcement, error, load };
};

export default getAnnouncement;
