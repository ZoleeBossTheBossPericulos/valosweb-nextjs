import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="About Us page in a next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>This is an example of products listing page.</h1>
        </div>
        <Link href={"/products/gaming-mouse"}>
          <div className={styles.card}>Gaming mouse</div>
        </Link>
        <Link href={"/products/gaming-keyboard"}>
          <div className={styles.card}>Gaming keyboard</div>
        </Link>
        <Link href={"/"}>
          <span className={styles.description}>&lt; HOME</span>
        </Link>
      </main>
    </>
  );
}
