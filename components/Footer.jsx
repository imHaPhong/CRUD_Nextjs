import Link from 'next/link'
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p>Copyright</p>
            <p>
                <Link href="/about">About this project</Link>
            </p>
        </div>
    )
}
