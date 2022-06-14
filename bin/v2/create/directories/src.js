module.exports = { main: main }

const fs = require("fs");
const path = require("path");

function main() {
    // creating src directory on root
    const srcDir = path.join(__dirname, "..", "..", "..", "..", "..", "src");
    if (fs.existsSync(srcDir)) {
        console.log("src/ has been created.");
    } else {
        console.log('creating src/ directory.');
        fs.mkdirSync(srcDir);
    }
}