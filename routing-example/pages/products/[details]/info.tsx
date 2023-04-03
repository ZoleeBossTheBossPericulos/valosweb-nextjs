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
        <h1>More details about {router.asPath.split("/").splice(-2, 1)}</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tristique maximus sem ut tincidunt. Cras non aliquet enim, id congue
            dolor. Pellentesque cursus maximus efficitur. Vestibulum varius,
            purus in auctor elementum, libero ante cursus mi, sit amet tincidunt
            magna magna sit amet enim. Phasellus non porta mi, id posuere quam.
            Etiam mi leo, porta vel ligula ac, mattis vehicula ipsum. Vivamus
            ornare, massa id porta tempor, nibh nunc venenatis lectus, sit amet
            lacinia lectus massa ut felis. Etiam ac efficitur est. Sed dictum ut
            leo in lacinia. Nunc est nibh, mollis id condimentum sed, volutpat
            scelerisque nisi. Donec faucibus hendrerit tempor. Donec venenatis
            ut neque eget aliquam. Suspendisse vel aliquam orci, eget vulputate
            enim. Curabitur rutrum vestibulum eleifend.
          </p>
          <br />
          <br />
          <br />
          <p>
            Mauris eget erat quam. Quisque consectetur porta ligula sit amet
            bibendum. Sed pharetra sodales ornare. Maecenas at scelerisque
            felis, vitae laoreet elit. Integer gravida tincidunt eros, ac
            consectetur nulla rutrum feugiat. Integer at massa egestas, aliquet
            dolor sed, vehicula eros. Maecenas lacinia blandit eros pharetra
            euismod. Aenean semper, augue quis condimentum consectetur, ligula
            libero interdum odio, quis lobortis sem nibh quis turpis. Cras a
            libero facilisis, vestibulum ligula at, tempor urna. Proin sit amet
            dui ut sapien pellentesque hendrerit. Curabitur posuere consequat
            ante, ac efficitur est porta non. Ut sodales enim quis commodo
            sagittis. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Integer risus lacus, finibus euismod
            dignissim nec, feugiat eleifend ligula.
          </p>
        </div>
        <Link href={"/products"}>
          <span className={styles.description}>&lt; BACK TO PRODUCTS</span>
        </Link>
      </main>
    </>
  );
}
