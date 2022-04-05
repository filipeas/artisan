module.exports = { createStructure: createStructure };

const fs = require("fs-extra");

function createStructure(entity) {
    console.log("criando estrutura");
    const directoryEntity = __dirname + "\\entity";
    const destination = __dirname + "\\..\\src\\domain\\" + entity;

    console.log(directoryEntity, destination)

    fs.copy(directoryEntity, destination, function (err) {
        if (err) return console.error(err)
        console.log('Estrutura criada com sucesso!')
    });
}