import axios from "axios";
import { ref } from "vue";
import { DelayedCall } from "../timers/timers";

// delay parameter is used to delay the api call by the given value in milliseconds
const GET = (url, delay) => {
  const timeId = ref(0);
  const data = ref([]);
  const error = ref(null);
  const requesting = ref(false);

  const delayLoad = async (newUrl = url) => {
    requesting.value = true;
    timeId.value = DelayedCall(async () => {
      await load(newUrl);
      clearTimeout(timeId.value);
      timeId.value = 0;
    }, delay);
  };

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

  return { data, error, load: delay > 0 ? delayLoad : load, requesting };
};

export default GET;
