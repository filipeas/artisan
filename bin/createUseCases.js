module.exports = { createFile: createFile };

const fs = require("fs");
const path = require("path");

function createFile(dirUseCasesCreate, dirUseCasesDelete, dirUseCasesUpdate, entity) {
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