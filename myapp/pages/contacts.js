import styles from '@/styles/contacts.module.css';
import Layout from '@/components/Layout';

function ContactsPage() {
    return (
        <Layout>
            <div className="container">
                <h1 className="heading">Contact</h1>
                <form className={styles.contactForm}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="subject">Subject:</label>
                        <input type="text" id="subject" name="subject" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>
            </div>
        </Layout>
    );
}

export default ContactsPage;