module.exports = { createFile: createFile };

const fs = require("fs");
const path = require("path");

function createFile(dirRepositories, entity) {
    fs.appendFile(
        path.join(dirRepositories, "I" + entity) + "Repository.ts",
        `import { ${entity} } from '@domain/${entity}/infra/typeorm/entities/${entity}';
        import { ICreate${entity}Dto } from '../dtos/ICreate${entity}Dto';
        
        export interface I${entity}Repository {
            create(data: ICreate${entity}Dto): Promise<${entity}>;
            findById(id: string, relations?: string[]): Promise<${entity} | undefined>;
            save(${entity.toLowerCase()}: ${entity}): Promise<${entity}>;
            delete(${entity.toLowerCase()}: ${entity}): Promise<void>;
        }
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo interface repository criado com sucesso.");
    });
}