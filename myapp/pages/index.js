import styles from '@/styles/home.module.css';
import Layout from '@/components/Layout';


function HomePage() {
    return (
        <Layout>
            <div className="container">
                <div className={styles.articleList}>
                    <div className={styles.article}>
                        <img src="/images/article1.png" alt="Image relevant of article 1" />
                        <h2>Title of article 1</h2>
                        <p>Lorem Ipsum ...</p>
                    </div>
                    <div className={styles.article}>
                        <img src="/images/article2.png" alt="Image relevant of article 2" />
                        <h2>Title of article 2</h2>
                        <p>Lorem Ipsum ...</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;