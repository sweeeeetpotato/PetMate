import axios from 'axios';

const postApiData = async (URL) => {
  const token = JSON.parse(localStorage.getItem('token'));
  
  try {
    const response = await axios.post(URL, {}, {
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

export default postApiData;
