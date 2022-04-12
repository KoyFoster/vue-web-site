import { ref } from "vue";

// Note: If error results in Bad Request, verify the correct properties are being pass and that it's being converted stringified
const POST = (url, body) => {
  const data = ref([]);
  const error = ref(null);
  const requesting = ref(false);

  const load = async (bodyBypass) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: bodyBypass
        ? JSON.stringify(bodyBypass)
        : body
        ? JSON.stringify(body)
        : undefined,
    };
    
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
      error.value = `${err.message}: ${options.body}`;
      requesting.value = false;
    }
  };

  return { data, error, load, requesting };
};

export default POST;
