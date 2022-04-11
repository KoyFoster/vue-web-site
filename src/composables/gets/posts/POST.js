import { ref } from "vue";

const POST = (url, body) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  };
  const data = ref([]);
  const error = ref(null);
  const requesting = ref(false);

  const load = async () => {
    try {
      requesting.value = true;
      const resp = await fetch(url, options);
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

export default POST;
