import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Users } from "./Users";
import { Replies } from "./replies";
import { Likes } from "./likes";

@Entity()
export class Threads {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @Column({nullable: true})
    image: string

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date

    @OneToMany(() => Replies, (replies) => replies.threads)
    replies: Replies[]

    @OneToMany(() => Likes, (likes) => likes.threads)
    likes: Likes[]

    @ManyToOne(() => Users, (users) => users.threads)
    users: Users

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated_at: Date
}