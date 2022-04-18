import GET from "@/composables/gets/GET";

const getGames = () => {
  const url = `${process.env.VUE_APP_BASE_URL}/Games`;

  const { data, error, load, requesting } = GET(url);

  return { data, error, load, requesting };
};

const getGame = (id) => {
  const url = `${process.env.VUE_APP_BASE_URL}/Games/${id}`;

  const { data, error, load, requesting } = GET(url);

  return { data, error, load, requesting };
};

export const gameService = {
  getGame,
  getGames,
  // logout,
};
