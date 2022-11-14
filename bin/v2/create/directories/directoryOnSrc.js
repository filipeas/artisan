module.exports = { main: main }

const fs = require("fs");
const path = require("path");

function main(directory, dir) {
    // creating application directory on root and inside src directory
    const anotherDir = path.join(__dirname, dir, "src", directory);
    // console.log("reading directory: " + anotherDir)
    if (fs.existsSync(anotherDir)) {
        console.log(directory + "/ has been created.");
    } else {
        console.log('creating ' + directory + '/ directory.');
        fs.mkdirSync(anotherDir);
    }

    return anotherDir;
}