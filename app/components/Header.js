import styles from '../styles/header.module.css';
import NavMenu from './NavMenu';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>My Blog</div>
            <NavMenu />
        </header>
    );
}

export default Header;