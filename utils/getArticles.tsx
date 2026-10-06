import fs from "fs";
import path from "path";

export interface FAQItem {
    question: string;
    answer: string;
}

export interface Article {
    title: string;
    slug: string;
    description: string;
    date: string;
    thumbnail: string;
    thumbnailAlt: string;
    content: string;
    faq: FAQItem[];
}

const articlesDir = path.join(process.cwd(), "articles-html");

function parseArticle(fileName: string): Article {
    const slug = fileName.replace(/\.html$/i, "");
    const filePath = path.join(articlesDir, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Title
    const matchTitle = fileContent.match(/<title>([\s\S]*?)<\/title>/i);

    const title = matchTitle ? matchTitle[1].trim() : "عنوان نامشخص";

    // Description
    const matchDescription = fileContent.match(
        /<meta\b[^>]*\bname=["']description["'][^>]*\bcontent=["']([\s\S]*?)["'][^>]*>/i
    );

    const description = matchDescription ? matchDescription[1].trim() : "توضیحات مقاله موجود نیست.";

    // Date
    const matchDate = fileContent.match(/<meta\b[^>]*\bname=["']date["'][^>]*\bcontent=["']([\s\S]*?)["'][^>]*>/i);

    const date = matchDate ? matchDate[1].trim() : "";

    // Thumbnail
    const matchThumbnail = fileContent.match(/<thumbnail(?:\s+alt=["']([\s\S]*?)["'])?\s*>([\s\S]*?)<\/thumbnail>/i);

    const thumbnail = matchThumbnail ? matchThumbnail[2].trim() : "/placeholder.jpg";

    // اگر thumbnailAlt وجود نداشته باشد، title استفاده می‌شود
    const thumbnailAlt = matchThumbnail?.[1]?.trim() || title;

    /*
     * فقط محتوای داخل <article> را استخراج می‌کنیم.
     *
     * این کار باعث می‌شود:
     * - metadata بالای فایل نمایش داده نشود
     * - summary قدیمی metadata نمایش داده نشود
     * - summaryهای داخل details/FAQ باقی بمانند
     */
    const articleMatch = fileContent.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i);

    const content = articleMatch ? articleMatch[1].trim() : "";

    /*
     * استخراج FAQ از details/summary
     */
    const faq: FAQItem[] = [];

    const detailsMatches = content.matchAll(
        /<details\b[^>]*>[\s\S]*?<summary\b[^>]*>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi
    );

    for (const match of detailsMatches) {
        const question = match[1]
        .replace(/<[^>]+>/g, "")
        .replace(/\s+/g, " ")
        .trim();

        const answer = match[2]
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();

        if (question && answer) {
            faq.push({
                question,
                answer,
            });
        }
    }

    return {
        title,
        slug,
        description,
        date,
        thumbnail,
        thumbnailAlt,
        content,
        faq,
    };
}

export function getAllArticles(): Article[] {
    const fileNames = fs.readdirSync(articlesDir).filter((fileName) => fileName.toLowerCase().endsWith(".html"));

    return fileNames.map(parseArticle);
}

export function getArticleBySlug(slug: string): Article | null {
    const safeSlug = slug.replace(/\.html$/i, "");

    const filePath = path.join(articlesDir, `${safeSlug}.html`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    return parseArticle(`${safeSlug}.html`);
}
