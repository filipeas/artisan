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

    // criando arquivos
    fs.appendFile(
        path.join(dirDtos, "ICreate" + entity) + "Dto.ts",
        `export interface ICreate${entity}Dto {
            slug: string;
            title: string;
            description: string;
            status: boolean;
            privacy: boolean;
        }`, function (err) {
        if (err) throw err;
        console.log("Arquivo Dto criado com sucesso.");
    });
}