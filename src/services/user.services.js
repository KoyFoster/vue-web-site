import POST from "@/composables/posts/POST";
import store from "@/store";

const login = () => {
  const url = `${process.env.VUE_APP_BASE_URL}/signin`;
  const { data, error, load, requesting } = POST(url);

  const loginLoad = async (username, password) => {
    if (!username || !password)
      console.warn("Warning: No username or password given");
    await load({
      username,
      password,
    });
    if (error.value === null) store.commit("saveUser", { user: data.value });
  };

  return { data, error, load: loginLoad, requesting };
};

const signup = () => {
  const url = `${process.env.VUE_APP_BASE_URL}/signup`;
  const { data, error, load, requesting } = POST(url);

  const loginLoad = async (username, password) => {
    if (!username || !password)
      console.warn("Warning: No username or password given");
    await load({
      username,
      password,
    });
    // if (error.value === null) store.commit("saveUser", { user: data.value });
  };

  return { data, error, load: loginLoad, requesting };
};

export const userService = {
  login,
  signup,
  // logout,
};
