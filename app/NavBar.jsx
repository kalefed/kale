import Link from 'next/link'
import styles from './Navbar.module.css';

export default function NavBar() {
  return (
    <div className={styles.navbar}>
        <Link href="/" className={styles.navItem}>home</Link>
        <Link href="/about" className={styles.navItem}>about</Link>
        <Link href="/education" className={styles.navItem}>education</Link>
        <Link href="/experience" className={styles.navItem}>experience</Link>
        <Link href="/toptens" className={styles.navItem}>my top tens</Link>
    </div>
  )
}