module.exports = { main: main }

const directory = require("../create/directories/directoryOnSrc.js");
const bad_requestErrors = require("../create/files/errors/bad-request.js");

function main(entity, rootDir) {
    errorDir = directory.main("errors", rootDir);

    bad_requestErrors.create(entity, errorDir);
}