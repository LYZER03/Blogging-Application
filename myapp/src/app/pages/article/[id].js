import { useRouter } from 'next/router';
import styles from '@/styles/articleDetail.module.css';

function Article() {
    const router = useRouter();
    const { id } = router.query;
    
    const articleData = {
        title: `Title of the article ${id}`,
        content: `Content of the article ${id}.`,
        imageUrl: `/article${id}.png`,
        author: `Author Name of Article ${id}`,
        date: `Date of Article ${id}`
    };

    return (
        <div className={styles.articleBox}>
            <img src={articleData.imageUrl} alt={`Image of ${articleData.title}`} className={styles.articleImage} />
            <h1 className={styles.title}>{articleData.title}</h1>
            <p className={styles.authorDate}>{articleData.author} - {articleData.date}</p>
            <div className={styles.content}>
                {articleData.content}
            </div>
        </div>
    );
}

export default Article;




