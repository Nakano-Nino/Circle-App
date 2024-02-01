import { UserType } from "./UserType";
import { ReplyType } from "./ReplyType";
import { LikeType } from "./LikeType";

export type ThreadType = {
    id: number;
    content: string;
    image: string;
    users: UserType;
    replies: ReplyType[];
    likes: LikeType[];
    created_at: string;
};

export type ThreadPost = {
	content: string;
    image: Blob | MediaSource | string;
}