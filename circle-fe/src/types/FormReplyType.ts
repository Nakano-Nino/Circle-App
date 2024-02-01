import { ThreadType } from "./ThreadType";
import { UserType } from "./UserType";

// export type ReplyType= {
//     id?: number;
//     image?: string;
//     content?: string;
//     thread?: ThreadType;
//     user?: UserType
// };

export type FormReplyType = {
    id?: number
    users?: UserType
    content?: string
    image?: string
}

export type ReplyType = {
    id?: number
    user?: UserType
    content?: string
}

export type ReplyPostType = {
    thread_id?: number
    content?: string
}
