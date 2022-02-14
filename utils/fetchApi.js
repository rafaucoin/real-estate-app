import axios from "axios";

const baseUrl = "https://bayut.p.rapidapi.com";

var sale = {
  method: "GET",
  url: "https://bayut.p.rapidapi.com/properties/list",
  params: {
    locationExternalIDs: "5002",
    purpose: "for-sale",
    hitsPerPage: "6",
    page: "0",
    lang: "en",
    sort: "city-level-score",
    rentFrequency: "monthly",
    categoryExternalID: "4",
  },
  headers: {
    "x-rapidapi-host": "bayut.p.rapidapi.com",
    "x-rapidapi-key": "cc13de031emsh93cb941a202a59ep16c41djsn5089d41b6f68",
  },
};

export const fetchSale = async (res) => {
  try {
    const data = await axios.request(sale);
    return data.data.hits;
  } catch (error) {
    console.error(error);
    return error;
  }
};

var rent = {
  method: "GET",
  url: "https://bayut.p.rapidapi.com/properties/list",
  params: {
    locationExternalIDs: "5002",
    purpose: "for-rent",
    hitsPerPage: "6",
    page: "0",
    lang: "en",
    sort: "city-level-score",
    rentFrequency: "monthly",
    categoryExternalID: "4",
  },
  headers: {
    "x-rapidapi-host": "bayut.p.rapidapi.com",
    "x-rapidapi-key": "cc13de031emsh93cb941a202a59ep16c41djsn5089d41b6f68",
  },
};
export const fetchRent = async (res) => {
  try {
    const data = await axios.request(rent);
    // console.log(data.data.hits);
    return data.data.hits;
  } catch (error) {
    console.error(error);
    return error;
  }
};
