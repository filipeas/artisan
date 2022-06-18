module.exports = { main: main }

const directory = require("../create/directories/directoryOnSrc.js");
const dtoFile = require("../create/files/domain/dto.js");
const entityFile = require("../create/files/domain/entity.js");
const mapperFile = require("../create/files/domain/mapper.js");

function main(entity) {
    // creating directories for domain
    dir = directory.main("domain/" + entity);
    dtoDir = directory.main("domain/" + entity + "/dtos");
    entityDir = directory.main("domain/" + entity + "/entities");
    mapperDir = directory.main("domain/" + entity + "/mappers");

    // creating initial files
    dtoFile.create(entity, dtoDir);
    entityFile.create(entity, entityDir);
    mapperFile.create(entity, mapperDir);
}