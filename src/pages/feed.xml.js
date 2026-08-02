import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site } from "../site.config";

export async function GET(context) {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: site.title,
    description: site.description,
    site: context.site,
    items: posts.slice(0, 10).map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      categories: post.data.categories,
    })),
  });
}
