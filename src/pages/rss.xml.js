
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import config from '../../site/config.json';

export async function GET(context) {

	const posts = await getCollection('posts');

	return rss({
		title: config.title,
		description: config.description,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/${post.id}`,
    })),
	});
}
