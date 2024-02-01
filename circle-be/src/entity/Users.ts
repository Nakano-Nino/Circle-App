import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm"
import  { Threads } from "./Threads"
import { Replies } from "./replies"
import { Following } from "./following"
import { Likes } from "./likes"

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    username: string

    @Column()
    full_name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column({nullable: true})
    photo_profile: string

    @Column({nullable: true})
    bio: string

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date

    @OneToMany(() => Threads, (threads) => threads.users)
    threads: Threads[]

    @OneToMany(() => Replies, (replies) => replies.users)
    replies: Replies[]

    @ManyToMany(() => Users, (user) => user.following)
    @JoinTable({
      name: "followers",
      joinColumn: {
        name: "follower_id",
        referencedColumnName: "id",
      },
      inverseJoinColumn: {
        name: "following_id",
        referencedColumnName: "id",
      },
    })
    followers: Users[];
  
    @ManyToMany(() => Users, (user) => user.followers)
    following: Users[];

    @OneToMany(() => Likes, (likes) => likes.users)
    likes: Likes[]
}
