module.exports = { createFile: createFile };

const fs = require("fs");
const path = require("path");

function createFile(dirTypeOrmEntities, entity) {
    fs.appendFile(
        path.join(dirTypeOrmEntities, entity) + ".ts",
        `
        import {
            Column,
            CreateDateColumn,
            Entity,
            PrimaryGeneratedColumn,
            UpdateDateColumn,
        } from 'typeorm';
        
        @Entity('${entity.toLowerCase()}')
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