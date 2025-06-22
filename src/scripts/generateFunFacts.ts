import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import { getBlogs } from '@/data/blogs';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const outputPath = path.resolve(process.cwd(), 'src/data/funFacts.json');

async function generateFunFactForPost(title: string): Promise<string> {
  const prompt = `Give me one fun or surprising fact related to the topic: "${title}" that would engage tech readers. Keep it under 30 words.`;

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
    max_tokens: 100,
  });

  return response.choices[0]?.message?.content?.trim() || 'No fun fact available.';
}

async function main(): Promise<void> {
    try {
        const blogs = await getBlogs();
        const facts: Record<string, string> = {};

        for (const blog of blogs) {
            const fact = await generateFunFactForPost(blog.title);
            facts[blog.slug] = fact;
            console.log(`✔️ ${blog.slug}: ${fact}`);

            // Add small delay to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 500));
        }

        fs.writeFileSync(outputPath, JSON.stringify(facts, null, 2));
        console.log('✅ Fun facts generated and saved to', outputPath);
    } catch (error) {
        console.error('Error generating fun facts:', error);
        process.exit(1);
    }
}   

main();