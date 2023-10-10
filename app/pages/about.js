import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/about.module.css';

function AboutPage() {
    return (
        <>
            <Header />
            <div className="container">
                <h1 className="heading">About Us</h1>
                <img className={styles.authorImage} src="/images/author.png" alt="Imagen del autor" />
                <p className={styles.description}>
                    We are a team passionate about sharing knowledge and experiences in the world of web development. Our blog seeks to educate, inspire and connect developers from all over the world.
                </p>
            </div>
            <Footer />
        </>
    );
}

export default AboutPage;