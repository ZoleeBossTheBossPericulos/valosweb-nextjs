import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.asPath.split("/").pop()?.toLocaleUpperCase()}</title>
        <meta name="description" content="About Us page in a next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Here is the description of the item.</h1>
        </div>
        <Link href={`/products/${router.asPath.split("/").pop()}/info`}>
          <span className={styles.description}>MORE INFO &gt;</span>
        </Link>
        <Link href={"/products"}>
          <span className={styles.description}>&lt; BACK TO PRODUCTS</span>
        </Link>
      </main>
    </>
  );
}
