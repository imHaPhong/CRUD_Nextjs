import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <a href="">DJ Events</a>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/events">
                            <a href="">Events</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
