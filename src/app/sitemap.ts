import { getStoryPosts } from "@/services/story/postService";
import { EPathName } from "@/types/story";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://xn--9t4b19booo6a320c.com";

  const dates = {
    now: new Date(),
    main: new Date("2025-03-24T15:38:00+09:00"),
    introduction: new Date("2025-03-22T14:15:00+09:00"),
    infoguide: new Date("2025-03-23T17:30:00+09:00"),
    navigate: new Date("2025-03-23T16:45:00+09:00"),
    therapies: new Date("2025-03-23T14:58:00+09:00"),
    story: new Date("2025-03-23T18:10:00+09:00"),
  };

  const storyPosts = await getStoryPosts(EPathName.STORY);

  // 게시글 URL 매핑
  const storyUrls = storyPosts.map((post) => ({
    url: `${baseUrl}/story/${encodeURIComponent(post.title)}/${post.id}`,
    lastModified: new Date(post.createdAt.toDate()),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: dates.now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/story`,
      lastModified: dates.now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/story/haewol`,
      lastModified: dates.now,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/introduction`,
      lastModified: dates.introduction,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/introduction/haewol`,
      lastModified: dates.now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/infoguide`,
      lastModified: dates.now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/navigate`,
      lastModified: dates.navigate,
      changeFrequency: "yearly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/therapies`,
      lastModified: dates.now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    ...storyUrls,
  ];
}
