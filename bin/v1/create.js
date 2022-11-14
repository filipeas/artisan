module.exports = { createStructure: createStructure };

const fs = require("fs");
const path = require("path");
const createDtos = require("./createDtos.js");
const createTypeOrmEntity = require("./createTypeOrmEntity.js");
const createTypeOrmRepositories = require("./createTypeOrmRepositories.js");
const createRequest = require("./createRequest.js");
const createResponse = require("./createResponse.js");
const createUseCases = require("./createUseCases.js");
const createRepositories = require("./createRepositories.js");

function createStructure(develop, createUser, entity) {
    console.log("criando estrutura");

    // definindo caminhos
    let rollPath;
    if (develop)
        rollPath = path.join("..");
    else
        rollPath = path.join("..", "..", "..", "..");

    // caminhos
    const destination = path.join(__dirname, rollPath, "src");
    const dirDomain = path.join(__dirname, rollPath, "src", "domain");
    const destinationInfra = path.join(__dirname, rollPath, "src", "infra");
    const destinationInfraTypeOrm = path.join(__dirname, rollPath, "src", "infra", "typeorm");
    const destinationInfraTypeOrmMigrations = path.join(__dirname, rollPath, "src", "infra", "typeorm", "migrations");
    const dirEntity = path.join(__dirname, rollPath, "src", "domain", entity);
    const dirDtos = path.join(__dirname, rollPath, "src", "domain", entity, "dtos");
    const dirInfra = path.join(__dirname, rollPath, "src", "domain", entity, "infra");
    const dirTypeOrm = path.join(__dirname, rollPath, "src", "domain", entity, "infra", "typeorm");
    const dirTypeOrmEntities = path.join(__dirname, rollPath, "src", "domain", entity, "infra", "typeorm", "entities");
    const dirTypeOrmRepositories = path.join(__dirname, rollPath, "src", "domain", entity, "infra", "typeorm", "repositories");
    const dirRepositories = path.join(__dirname, rollPath, "src", "domain", entity, "repositories");
    const dirRequest = path.join(__dirname, rollPath, "src", "domain", entity, "request");
    const dirResponse = path.join(__dirname, rollPath, "src", "domain", entity, "response");
    const dirUseCases = path.join(__dirname, rollPath, "src", "domain", entity, "useCases");
    const dirUseCasesCreate = path.join(__dirname, rollPath, "src", "domain", entity, "useCases", "create-" + entity.toLowerCase());
    const dirUseCasesUpdate = path.join(__dirname, rollPath, "src", "domain", entity, "useCases", "update-" + entity.toLowerCase());
    const dirUseCasesAuthUser = path.join(__dirname, rollPath, "src", "domain", entity, "useCases", "auth-" + entity.toLowerCase());
    const dirUseCasesDelete = path.join(__dirname, rollPath, "src", "domain", entity, "useCases", "delete-" + entity.toLowerCase());

    // verifica se diretorio da entidade ja foi criada
    if (fs.existsSync(dirEntity)) {
        console.log("Entidade já criada.");
        return;
    }

    // criando diretorios
    if (!fs.existsSync(destination)) fs.mkdirSync(destination);
    if (!fs.existsSync(dirDomain)) fs.mkdirSync(dirDomain);
    if (!fs.existsSync(destinationInfra)) fs.mkdirSync(destinationInfra);
    if (!fs.existsSync(destinationInfraTypeOrm)) fs.mkdirSync(destinationInfraTypeOrm);
    if (!fs.existsSync(destinationInfraTypeOrmMigrations)) fs.mkdirSync(destinationInfraTypeOrmMigrations);
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
    if (!fs.existsSync(dirUseCasesAuthUser)) fs.mkdirSync(dirUseCasesAuthUser);
    if (!fs.existsSync(dirUseCasesDelete)) fs.mkdirSync(dirUseCasesDelete);

    // criando arquivos para o diretorio dtos
    createDtos.createFile(dirDtos, entity);

    // criando arquivos para o diretorio infra/typeorm/entities
    createTypeOrmEntity.createFile(dirTypeOrmEntities, entity);

    // criando arquivos para o diretorio infra/typeorm/repositories
    createTypeOrmRepositories.createFile(dirTypeOrmRepositories, entity);

    // criando arquivos para o diretorio repositories
    createRepositories.createFile(dirRepositories, entity);

    // criando arquivos para o diretorio request
    createRequest.createFile(dirRequest, entity);

    // criando arquivos para o diretorio Response
    createResponse.createFile(dirResponse, entity);

    // criando arquivos para o diretorio useCases
    createUseCases.createFile(dirUseCasesCreate, dirUseCasesDelete, dirUseCasesUpdate, dirUseCasesAuthUser, destinationInfraTypeOrmMigrations, createUser, entity);
}
