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

export const getPokemons = async (limit = 10, offset = 0) => {
  try {
    const { data } = await axios.get(`${url}?limit=${limit}&offset=${offset}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};
