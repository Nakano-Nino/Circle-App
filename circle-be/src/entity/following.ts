import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Following {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Users, (user) => user.followers)
    userId: Users;
  
    @ManyToOne(() => Users, (user) => user.followers, {
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'following_id' })
    followers: Users;
  
    @ManyToOne(() => Users, (user) => user.following, {
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'follower_id' })
    following: Users;
}