import GET from "./GET";

const getGames = () => {
  const url = `${process.env.VUE_APP_BASE_URL}/Games`;

  const { data, error, load, requesting } = GET(url);

  return { data, error, load, requesting };
};

export default getGames;
