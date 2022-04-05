module.exports = { createFile: createFile };

const fs = require("fs");
const path = require("path");

function createFile(dirTypeOrmEntities, entity) {
    fs.appendFile(
        path.join(dirTypeOrmEntities, entity) + ".ts",
        `import { ${entity} } from '@domain/${entity}/infra/typeorm/entities/${entity}';
        import {
            Column,
            CreateDateColumn,
            Entity,
            PrimaryGeneratedColumn,
            UpdateDateColumn,
        } from 'typeorm';
        
        @Entity('${entity}')
        export class ${entity} {
            @PrimaryGeneratedColumn('increment')
            id!: string;
        
            @CreateDateColumn()
            created_at!: Date;
        
            @UpdateDateColumn()
            updated_at!: Date;
        }
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo Entity criado com sucesso.");
    });
}