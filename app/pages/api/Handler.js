import { createPayment } from "../../utils/PaymentService";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await createPayment(req.body);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
