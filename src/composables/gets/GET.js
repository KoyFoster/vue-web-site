import { ref } from "vue";

const GET = (url) => {
  const data = ref([]);
  const error = ref(null);
  const requesting = ref(false);

  const load = async () => {
    try {
      requesting.value = true;
      const resp = await fetch(url);
      if (!resp.ok) {
        requesting.value = false;
        throw Error("Game not available");
      } else {
        data.value = await resp.json();
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
