import Link from 'next/link';
import styles from './Navbar.module.scss';
import { apiConfig } from '../../config/api';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          {/* <li>
            <Link href="/about" className={styles.link}>
              About
            </Link>
          </li> */}
          <li>
            <Link href={`${apiConfig.baseUrl}${apiConfig.endpoints.contact}`} className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.loginButton}>
        <Link href={`${apiConfig.baseUrl}${apiConfig.endpoints.login}`} className={styles.link}>
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
