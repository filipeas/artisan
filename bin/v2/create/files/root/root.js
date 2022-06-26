module.exports = { main: main }

const fs = require("fs");
const path = require("path");

function main(dir) {
    commitLint(dir);

    jestConfig(dir);

    jestSetup(dir);

    packageJson(dir);

    prettierConfig(dir);

    tsconfig(dir);

    readme(dir);

    env(dir);
}

function commitLint(dir) {
    const src = path.join(__dirname, "files", "commitlint.config.js");
    const dest = path.join(__dirname, "..", dir, "commitlint.config.js");
    fs.copyFile(src, dest, (err) => {
        console.log("coping commitlint.config.js for root files: ", err)
    });
}

function jestConfig(dir) {
    const src = path.join(__dirname, "files", "jest.config.ts");
    const dest = path.join(__dirname, "..", dir, "jest.config.ts");
    fs.copyFile(src, dest, (err) => {
        console.log("coping jest.config.ts for root files: ", err)
    });
}

function jestSetup(dir) {
    const src = path.join(__dirname, "files", "jest.setup.ts");
    const dest = path.join(__dirname, "..", dir, "jest.setup.ts");
    fs.copyFile(src, dest, (err) => {
        console.log("coping jest.setup.ts for root files: ", err)
    });
}

function prettierConfig(dir) {
    const src = path.join(__dirname, "files", "prettier.config.js");
    const dest = path.join(__dirname, "..", dir, "prettier.config.js");
    fs.copyFile(src, dest, (err) => {
        console.log("coping prettier.config.js for root files: ", err)
    });
}

function tsconfig(dir) {
    const src = path.join(__dirname, "files", "tsconfig.json");
    const dest = path.join(__dirname, "..", dir, "tsconfig.json");
    fs.copyFile(src, dest, (err) => {
        console.log("coping tsconfig for root files: ", err)
    });
}

function packageJson(dir) {
    const src = path.join(__dirname, "files", "package-artisan.json");
    const dest = path.join(__dirname, "..", dir, "package-artisan.json");
    fs.copyFile(src, dest, (err) => {
        console.log("coping package.json for root files: ", err)
    });
}

function readme(dir) {
    const src = path.join(__dirname, "files", "readme.config.artisan.txt");
    const dest = path.join(__dirname, "..", dir, "readme.config.artisan.txt");
    fs.copyFile(src, dest, (err) => {
        console.log("coping readme for root files: ", err)
    });
}

function env(dir) {
    const src = path.join(__dirname, "files", ".env.example");
    const dest = path.join(__dirname, "..", dir, ".env.example");
    fs.copyFile(src, dest, (err) => {
        console.log("coping .env.example for root files: ", err)
    });
}