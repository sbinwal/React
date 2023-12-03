import { OPEN_API_KEY } from "../constants/constants";
import OpenAI from 'openai';

export const openai = new OpenAI({
    apiKey: OPEN_API_KEY,
    dangerouslyAllowBrowser: true // defaults to process.env["OPENAI_API_KEY"]
  });