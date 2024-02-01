import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Users } from "./Users";
import { Threads } from "./Threads";

@Entity()
export class Replies {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    image: string

    @Column({ nullable: true})
    content: string

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated_at: Date

    @ManyToOne(() => Users, (users) => users.replies)
    users: Users

    @ManyToOne(() => Threads, (threads) => threads.replies)
    threads: Threads
}