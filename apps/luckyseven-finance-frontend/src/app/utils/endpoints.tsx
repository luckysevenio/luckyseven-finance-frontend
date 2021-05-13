import axios from 'axios';
const baseurl = 'https://rickandmortyapi.com/api/';

export const getCharacter = async (api) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: baseurl + api,
    }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
