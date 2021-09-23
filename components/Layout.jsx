import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Header from './Header'

export default function Layout({title, keywords, desc, children}) {
    return (
        <div>
            <Head>
            <title>{title}</title>
            <meta name='description' content={desc}/>
            <meta name="keywords" content={keywords}/>
            </Head>
            <Header/>
          <div className={styles.container}>
          {children}
          </div>
          <Footer/>
        </div>
    )
}


Layout.defaultProps = {
    title: "DJ Events | Find the hottest parties",
    desc: "Find the hottest parties",
    keywords: "music, dj, edm"
}