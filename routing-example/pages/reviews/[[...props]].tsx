import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      color: "black",
    },
  };

  function closeModal(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    setIsOpen(false);
    router.push("/reviews");
  }

  function openModal() {
    router.push("/reviews/gaming-mouse");
    setIsOpen(true);
  }

  useEffect(() => {
    router.asPath.includes("gaming-mouse") && setIsOpen(true);
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>Reviews</title>
        <meta name="description" content="About Us page in a next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Product reviews listing page.</h1>
        </div>
        <div onClick={openModal} id="react-modal">
          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <button onClick={closeModal}>Close</button>
            <div>
              <h1>Ratings about this mouse</h1>
              <p>This is really good mouse. 5 stars. ~ Laura</p>
            </div>
          </Modal>
          <div className={styles.card}>
            <h1>Gaming mouse</h1>
          </div>
        </div>
        <Link href={"/"}>
          <span className={styles.description}>&lt; HOME</span>
        </Link>
      </main>
    </>
  );
}
