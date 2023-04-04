"use client";

import { useEffect, useRef, RefObject } from "react";
import useSWR from "swr";
import { clientPusher } from "../pusher";
import { Message } from "../typings";
import fetcher from "../utils/fetchMessages";
import MessageComponent from "./MessageComponent";

type Props = {
  initialMessages: Message[];
};

function MessageList({ initialMessages }: Props) {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<Message[]>("/api/getMessages", fetcher);

  const myRef: RefObject<HTMLDivElement> = useRef(null);

  const scrollToMyRef = () => {
    if (myRef.current) {
      myRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    console.log("here");
    scrollToMyRef();
    const channel = clientPusher.subscribe("messages");

    channel.bind("new-message", async (data: Message) => {
      if (messages?.find((message) => message.id === data.id)) return;

      if (!messages) {
        mutate(fetcher);
      } else {
        mutate(fetcher, {
          optimisticData: [data, ...messages!],
          rollbackOnError: true,
        });
      }
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, mutate, clientPusher]);

  return (
    <div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto flex flex-col-reverse">
      {(messages || initialMessages).map((message, index) => (
        <div key={message.id}>
          {messages && index === 0 ? (
            <MessageComponent ref={myRef} key={message.id} message={message} />
          ) : (
            <MessageComponent key={message.id} message={message} />
          )}
        </div>
      ))}
    </div>
  );
}

export default MessageList;
