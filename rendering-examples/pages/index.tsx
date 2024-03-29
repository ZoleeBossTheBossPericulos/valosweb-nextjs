import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Difference between data fetching</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <br />
          <Link href={"/posts/ssg"}>Static site generation</Link>
          <br />
          <br />
          <Link href={"/posts/ssr"}>Server side rendering</Link>
          <br />
          <br />
          <Link href={"/posts/csdf"}>Client side data fetching</Link>
          <br />
          <br />
          <Link href={"/posts/csdf-swr"}>
            Client side data fetching using SWR
          </Link>
        </div>
      </main>
    </>
  );
}
