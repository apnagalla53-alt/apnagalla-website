import { getCollection } from 'astro:content';
import { isPublished } from './blog-policy';
export async function publishedPosts() {
 return (await getCollection('blog',({data})=>isPublished(data))).sort((a,b)=>b.data.published.localeCompare(a.data.published)||a.data.title.localeCompare(b.data.title));
}
export const postUrl=(id:string)=>'/blog/'+id+'/';
export const displayDate=(value:string)=>new Date(value+'T00:00:00+05:30').toLocaleDateString('en-IN',{timeZone:'Asia/Kolkata',day:'numeric',month:'long',year:'numeric'});
