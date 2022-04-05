module.exports = { createStructure: createStructure };

const fs = require("fs");
const path = require("path");

function createStructure(entity) {
    console.log("criando estrutura");

    // caminhos
    const directoryEntity = path.join(__dirname, "entity");
    const destination = path.join(__dirname, "..", "src");
    const dirDomain = path.join(__dirname, "..", "src", "domain");
    const dirEntity = path.join(__dirname, "..", "src", "domain", entity);
    const dirDtos = path.join(__dirname, "..", "src", "domain", entity, "dtos");
    const dirInfra = path.join(__dirname, "..", "src", "domain", entity, "infra");
    const dirTypeOrm = path.join(__dirname, "..", "src", "domain", entity, "infra", "typeorm");
    const dirTypeOrmEntities = path.join(__dirname, "..", "src", "domain", entity, "infra", "typeorm", "entities");
    const dirTypeOrmRepositories = path.join(__dirname, "..", "src", "domain", entity, "infra", "typeorm", "repositories");
    const dirRepositories = path.join(__dirname, "..", "src", "domain", entity, "repositories");
    const dirRequest = path.join(__dirname, "..", "src", "domain", entity, "request");
    const dirResponse = path.join(__dirname, "..", "src", "domain", entity, "response");
    const dirUseCases = path.join(__dirname, "..", "src", "domain", entity, "useCases");
    const dirUseCasesCreate = path.join(__dirname, "..", "src", "domain", entity, "useCases", "create-" + entity);
    const dirUseCasesUpdate = path.join(__dirname, "..", "src", "domain", entity, "useCases", "update-" + entity);
    const dirUseCasesDelete = path.join(__dirname, "..", "src", "domain", entity, "useCases", "delete-" + entity);

    // criando diretorios
    if (!fs.existsSync(destination)) fs.mkdirSync(destination);
    if (!fs.existsSync(dirDomain)) fs.mkdirSync(dirDomain);
    if (!fs.existsSync(dirEntity)) fs.mkdirSync(dirEntity);
    if (!fs.existsSync(dirDtos)) fs.mkdirSync(dirDtos);
    if (!fs.existsSync(dirInfra)) fs.mkdirSync(dirInfra);
    if (!fs.existsSync(dirTypeOrm)) fs.mkdirSync(dirTypeOrm);
    if (!fs.existsSync(dirTypeOrmEntities)) fs.mkdirSync(dirTypeOrmEntities);
    if (!fs.existsSync(dirTypeOrmRepositories)) fs.mkdirSync(dirTypeOrmRepositories);
    if (!fs.existsSync(dirRepositories)) fs.mkdirSync(dirRepositories);
    if (!fs.existsSync(dirRequest)) fs.mkdirSync(dirRequest);
    if (!fs.existsSync(dirResponse)) fs.mkdirSync(dirResponse);
    if (!fs.existsSync(dirUseCases)) fs.mkdirSync(dirUseCases);
    if (!fs.existsSync(dirUseCasesCreate)) fs.mkdirSync(dirUseCasesCreate);
    if (!fs.existsSync(dirUseCasesUpdate)) fs.mkdirSync(dirUseCasesUpdate);
    if (!fs.existsSync(dirUseCasesDelete)) fs.mkdirSync(dirUseCasesDelete);

    // criando arquivos para o diretorio dtos
    fs.appendFile(
        path.join(dirDtos, "ICreate" + entity) + "Dto.ts",
        `export interface ICreate${entity}Dto {
        }`, function (err) {
        if (err) throw err;
        console.log("Arquivo Dto criado com sucesso.");
    });

    // criando arquivos para o diretorio infra/typeorm/entities
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

    // criando arquivos para o diretorio infra/typeorm/repositories
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

    // criando arquivos para o diretorio repositories
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

    // criando arquivos para o diretorio request create
    fs.appendFile(
        path.join(dirRequest, "IRequestCreate" + entity) + ".ts",
        `export interface IRequestCreate${entity} {
        }        
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo interface request criado com sucesso.");
    });

    // criando arquivos para o diretorio request update
    fs.appendFile(
        path.join(dirRequest, "IRequestUpdate" + entity) + ".ts",
        `export interface IRequestUpdate${entity} {
            id: string;
        }        
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo interface request criado com sucesso.");
    });

    // criando arquivos para o diretorio request delete
    fs.appendFile(
        path.join(dirRequest, "IRequestDelete" + entity) + ".ts",
        `export interface IRequestDelete${entity} {
            id: string;
        }        
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo interface request criado com sucesso.");
    });

    // criando arquivos para o diretorio Response
    fs.appendFile(
        path.join(dirResponse, "IResponseCreate" + entity) + ".ts",
        `export interface IResponseCreate${entity} {
        }        
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo interface response criado com sucesso.");
    });

    // criando arquivos para o diretorio Response
    fs.appendFile(
        path.join(dirResponse, "IResponseUpdate" + entity) + ".ts",
        `export interface IResponseUpdate${entity} {
        }        
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo interface response criado com sucesso.");
    });

    /**
     * UseCase para create entity
     */
    fs.appendFile(
        path.join(dirUseCasesCreate, "Create" + entity) + "Controller.ts",
        `import { Request, Response } from 'express';
        import { container } from 'tsyringe';
        import { Create${entity}UseCase } from './Create${entity}UseCase';
        
        export class Create${entity}Controller {
            async handle(request: Request, response: Response): Promise<Response> {
                // const {  } = request.body;
        
                const create${entity} = container.resolve(Create${entity}UseCase);
        
                const ${entity.toLowerCase()} = await create${entity}.run({});
        
                return response.status(201).json({ ${entity.toLowerCase()} });
            }
        }   
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo useCases create controller criado com sucesso.");
    });

    fs.appendFile(
        path.join(dirUseCasesCreate, "Create" + entity) + "UseCase.spec.ts",
        `describe('Teste de cadastro de ${entity}', () => {
            it('cadastrar ${entity}', async () => {});
            it('cadastrar ${entity} sem parametros', async () => {});
        });
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo useCases create test criado com sucesso.");
    });

    fs.appendFile(
        path.join(dirUseCasesCreate, "Create" + entity) + "UseCase.ts",
        `import { inject, injectable } from 'tsyringe';

        import { I${entity}Repository } from '@domain/${entity}/repositories/I${entity}Repository';
        
        import { IRequestCreate${entity} } from '@domain/${entity}/request/IRequestCreate${entity}';
        import { IResponseCreate${entity} } from '@domain/${entity}/response/IResponseCreate${entity}';
        
        @injectable()
        export class Create${entity}UseCase {
            constructor(
                @inject('${entity}Repository')
                private ${entity}Repository: I${entity}Repository,
            ) { }
        
            async run({}: IRequestCreate${entity}): Promise<IResponseCreate${entity}> {
                //
            }
        }
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo useCases create UseCase criado com sucesso.");
    });

    /**
     * UseCase para delete entity
     */
    fs.appendFile(
        path.join(dirUseCasesDelete, "Delete" + entity) + "Controller.ts",
        `import { Request, Response } from 'express';
        import { container } from 'tsyringe';
        import { Delete${entity}UseCase } from './Delete${entity}UseCase';
        
        export class Delete${entity}Controller {
            async handle(request: Request, response: Response): Promise<Response> {
                // const { id } = request.params;
        
                const Delete${entity} = container.resolve(Delete${entity}UseCase);
        
                const ${entity.toLowerCase()} = await Delete${entity}.run({id});
        
                return response.status(201).json({ ${entity.toLowerCase()} });
            }
        }   
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo useCases Delete controller criado com sucesso.");
    });

    fs.appendFile(
        path.join(dirUseCasesDelete, "Delete" + entity) + "UseCase.spec.ts",
        `describe('Teste de cadastro de ${entity}', () => {
            it('deletar ${entity}', async () => {});
            it('deletar ${entity} sem parametros', async () => {});
        });
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo useCases Delete test criado com sucesso.");
    });

    fs.appendFile(
        path.join(dirUseCasesDelete, "Delete" + entity) + "UseCase.ts",
        `import { inject, injectable } from 'tsyringe';

        import { I${entity}Repository } from '@domain/${entity}/repositories/I${entity}Repository';
        
        import { IRequestDelete${entity} } from '@domain/${entity}/request/IRequestDelete${entity}';
        
        @injectable()
        export class Delete${entity}UseCase {
            constructor(
                @inject('${entity}Repository')
                private ${entity}Repository: I${entity}Repository,
            ) { }
        
            async run({id}: IRequestDelete${entity}): Promise<void> {
                //
            }
        }
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo useCases Delete UseCase criado com sucesso.");
    });

    /**
     * UseCase para update entity
     */
    fs.appendFile(
        path.join(dirUseCasesUpdate, "Update" + entity) + "Controller.ts",
        `import { Request, Response } from 'express';
        import { container } from 'tsyringe';
        import { Update${entity}UseCase } from './Update${entity}UseCase';
        
        export class Update${entity}Controller {
            async handle(request: Request, response: Response): Promise<Response> {
                // const {  } = request.body;
                // const { id } = request.params;
        
                const update${entity} = container.resolve(Update${entity}UseCase);
        
                const ${entity.toLowerCase()} = await update${entity}.run({id});
        
                return response.status(201).json({ ${entity.toLowerCase()} });
            }
        }   
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo useCases update controller criado com sucesso.");
    });

    fs.appendFile(
        path.join(dirUseCasesUpdate, "Update" + entity) + "UseCase.spec.ts",
        `describe('Teste de editar de ${entity}', () => {
            it('editar ${entity}', async () => {});
            it('editar ${entity} sem parametros', async () => {});
        });
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo useCases create test criado com sucesso.");
    });

    fs.appendFile(
        path.join(dirUseCasesUpdate, "Update" + entity) + "UseCase.ts",
        `import { inject, injectable } from 'tsyringe';

        import { I${entity}Repository } from '@domain/${entity}/repositories/I${entity}Repository';
        
        import { IRequestUpdate${entity} } from '@domain/${entity}/request/IRequestUpdate${entity}';
        import { IResponseUpdate${entity} } from '@domain/${entity}/response/IResponseUpdate${entity}';
        
        @injectable()
        export class Update${entity}UseCase {
            constructor(
                @inject('${entity}Repository')
                private ${entity}Repository: I${entity}Repository,
            ) { }
        
            async run({id}: IRequestUpdate${entity}): Promise<IResponseUpdate${entity}> {
                //
            }
        }
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo useCases create UseCase criado com sucesso.");
    });
}