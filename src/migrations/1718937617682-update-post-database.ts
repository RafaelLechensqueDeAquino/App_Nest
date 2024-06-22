import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePostDatabase1718937617682 implements MigrationInterface {
    name = 'UpdatePostDatabase1718937617682'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "name" TO "namew"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "namew" TO "name"`);
    }

}
