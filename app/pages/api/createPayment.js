import axios from 'axios';
import { getAccessToken } from "../../utils/HelloAsso";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, description, email, firstName, lastName, studentId } = req.body;

    try {
      const accessToken = await getAccessToken();

      const response = await axios.post(`${process.env.HELLOASSO_API_URL}/payments`, {
        amount,
        description,
        payer: {
          email,
          first_name: firstName,
          last_name: lastName,
        },
        metadata: {
          student_id: studentId,
        },
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
