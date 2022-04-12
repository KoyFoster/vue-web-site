import POST from "@/composables/posts/POST";
import store from "@/store";

const login = () => {
  const url = "http://localhost:4000/users/authenticate"; // calling local REST API ATM // `${process.env.REACT_APP_API_ENDPOINT}/users/authenticate`
  const { data, error, load, requesting } = POST(url);

  const loginLoad = async (email, password) => {
    if (!email || !password)
      console.warn("Warning: No email or password given");
    await load({ email, password });
    store.commit("saveUser", { user: data.value });
  };

  return { data, error, load: loginLoad, requesting };
};

export const userService = {
  login,
  // logout,
};
