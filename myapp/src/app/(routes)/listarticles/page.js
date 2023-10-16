import Link from 'next/link';
import styles from '@/styles/articles.module.css';

function ArticlesPage() {
    const articles = [
        {
            id: 1,
            title: "Title of Article 1",
            summary: "Description of article 1...",
            imageUrl: "/article1.png"
        },
        {
            id: 2,
            title: "Title of Article 2",
            summary: "Description of article 2...",
            imageUrl: "/article2.png"
        }
    ];

    return (
        <div className="container">
            <h1 className="heading">Articles</h1>
            <div className={styles.articlesList}>
                {articles.map(article => (
                    <div key={article.id} className={styles.articleCard}>
                        <img src={article.imageUrl} alt={`Image of ${article.title}`} className={styles.articleImage} />
                        <h2 className={styles.articleTitle}>{article.title}</h2>
                        <p className={styles.articleSummary}>{article.summary}</p>
                        <Link href={`/article/${article.id}`}>
                            <p className={styles.readMore}>Read More</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ArticlesPage;



