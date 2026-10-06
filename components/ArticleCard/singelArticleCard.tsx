import Link from "next/link";
import styles from "./articleCard.module.css";

interface Props {
    article: {
        title: string;
        slug: string;
        description: string;
        thumbnail: string;
        thumbnailAlt: string;
    };
}

export default function ArticleCard({article}: Props) {
    return (
        <Link href={`/blog/${article.slug}`} className={styles.button}>
            <div className={styles.card}>
                <img src={article.thumbnail} alt={article.thumbnailAlt} className={styles.image} />

                <h2>{article.title}</h2>

                <p>{article.description}</p>

                <button type="button">مطالعه مقاله</button>
            </div>
        </Link>
    );
}
