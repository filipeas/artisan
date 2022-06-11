module.exports = { main: main }

const fs = require("fs");
const path = require("path");

function main(directories, pathDir) {
    // creating src directory
    const srcDir = path.join(__dirname, pathDir, "src");
    if (fs.existsSync(srcDir)) {
        console.log("src/ has been created.");
    } else {
        console.log('creating src/ directory.');
        fs.mkdirSync(srcDir);
    }

    // creating another directories
    for (const directory of directories) {
        const anotherDir = path.join(__dirname, pathDir, "src", directory);
        if (fs.existsSync(anotherDir)) {
            console.log(directory + "/ has been created.");
        } else {
            console.log('creating ' + directory + '/ directory.');
            fs.mkdirSync(anotherDir);
        }
    }
}