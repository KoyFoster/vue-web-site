import GET from "./GET";

const getGame = (id) => {
  const url = `http://localhost:3000/Games/${id}`;

  const { data, error, load, requesting } = GET(url);

  return { data, error, load, requesting };
};

export default getGame;
