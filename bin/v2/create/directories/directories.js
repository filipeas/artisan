module.exports = { main: main }

const fs = require("fs");
const path = require("path");

function main(directories, dir) {
    // creating another directories on root and inside src directory
    for (const directory of directories) {
        const anotherDir = path.join(__dirname, dir, "..", "src", directory);
        if (fs.existsSync(anotherDir)) {
            console.log(directory + "/ has been created.");
        } else {
            console.log('creating ' + directory + '/ directory.');
            fs.mkdirSync(anotherDir);
        }
    }
}