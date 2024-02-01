import { ThreadType } from "./ThreadType";
import { UserType } from "./UserType";

export type LikeType = {
    id: number;
    threads: ThreadType;
    users: UserType;
};