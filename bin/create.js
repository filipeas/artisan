module.exports = { createStructure: createStructure };

const fs = require("fs-extra");
const path = require("path");

function createStructure(entity) {
    console.log("criando estrutura");
    const directoryEntity = path.join(__dirname, "entity");
    const destination = path.join(__dirname, "..", "src", "domain", entity);

    console.log(directoryEntity, destination)

    fs.copy(directoryEntity, destination, function (err) {
        if (err) return console.error(err)
        console.log('Estrutura criada com sucesso!')
    });
}