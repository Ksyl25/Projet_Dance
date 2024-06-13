import axios from 'axios';

export const getAccessToken = async () => {
  const response = await axios.post(`${process.env.HELLOASSO_API_URL}/oauth2/token`, {
    grant_type: 'client_credentials',
    client_id: process.env.HELLOASSO_API_KEY,
    client_secret: process.env.HELLOASSO_API_SECRET,
  });
  return response.data.access_token;
};
