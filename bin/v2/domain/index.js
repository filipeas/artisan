module.exports = { main: main }

const directory = require("../create/directories/directoryOnSrc.js");
const dtoFile = require("../create/files/domain/dto.js");
const entityFile = require("../create/files/domain/entity.js");
const mapperFile = require("../create/files/domain/mapper.js");

function main(entity, rootDir) {
    // creating directories for domain
    dir = directory.main("domain/" + entity, rootDir);
    dtoDir = directory.main("domain/" + entity + "/dtos", rootDir);
    entityDir = directory.main("domain/" + entity + "/entities", rootDir);
    mapperDir = directory.main("domain/" + entity + "/mappers", rootDir);

    // creating initial files
    dtoFile.create(entity, dtoDir);
    entityFile.create(entity, entityDir);
    mapperFile.create(entity, mapperDir);
}