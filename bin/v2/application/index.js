module.exports = { main: main }

const directory = require("../create/directories/directoryOnSrc.js");
const usecaseFile = require("../create/files/application/usecase.js");
const providerFile = require("../create/files/application/provider.js");
const repositoryFile = require("../create/files/application/repository.js");

function main(entity, structure) {

    // creating initial files
    if (structure === 'usecases') {
        dir = directory.main("application/" + structure + "/" + entity);
        usecaseFile.create(entity, dir);
    } else if (structure === 'providers') {
        dir = directory.main("application/" + structure);
        providerFile.create(entity, dir);
    } else if (structure === 'repositories') {
        dir = directory.main("application/" + structure + "/" + entity);
        repositoryFile.create(entity, dir);
    } else {
        console.log('command not found.');
    }
}