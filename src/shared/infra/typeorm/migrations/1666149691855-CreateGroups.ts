import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateGroups1666149691855 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "groups",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "name",
                            type: "varchar",
                            isUnique: true
                        },
                        {
                            name: "whatsapp_url",
                            type: "varchar"
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("groups");
    }
}
