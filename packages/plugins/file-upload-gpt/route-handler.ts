// route-handler.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { analyzeFileContent } from './file-upload-service';
import formidable from 'formidable';
import fs from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: 'Error parsing the file' });
      return;
    }

    const file = files.file;
    if (!file || Array.isArray(file)) {
      res.status(400).json({ error: 'Invalid file upload' });
      return;
    }

    try {
      const fileContent = await fs.readFile(file.filepath, 'utf-8');
      const result = await analyzeFileContent(fileContent);
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: 'Error processing the file' });
    }
  });
}
