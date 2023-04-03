import { IPost } from "@/types/post";

export const Post = ({ body, title }: IPost) => {
  return (
    <div>
      <br />
      <br />
      <h3>{title}</h3>
      <br />
      <p>{body}</p>
      <br />
      <hr />
    </div>
  );
};
