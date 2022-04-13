import POST from "@/composables/posts/POST";
import store from "@/store";

const login = () => {
  const url = "http://localhost:4000/users/authenticate"; // calling local REST API ATM // `${process.env.REACT_APP_API_ENDPOINT}/users/authenticate`
  const { data, error, load, requesting } = POST(url);

  const loginLoad = async (username, email, password) => {
    if (!(!email && !username) || !password)
      console.warn("Warning: No email/username or password given");
    await load({
      username: username ? username : "Empty",
      email: email ? email : "Empty",
      password,
    });
    if (error.value === null) store.commit("saveUser", { user: data.value });
  };

  return { data, error, load: loginLoad, requesting };
};

const signup = () => {
  const url = "http://localhost:4000/users/signup";
  const { data, error, load, requesting } = POST(url);

  const loginLoad = async (username, email, password) => {
    if (!(!email && !username) || !password)
      console.warn("Warning: No email/username or password given");
    await load({ username, email, password });
    // if (error.value === null) store.commit("saveUser", { user: data.value });
  };

  return { data, error, load: loginLoad, requesting };
};

export const userService = {
  login,
  signup,
  // logout,
};
