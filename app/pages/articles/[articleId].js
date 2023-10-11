import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/articleDetail.module.css';

function Article() {
    const router = useRouter();
    const { articleId } = router.query;

    const articleData = {
        title: `Title of the article ${articleId}`,
        content: `Content of the article ${articleId}.`,
        imageUrl: `/images/article${articleId}.png`,
        author: `Author Name of Article ${articleId}`,
        date: `Date of Article ${articleId}`
    };

    return (
        <>
            <Header />
            <div className={styles.articleBox}>
                <img src={articleData.imageUrl} alt={`Image of ${articleData.title}`} className={styles.articleImage} />
                <h1 className={styles.title}>{articleData.title}</h1>
                <p className={styles.authorDate}>{articleData.author} - {articleData.date}</p>
                <div className={styles.content}>
                    {articleData.content}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Article;
