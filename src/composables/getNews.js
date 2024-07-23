import api from "@/services/api";
import axios from "axios";
import { ref } from "vue";

let getNews = () => {
  let new_events = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      let response = await axios.get(api.getNews);
      if (response.status === 404) {
        throw new Error("page not found");
      }
      new_events.value = response.data.new_events;

    } catch (err) {
      error.value = err;
      console.log(err);
    }
  };

  return { new_events, error, load };
};

export default getNews;
