// file-upload-service.ts
import { OpenAIApi, Configuration } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function analyzeFileContent(fileContent: string): Promise<string> {
  const prompt = `Assess the veracity of each claim made in the attached text and rate its truthfulness on a scale of 1-10.`;
  const response = await openai.createCompletion({
    model: 'gpt-3.5-turbo',
    prompt: `${prompt}\n\n${fileContent}`,
    max_tokens: 1000,
  });
  return response.data.choices[0].text.trim();
}
