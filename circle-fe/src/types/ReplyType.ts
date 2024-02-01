import { ThreadType } from "./ThreadType";
import { UserType } from "./UserType";

export type ReplyType= {
    id: number;
    image: string;
    content: string;
    thread: ThreadType;
    users: UserType
};

export type PostReply={
    content: string;
    image: Blob | MediaSource | string;
}

export type Replies = {
    content: string;
    image: string;
    users: UserType;
    threads: ThreadType;
}
