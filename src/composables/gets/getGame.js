import GET from "./GET";

const getGame = (id) => {
  const url = `${process.env.VUE_APP_BASE_URL}/Games/${id}`;

  const { data, error, load, requesting } = GET(url);

  return { data, error, load, requesting };
};

export default getGame;
