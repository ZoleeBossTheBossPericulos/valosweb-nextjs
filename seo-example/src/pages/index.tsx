import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>SEO</title>
        <meta name="description" content="You can search for this" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="robots"
          content="noindex,nofollow" /*
        Will not be indexed and shown in search results.
        Links on this site will not be crawled.
        */
        />
        <meta
          name="robots"
          content="all" /*
        Allow bots to index and follow.
        */
        />
        <meta
          name="google"
          content="nositelinkssearchbox" /*
        Do not suggest site in searchbox.
        */
        />
        <meta
          name="google"
          content="notranslate" /*
        Do not translate this site.
        */
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://example.com/index" /*
        Tell search engines if two of the same paths lead to the same.
        Lots of duplicated pages across same or different domains can lead to bad rankings or even penalizations.
        */
        />
      </Head>
      <main className={styles.main}>
        <h1>Hello world!</h1>
        <p>
          Eiusmod aliqua reprehenderit elit proident dolor aliqua labore et
          Lorem est Lorem deserunt pariatur nisi. Aliqua est do cillum excepteur
          do nostrud qui nisi labore proident. Ex nulla amet ullamco culpa
          occaecat commodo consequat nisi eiusmod. Laboris elit nostrud laboris
          amet deserunt dolor ex dolor. Exercitation do laboris proident ut
          incididunt ut consectetur eiusmod do deserunt.
        </p>
        <p>
          Commodo et voluptate amet dolore consectetur incididunt consequat.
          Dolor nisi ex culpa aute nisi dolor aliquip officia nulla ullamco
          mollit ullamco. Lorem eu occaecat elit ut in est mollit Lorem. Ex
          dolor labore amet ut magna. Lorem reprehenderit reprehenderit esse do
          tempor. Mollit occaecat dolor quis minim anim nisi ullamco id ut elit.
          Qui ut irure Lorem occaecat Lorem Lorem Lorem mollit tempor.
        </p>
        <p>
          Reprehenderit dolore eu elit amet sunt dolore. Ad consectetur anim
          labore non commodo mollit proident consequat fugiat. Aliquip
          consectetur consequat veniam sunt Lorem Lorem ipsum irure.
          Reprehenderit laboris elit adipisicing cupidatat amet. Ut
          reprehenderit adipisicing labore consectetur velit exercitation mollit
          elit nisi. Quis laborum non eu labore velit id ex ad.
        </p>
        <p>
          Adipisicing et non aliqua do sit officia deserunt laboris non. Dolore
          aute proident velit nulla excepteur anim pariatur cillum quis dolore
          sit. Aliquip consequat minim aliquip aliqua reprehenderit aliqua
          ullamco elit pariatur. Aliquip veniam id mollit sunt consectetur quis
          commodo pariatur. Do tempor in ipsum fugiat excepteur dolore nulla ex
          do.
        </p>
        {/*Dynamic image generation*/}
        <Image
          src="/large-image.jpg"
          alt="Large Image"
          width={1290}
          height={1882}
        />
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        />
      </main>
    </>
  );
}
