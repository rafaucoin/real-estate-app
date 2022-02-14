import axios from "axios";

const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (base) => {
  const { response } = await axios.get(baseUrl, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "cc13de031emsh93cb941a202a59ep16c41djsn5089d41b6f68",
    },
  });
  return response;
};
