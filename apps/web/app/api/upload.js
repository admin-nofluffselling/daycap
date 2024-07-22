import { NextResponse } from 'next/server';
import axios from 'axios';
import formidable from 'formidable-serverless';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Error parsing the file' });
      }

      const file = files.file;

      try {
        const response = await axios.post(
          'https://api.openai.com/v1/engines/davinci-codex/completions',
          {
            prompt: `Process the following content: ${fs.readFileSync(file.path, 'utf8')}`,
            max_tokens: 100,
          },
          {
            headers: {
              Authorization: `Bearer YOUR_API_KEY`,
              'Content-Type': 'application/json',
            },
          }
        );

        fs.unlinkSync(file.path);

        return res.status(200).json({ result: response.data });
      } catch (error) {
        return res.status(500).json({ error: 'Error processing the file' });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
