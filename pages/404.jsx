import Layout from '../components/Layout'
import styles from '../styles/404.module.css'
import Link from 'next/link'
import { FaExclamationTriangle } from 'react-icons/fa'

export default function NotFoundPage() {
    return (
        <Layout title="Page Not Found">
            <h1 className={styles.error}>
                <FaExclamationTriangle/> 404</h1>
            <h4>Sorry, there is noting here</h4>
            <Link href="/">Go back home</Link>
        </Layout>
    )
}
