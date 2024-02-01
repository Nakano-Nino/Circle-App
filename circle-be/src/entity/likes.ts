import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Users } from "./Users";
import { Threads } from "./Threads";

@Entity()
export class Likes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated_at: Date;

    @ManyToOne(() => Users, (users) => users.likes)
    users: Users;

    @ManyToOne(() => Threads, (threads) => threads.likes)
    threads: Threads;
}