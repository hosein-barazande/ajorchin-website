import type { MetadataRoute } from "next";
import { getAllArticles } from "@/utils/getArticles";

const siteUrl = "https://ajoorchin.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const articles = getAllArticles();

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: siteUrl,
        },

        {
            url: `${siteUrl}/about-us`,
        },

        {
            url: `${siteUrl}/blog`,
        },

        {
            url: `${siteUrl}/contact-us`,
        },

        {
            url: `${siteUrl}/our-project`,
        },

        {
            url: `${siteUrl}/portfolio`,
        },
    ];

    const articleUrls: MetadataRoute.Sitemap =
        articles.map((article) => ({
            url: `${siteUrl}/blog/${article.slug}`,

            lastModified: article.date
                ? new Date(article.date)
                : undefined,
        }));

    return [
        ...staticPages,
        ...articleUrls,
    ];
}