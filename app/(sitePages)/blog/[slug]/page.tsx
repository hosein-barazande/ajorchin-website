import type {Metadata} from "next";
import {getArticleBySlug, getAllArticles} from "@/utils/getArticles";
import {notFound} from "next/navigation";
import Style from "../blog.module.css";

interface Props {
    params: {
        slug: string;
    };
}

const siteUrl = "https://ajoorchin.com";

export async function generateStaticParams() {
    const articles = getAllArticles();

    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const article = getArticleBySlug(params.slug);

    if (!article) {
        return {};
    }

    const articleUrl = `${siteUrl}/blog/${article.slug}`;

    return {
        title: article.title,

        description: article.description,

        alternates: {
            canonical: articleUrl,
        },

        openGraph: {
            title: article.title,
            description: article.description,
            url: articleUrl,
            type: "article",

            publishedTime: article.date || undefined,

            images: article.thumbnail
                ? [
                      {
                          url: article.thumbnail,
                          alt: article.thumbnailAlt,
                      },
                  ]
                : undefined,
        },

        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.description,

            images: article.thumbnail ? [article.thumbnail] : undefined,
        },
    };
}

export default function ArticlePage({params}: Props) {
    const article = getArticleBySlug(params.slug);

    if (!article) {
        return notFound();
    }

    const articleUrl = `${siteUrl}/blog/${article.slug}`;

    /*
     * Article Schema
     */
    const articleSchema = {
        "@type": "Article",
        "@id": `${articleUrl}#article`,

        headline: article.title,
        description: article.description,

        image: article.thumbnail ? [new URL(article.thumbnail, siteUrl).toString()] : undefined,

        datePublished: article.date || undefined,
        dateModified: article.date || undefined,

        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": articleUrl,
        },

        author: {
            "@type": "Organization",
            name: "گروه ساختمان سازی آجرچین",
            url: siteUrl,
        },

        publisher: {
            "@type": "Organization",
            name: "گروه ساختمان سازی آجرچین",
            url: siteUrl,
        },
    };

    /*
     * Breadcrumb Schema
     */
    const breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}#breadcrumb`,

        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "خانه",
                item: siteUrl,
            },

            {
                "@type": "ListItem",
                position: 2,
                name: "مقالات",
                item: `${siteUrl}/blog`,
            },

            {
                "@type": "ListItem",
                position: 3,
                name: article.title,
                item: articleUrl,
            },
        ],
    };

    /*
     * FAQ Schema
     *
     * فقط زمانی ساخته می‌شود که مقاله
     * FAQ واقعی داشته باشد.
     */
    const faqSchema =
        article.faq.length > 0
            ? {
                  "@type": "FAQPage",
                  "@id": `${articleUrl}#faq`,

                  mainEntity: article.faq.map((item) => ({
                      "@type": "Question",

                      name: item.question,

                      acceptedAnswer: {
                          "@type": "Answer",
                          text: item.answer,
                      },
                  })),
              }
            : null;

    /*
     * Combined JSON-LD
     */
    const structuredData = {
        "@context": "https://schema.org",

        "@graph": [articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            <div className={Style.articleContent}>
                {article.thumbnail && (
                    <img src={article.thumbnail} alt={article.thumbnailAlt} className="articleThumbnail" />
                )}

                <div
                    dangerouslySetInnerHTML={{
                        __html: article.content,
                    }}
                />
            </div>
        </>
    );
}
