import Link from 'next/link'
import styles from './layout.module.css'

export default function Navbar() {
    return (

    <nav className={styles.navbar}>  
      <nav className={styles.nav}>
        <Link href="https://sebagudelo.com/">
          <a>Home</a>
        </Link>
        <Link href="https://sebagudelo.com/#about">
          <a>About</a>
        </Link>
        <Link href="https://sebagudelo.com/#writing">
          <a>Writing</a>
        </Link>
        <Link href="https://sebagudelo.com/#contact">
          <a>Contact</a>
        </Link>
      </nav>
      </nav>
    )
  }