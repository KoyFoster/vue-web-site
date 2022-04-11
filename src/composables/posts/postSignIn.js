import POST from "./POST";

const postSignIn = (email, password) => {
  // calling local REST API ATM
  const url = "http://localhost:4000/users/authenticate";
  // const url = "http://localhost:3000/Users";

  const { data, error, load, requesting } = POST(url, { email, password });

  return { data, error, load, requesting };
};

export default postSignIn;
