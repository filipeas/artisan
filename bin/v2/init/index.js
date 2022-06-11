module.exports = { main: main }

const src = require("../create/directories/src.js");
const v2 = require("../create/directories/directories.js");
const directory = require("../create/directories/directoryOnSrc.js");
const dto = require("../create/files/domain/dto.js");
const entity = require("../create/files/domain/entity.js");
const mapper = require("../create/files/domain/mapper.js");

function main(directories, pathDir) {
    // creating src directory
    src.main();

    // creating another directories
    v2.main(directories);

    // creating initial files in application
    application();

    // creating initial files in core
    core();

    // creating initial files in domain
    domain();

    // creating initial files in errors

    // creating initial files in infra
    infra();

    // creating initial files in tests
    tests();
}

/**
 * Functions for creating directories and initial files.
 */
function application(){
    directory.main("application/providers");
    directory.main("application/repositories");
    directory.main("application/usecases");
    directory.main("application/views");
}

function core(){
    directory.main("core/config");
    directory.main("core/domain");
    directory.main("core/dtos");
    directory.main("core/logic");
}

function domain(){
    dir = directory.main("domain/user");

    // creating files
    dto.create("user", dir);
    entity.create("user", dir);
    mapper.create("user", dir);
}

function infra(){
    directory.main("infra/adapters");
    directory.main("infra/config");
    directory.main("infra/container");
    directory.main("infra/http");
    directory.main("infra/utils");
}

function tests(){
    directory.main("tests/adapters");
    directory.main("tests/repositories");
}