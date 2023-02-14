import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home News</title>
        <meta name="description" content="Home News" />
        <link rel="icon" href="/newsIcon.ico" />
      </Head>

      <main className={styles.main}>
        <div>Hola mundo</div>
      </main>
    </div>
  );
}
