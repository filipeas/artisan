module.exports = { main: main }

const directory = require("../create/directories/directoryOnSrc.js");
const controllerFile = require("../create/files/infra/controller.js");
const routeFile = require("../create/files/infra/route.js");

function main(entity, structure) {

    // creating initial files
    if (structure === 'controllers') {
        dir = directory.main("infra/http/" + structure + "/" + entity);
        controllerFile.create(entity, dir);
    }else if (structure === 'routes') {
        dir = directory.main("infra/http/" + structure);
        routeFile.create(entity, dir);
    } else {
        console.log('command not found.');
    }
}