import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1706610419500 implements MigrationInterface {
    name = 'MyMigration1706610419500'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "following" DROP CONSTRAINT "FK_3222246b2ad81e4873958f7aaff"`);
        await queryRunner.query(`ALTER TABLE "following" DROP CONSTRAINT "FK_06fd3fcfb4fcfb5cd38605ece78"`);
        await queryRunner.query(`CREATE TABLE "followers" ("follower_id" integer NOT NULL, "following_id" integer NOT NULL, CONSTRAINT "PK_8fc3b802b0b818a7f4c2b4c30ca" PRIMARY KEY ("follower_id", "following_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e11d02e2a1197cfb61759da5a8" ON "followers" ("follower_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_95627c64d9f57814010a003032" ON "followers" ("following_id") `);
        await queryRunner.query(`ALTER TABLE "following" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "following" DROP COLUMN "updared_at"`);
        await queryRunner.query(`ALTER TABLE "following" DROP COLUMN "followingIdId"`);
        await queryRunner.query(`ALTER TABLE "following" DROP COLUMN "followedIdId"`);
        await queryRunner.query(`ALTER TABLE "following" ADD "userIdId" integer`);
        await queryRunner.query(`ALTER TABLE "following" ADD "following_id" integer`);
        await queryRunner.query(`ALTER TABLE "following" ADD "follower_id" integer`);
        await queryRunner.query(`ALTER TABLE "following" ADD CONSTRAINT "FK_ced43d6f7a7b4f2f46df02e1134" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "following" ADD CONSTRAINT "FK_45428a713ee7d51def21b67ff20" FOREIGN KEY ("following_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "following" ADD CONSTRAINT "FK_59f580ba79fe33c121f8c3cc095" FOREIGN KEY ("follower_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "followers" ADD CONSTRAINT "FK_e11d02e2a1197cfb61759da5a87" FOREIGN KEY ("follower_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "followers" ADD CONSTRAINT "FK_95627c64d9f57814010a003032e" FOREIGN KEY ("following_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "followers" DROP CONSTRAINT "FK_95627c64d9f57814010a003032e"`);
        await queryRunner.query(`ALTER TABLE "followers" DROP CONSTRAINT "FK_e11d02e2a1197cfb61759da5a87"`);
        await queryRunner.query(`ALTER TABLE "following" DROP CONSTRAINT "FK_59f580ba79fe33c121f8c3cc095"`);
        await queryRunner.query(`ALTER TABLE "following" DROP CONSTRAINT "FK_45428a713ee7d51def21b67ff20"`);
        await queryRunner.query(`ALTER TABLE "following" DROP CONSTRAINT "FK_ced43d6f7a7b4f2f46df02e1134"`);
        await queryRunner.query(`ALTER TABLE "following" DROP COLUMN "follower_id"`);
        await queryRunner.query(`ALTER TABLE "following" DROP COLUMN "following_id"`);
        await queryRunner.query(`ALTER TABLE "following" DROP COLUMN "userIdId"`);
        await queryRunner.query(`ALTER TABLE "following" ADD "followedIdId" integer`);
        await queryRunner.query(`ALTER TABLE "following" ADD "followingIdId" integer`);
        await queryRunner.query(`ALTER TABLE "following" ADD "updared_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "following" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`DROP INDEX "public"."IDX_95627c64d9f57814010a003032"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e11d02e2a1197cfb61759da5a8"`);
        await queryRunner.query(`DROP TABLE "followers"`);
        await queryRunner.query(`ALTER TABLE "following" ADD CONSTRAINT "FK_06fd3fcfb4fcfb5cd38605ece78" FOREIGN KEY ("followedIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "following" ADD CONSTRAINT "FK_3222246b2ad81e4873958f7aaff" FOREIGN KEY ("followingIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
