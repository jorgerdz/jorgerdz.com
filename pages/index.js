import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>jorgerdz.com</title>
        <meta name="description" content="personal site of jorge rodriguez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.emphasis}>jorge rodriguez</span> is developing software for the web
        </h1>

        <p className={styles.description}>
          <ul>
            <li>blog</li>
          </ul>
        </p>

      </main>

      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  )
}
