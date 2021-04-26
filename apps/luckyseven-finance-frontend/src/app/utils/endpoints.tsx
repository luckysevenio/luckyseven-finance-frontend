import axios from 'axios';
import { url } from 'node:inspector';
const baseurl = 'https://pokeapi.co/api/v2/';

export const getPokemon = async (api) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: baseurl + api,
    });
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
    console.log('a')
  }
};
