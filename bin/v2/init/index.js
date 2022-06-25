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
const controller = require("../create/files/infra/controller.js");
const ensure_authenticated = require("../create/files/infra/ensure-authenticated.middleware.js");
const exception = require("../create/files/infra/exception.middleware.js");
const server = require("../create/files/infra/server.js");
const indexRoute = require("../create/files/infra/indexRoute.js");
const route = require("../create/files/infra/route.js");
const initialFiles = require("../create/files/root/root.js");

function main(directories, pathDir) {
    // creating src directory
    src.main(pathDir);

    // add initial files in your root project directory
    initialFiles.main(pathDir);

    // creating another directories
    v2.main(directories, pathDir);

    // creating initial files in application
    application(pathDir);

    // creating initial files in core
    core(pathDir);

    // creating initial files in domain
    domain(pathDir);

    // creating initial files in errors
    errors(pathDir);

    // creating initial files in infra
    infra(pathDir);

    // creating initial files in tests
    tests(pathDir);
}

/**
 * Functions for creating directories and initial files.
 */
function application(dir){
    // creating directories for application
    const dirProvider = directory.main("application/providers", dir);
    directory.main("application/repositories", dir);
    directory.main("application/usecases", dir);
    directory.main("application/views", dir);

    // creating files for application
    date.create("date", dirProvider);
    jwt.create("jwt", dirProvider);
    mail.create("mail", dirProvider);
}

function core(dir){
    // creating directories for core
    const dirConfig = directory.main("core/config", dir);
    const dirDomain = directory.main("core/domain", dir);
    const dirDtos = directory.main("core/dtos", dir);
    const dirLogic = directory.main("core/logic", dir);

    // creating files for core
    validate_account.create("validate-account", dirConfig);
    entityCore.create("entity", dirDomain);
    parse_types.create("parse-types", dirDtos);
    status.create("status", dirDtos);
    either.create("either", dirLogic);
    maybe.create("maybe", dirLogic);
}

function domain(dir){
    // creating directories for domain
    dirUser = directory.main("domain/user", dir);
    dtoDir = directory.main("domain/user/dtos", dir);
    entityDir = directory.main("domain/user/entities", dir);
    mapperDir = directory.main("domain/user/mappers", dir);

    // creating initial files
    dto.create("user", dtoDir);
    entity.create("user", entityDir);
    mapper.create("user", mapperDir);
}

function errors(dir){
    // creating directories for domain
    const errorDir = directory.main("errors", dir);

    // creating initial files
    appErrors.create("app", errorDir);
    bad_requestErrors.create("bad-request", errorDir);
    not_foundErrors.create("not-found", errorDir);
    unauthorizedErrors.create("unauthorized", errorDir);
}

function infra(dir){
    // creating directories for infra
    const adaptersDir = directory.main("infra/adapters", dir);
    const configDir = directory.main("infra/config", dir);
    const containerDir = directory.main("infra/container", dir);
    directory.main("infra/database", dir);
    const httpDir = directory.main("infra/http", dir);
    directory.main("infra/http/controllers", dir);
    const userControllerDir = directory.main("infra/http/controllers/User", dir);
    const middlewareDir = directory.main("infra/http/middlewares", dir);
    const routeDir = directory.main("infra/http/routes", dir);
    directory.main("infra/utils", dir);

    // creating initial files
    datefns.create("datefns-date", adaptersDir);
    jsonwebtoken.create("jsonwebtoken-jwt", adaptersDir);
    jwtInfra.create("jwt", configDir);
    index.create("index", containerDir);
    providers.create("providers", containerDir);
    repositories.create("repositories", containerDir);
    server.create("server", httpDir);
    controller.create("User", userControllerDir);
    ensure_authenticated.create("ensure-authenticated", middlewareDir);
    exception.create("exception", middlewareDir);
    indexRoute.create("index", routeDir);
    route.create("User", routeDir);
}

function tests(dir){
    // creating directories for tests
    directory.main("tests/adapters", dir);
    directory.main("tests/repositories", dir);
}