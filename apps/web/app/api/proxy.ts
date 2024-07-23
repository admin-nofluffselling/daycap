import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await axios.post(
      'https://dev.collaborative-dynamics.com/api/private/v0/workflow/execute',
      req.body,
      {
        headers: {
          'Authorization': 'Bearer sk-78aebe5a5b62463e9d8a56dd6da0d1b3c75a7ccc8e254ca4ab6d3e6eb45f7ae2',
          'Content-Type': 'application/json'
        }
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: 'An error occurred', error: String(error) });
    }
  }
}