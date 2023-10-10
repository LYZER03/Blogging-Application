import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/home.module.css';


function HomePage() {
    return (
        <>
            <Header />
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
            <Footer />
        </>
    );
}

export default HomePage;