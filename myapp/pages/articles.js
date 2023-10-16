import styles from '@/styles/articles.module.css';
import Layout from '@/components/Layout';

function ArticlesPage() {
    const articles = [
        {
            id: 1,
            title: "Title of Article 1",
            summary: "Description of article 1...",
            imageUrl: "/images/article1.png"
        },
        {
            id: 2,
            title: "Title of Article 2",
            summary: "Description of article 2...",
            imageUrl: "/images/article2.png"
        }
    ];

    return (
        <Layout>
            <div className="container">
                <h1 className="heading">Artículos</h1>
                <div className={styles.articlesList}>
                    {articles.map(article => (
                        <div key={article.id} className={styles.articleCard}>
                            <img src={article.imageUrl} alt={`Image of ${article.title}`} className={styles.articleImage} />
                            <h2 className={styles.articleTitle}>{article.title}</h2>
                            <p className={styles.articleSummary}>{article.summary}</p>
                            <a href={`/articles/${article.id}`} className={styles.readMore}>Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default ArticlesPage;