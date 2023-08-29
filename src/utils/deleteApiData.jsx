import axios from 'axios';

const deleteApiData = async (URL) => {
  const token = JSON.parse(localStorage.getItem('token'));

  try {
    const response = await axios.delete(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default deleteApiData