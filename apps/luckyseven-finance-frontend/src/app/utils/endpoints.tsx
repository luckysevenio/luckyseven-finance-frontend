import axios from 'axios';
const baseurl = 'https://pokeapi.co/api/v2';

export const getPokemon = async (id) => {
  const { data } = await axios({
    method: 'get',
    url: baseurl + '/pokemon' + id,
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone',
    },
  });
  return data;
};
