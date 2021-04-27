import axios from 'axios';
const baseurl = 'https://pokeapi.co/api/v2';

export const getPokemon = async (api) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: baseurl + api,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
