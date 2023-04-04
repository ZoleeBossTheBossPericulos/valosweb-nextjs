import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { GetServerSidePropsResult } from "next";
import { apiFetcher } from "@/helper/fetcher";
import { IPost, IPostList } from "@/types/post";
import { Post } from "@/components/Post";

export default function Posts({ posts }: IPostList) {
  return (
    <>
      <Head>
        <title>SSR</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>
          Here we will se the data accessed by the getServerSideProps( ). The
          HTML is generated at request time.
        </h1>
        <br />
        <br />
        <br />
        <div>
          {posts.map((post: IPost) => {
            return (
              <div key={post.id}>
                <Post {...post} />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<IPostList>
> {
  const postsData = await apiFetcher<IPost[]>("http://localhost:4000/posts");

  return {
    props: {
      posts: postsData,
    },
  };
}