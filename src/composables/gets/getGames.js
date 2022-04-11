import GET from "./GET";

const getGames = () => {
  const url = "http://localhost:3000/games";

  const { data, error, load, requesting } = GET(url);

  return { data, error, load, requesting };
};

export default getGames;
