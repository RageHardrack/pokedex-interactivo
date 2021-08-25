import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon";

export const searchPokemon = async (pokemon) => {
  try {
    const { data } = await axios.get(`${url}/${pokemon}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPokemons = async (limit = 25, offset = 0) => {
  try {
    const { data } = await axios.get(`${url}?limit=${limit}&offset=${offset}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPokeData = async (pokeUrl) => {
  try {
    const { data } = await axios.get(pokeUrl);

    return data;
  } catch (error) {
    console.error(error);
  }
};
