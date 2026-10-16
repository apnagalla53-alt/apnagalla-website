import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(value=>!Number.isNaN(Date.parse(value))&&new Date(value).toISOString().startsWith(value),'Use a real YYYY-MM-DD date');
const blog = defineCollection({
  loader:glob({pattern:'**/*.md',base:'./src/content/blog'}),
  schema:z.object({title:z.string().min(20).max(100),description:z.string().min(90).max(190),published:date,updated:date.optional(),category:z.enum(['Billing','Khata','Stock','Daily Galla','Purchases','Profit','Shop Setup']),primaryQuestion:z.string().min(15),tags:z.array(z.string()).min(2).max(8),draft:z.boolean().default(false),faqs:z.array(z.object({question:z.string(),answer:z.string()})).min(2),related:z.array(z.string()).min(2)}).refine(data=>!data.updated||data.updated>=data.published,'Updated date must not precede publication'),
});
export const collections={blog};
