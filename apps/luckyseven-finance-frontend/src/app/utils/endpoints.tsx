import axios from 'axios';
const baseurl = 'https://pokeapi.co/api/v2';

export const getPokemon = async (id) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: baseurl + '/pokemon/' + id,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
