import axios from 'axios';
const baseurl = 'http://localhost:1337/withdraws/';

export const getCharacter = async (year,month) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: baseurl + year+"/"+month,
    }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};