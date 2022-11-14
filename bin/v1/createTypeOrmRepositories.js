module.exports = { createFile: createFile };

const fs = require("fs");
const path = require("path");

function createFile(dirTypeOrmRepositories, entity) {
    fs.appendFile(
        path.join(dirTypeOrmRepositories, "TypeOrm" + entity) + "Repository.ts",
        `import { getRepository, Repository } from 'typeorm';

        import { I${entity}Repository } from '@domain/${entity}/repositories/I${entity}Repository';
        
        import { ICreate${entity}Dto } from '@domain/${entity}/dtos/ICreate${entity}Dto';
        import { ${entity} } from '@domain/${entity}/infra/typeorm/entities/${entity}';
        
        export class TypeOrm${entity}Repository implements I${entity}Repository {
            private repository: Repository<${entity}>;
        
            constructor() {
                this.repository = getRepository(${entity});
            }
        
            async create(data: ICreate${entity}Dto): Promise<${entity}> {
                const ${entity.toLowerCase()} = this.repository.create(data);
                await this.repository.save(${entity.toLowerCase()});
                return ${entity.toLowerCase()};
            }
        
            async findById(id: string, relations = []): Promise<${entity} | undefined> {
                return this.repository.findOne(id, { relations });
            }
        
            async save(${entity.toLowerCase()}: ${entity}): Promise<${entity}> {
                return this.repository.save(${entity.toLowerCase()});
            }
        
            async delete(${entity.toLowerCase()}: ${entity}): Promise<void> {
                const find${entity} = await this.repository.findOne(${entity.toLowerCase()}.id, {
                    relations: [],
                });
        
                if (!find${entity}) {
                    throw new Error('Error');
                }
        
                await this.repository.remove(${entity.toLowerCase()});
            }
        }        
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo typeorm do repository criado com sucesso.");
    });
}