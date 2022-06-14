module.exports = { main: main }

const path = require("path");
const src = require("../create/directories/src.js");
const v2 = require("../create/directories/directories.js");
const directory = require("../create/directories/directoryOnSrc.js");
const dto = require("../create/files/domain/dto.js");
const entity = require("../create/files/domain/entity.js");
const mapper = require("../create/files/domain/mapper.js");
const date = require("../create/files/application/date.js");
const jwt = require("../create/files/application/jwt.js");
const mail = require("../create/files/application/mail.js");
const either = require("../create/files/core/either.js");
const entityCore = require("../create/files/core/entity.js");
const maybe = require("../create/files/core/maybe.js");
const parse_types = require("../create/files/core/parse-types.js");
const status = require("../create/files/core/status.js");
const validate_account = require("../create/files/core/validate-account.js");
const appErrors = require("../create/files/errors/app.js");
const bad_requestErrors = require("../create/files/errors/bad-request.js");
const not_foundErrors = require("../create/files/errors/not-found.js");
const unauthorizedErrors = require("../create/files/errors/unauthorized.js");
const datefns = require("../create/files/infra/datefns-date.adapter.js");
const index = require("../create/files/infra/index.js");
const jsonwebtoken = require("../create/files/infra/jsonwebtoken-jwt.adapter.js");
const jwtInfra = require("../create/files/infra/jwt.config.js");
const providers = require("../create/files/infra/providers.js");
const repositories = require("../create/files/infra/repositories.js");

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
    errors(path.join(__dirname, pathDir, "src", "errors"));

    // creating initial files in infra
    infra();

    // creating initial files in tests
    tests();
}

/**
 * Functions for creating directories and initial files.
 */
function application(){
    // creating directories for application
    const dirProvider = directory.main("application/providers");
    directory.main("application/repositories");
    directory.main("application/usecases");
    directory.main("application/views");

    // creating files for application
    date.create("date", dirProvider);
    jwt.create("jwt", dirProvider);
    mail.create("mail", dirProvider);
}

function core(){
    // creating directories for core
    const dirConfig = directory.main("core/config");
    const dirDomain = directory.main("core/domain");
    const dirDtos = directory.main("core/dtos");
    const dirLogic = directory.main("core/logic");

    // creating files for core
    validate_account.create("validate-account", dirConfig);
    entityCore.create("entity", dirDomain);
    parse_types.create("parse-types", dirDtos);
    status.create("status", dirDtos);
    either.create("either", dirLogic);
    maybe.create("maybe", dirLogic);
}

function domain(){
    // creating directories for domain
    dir = directory.main("domain/user");

    // creating initial files
    dto.create("user", dir);
    entity.create("user", dir);
    mapper.create("user", dir);
}

function errors(errorDir){
    // creating initial files
    appErrors.create("app", errorDir);
    bad_requestErrors.create("bad-request", errorDir);
    not_foundErrors.create("not-found", errorDir);
    unauthorizedErrors.create("unauthorized", errorDir);
}

function infra(){
    // creating directories for infra
    const adaptersDir = directory.main("infra/adapters");
    const configDir = directory.main("infra/config");
    const containerDir = directory.main("infra/container");
    directory.main("infra/database");
    directory.main("infra/http");
    directory.main("infra/http/controllers");
    directory.main("infra/http/middlewares");
    directory.main("infra/http/routes");
    directory.main("infra/utils");

    // creating initial files
    datefns.create("datefns-date", adaptersDir);
    jsonwebtoken.create("jsonwebtoken-jwt", adaptersDir);
    jwt.create("jwt", configDir);
    index.create("index", containerDir);
    providers.create("providers", containerDir);
    repositories.create("repositories", containerDir);
}

function tests(){
    // creating directories for tests
    directory.main("tests/adapters");
    directory.main("tests/repositories");
}