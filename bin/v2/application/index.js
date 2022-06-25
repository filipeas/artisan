module.exports = { main: main }

const directory = require("../create/directories/directoryOnSrc.js");
const usecaseFile = require("../create/files/application/usecase.js");
const providerFile = require("../create/files/application/provider.js");
const repositoryFile = require("../create/files/application/repository.js");

function main(entity, structure, rootDir, dirUsecase = '') {

    // creating initial files
    if (structure === 'usecases') {
        if (dirUsecase) {
            dir = directory.main("application/" + structure + "/" + dirUsecase, rootDir);
            usecaseFile.create(entity, dir);
        } else {
            dir = directory.main("application/" + structure + "/" + entity, rootDir);
            usecaseFile.create(entity, dir);
        }
    } else if (structure === 'providers') {
        dir = directory.main("application/" + structure, rootDir);
        providerFile.create(entity, dir);
    } else if (structure === 'repositories') {
        dir = directory.main("application/" + structure + "/" + entity, rootDir);
        repositoryFile.create(entity, dir);
    } else {
        console.log('command not found.');
    }
}