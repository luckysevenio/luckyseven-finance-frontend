import axios from 'axios';
const baseurl = 'https://api.fintoc.com/v1/';

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