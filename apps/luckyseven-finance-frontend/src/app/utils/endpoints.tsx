import axios from 'axios';
const baseurl = 'http://localhost:1337/withdraws/';

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
