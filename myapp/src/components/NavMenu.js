import Link from 'next/link';
import styles from '@/styles/navmenu.module.css';

function NavMenu() {
    return (
        <nav className={styles.navMenu}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About Us</Link>
            <Link href="/listarticles" className={styles.navLink}>Articles</Link>
            <Link href="/contacts" className={styles.navLink}>Contacts</Link>
        </nav>
    );
}

export default NavMenu;