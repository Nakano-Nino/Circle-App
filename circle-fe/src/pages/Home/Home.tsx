import { Heading, Stack } from "@chakra-ui/react";
// import { useState } from "react";
import { ThreadType } from "@/types/ThreadType";
import ThreadBase from "@/features/threads/components/ThreadBase";
import { useThread } from "@/features/threads/hooks/useThread";
import ThreadForm from "@/features/threads/components/ThreadForm";
import { Replies } from "@/types/ReplyType";
import { LikeType } from "@/types/LikeType";

function Home() {
  const {threads} = useThread();      

  return (
    <>
        <Heading size={"md"} color={"gray.100"}>Home</Heading>
        <ThreadForm />
        <Stack mt={6} >
          {threads &&
            threads.map((thread: ThreadType) => (
              <ThreadBase
                key={thread.id}
                id={thread.id}
                content={thread.content}
                image={thread.image}
                users={thread.users}
                replies={thread.replies}
                likes={thread.likes}
                created_at={thread.created_at}
              />
            ))}
        </Stack>
    </>
  );
}

export default Home;
