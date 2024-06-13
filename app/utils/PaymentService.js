import axios from 'axios';
import { getAccessToken } from "./HelloAsso";

export const createPayment = async (paymentData) => {
  const accessToken = await getAccessToken();
  return axios.post(`${process.env.HELLOASSO_API_URL}/payments`, paymentData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
};
