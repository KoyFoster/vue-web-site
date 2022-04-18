import axios from "axios";
import { ref } from "vue";

// delay parameter is used to delay the api call by the given value in milliseconds
const GET = (url) => {
  const data = ref([]);
  const error = ref(null);
  const requesting = ref(false);

  const load = async (newUrl = url) => {
    try {
      requesting.value = true;

      const resp = await axios.get(newUrl);
      if (!resp.status) {
        requesting.value = false;
        throw Error("Games not available");
      } else {
        data.value = resp.data;
        requesting.value = false;
      }
    } catch (err) {
      error.value = err.message;
      requesting.value = false;
    }
  };

  return { data, error, load, requesting };
};

export default GET;
