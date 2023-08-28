import axios from 'axios';

const getApiData = async (URL) => {
  const token = JSON.parse(localStorage.getItem('token'));

  try {
    const response = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getApiData;
