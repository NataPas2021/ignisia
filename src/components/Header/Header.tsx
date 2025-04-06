import styles from './Header.module.css';

const Header = () => (
  <header className={styles.headerContainer}>
    <h1 className={styles.headerTitle}>Ignisia</h1>
    {/* Можна додати кнопки, наприклад, для авторизації */}
    <button className={styles.headerButton}>Log In</button>
  </header>
);

export default Header;
