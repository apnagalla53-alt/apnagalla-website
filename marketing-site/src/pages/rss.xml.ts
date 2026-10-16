import rss from '@astrojs/rss';
import { publishedPosts, postUrl } from '../lib/blog';
import { SITE } from '../lib/seo';
export async function GET() {
 const posts=await publishedPosts();
 return rss({title:'Apna Galla — Shopkeeper Guides',description:'Practical billing, khata, stock and dukaan hisaab guides, in English with Hindi/Hinglish explanations.',site:SITE,items:posts.map(post=>({title:post.data.title,description:post.data.description,pubDate:new Date(post.data.published+'T00:00:00+05:30'),link:postUrl(post.id)})),customData:'<language>en-IN</language>'});
}
