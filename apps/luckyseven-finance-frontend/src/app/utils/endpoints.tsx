import axios from 'axios';
const baseurl = 'http://localhost:1337/';

export const callApi = async (api) => {
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
export const postApi = async (api,payload) => {
  const url=baseurl + api;
  try {
    await axios.post(`${url}`,payload);
  } catch (error) {
    console.log(error);
  }
};
