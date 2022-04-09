module.exports = { copy: copy };

const fs = require("fs");
const path = require("path");

function copy(destinationRaiz) {
    const packageFileName = path.join(destinationRaiz, "package.json");

    fs.readFile(packageFileName, 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }

        // parse JSON object
        const package = JSON.parse(data.toString());

        // adicionar scripts
        const scripts = {
            "dev:server": "tsnd -r tsconfig-paths/register --inspect --ignore-watch node_modules --transpile-only --respawn src/infra/http/server.ts",
            "typeorm": "tsnd -r tsconfig-paths/register ./node_modules/typeorm/cli",
            "seed:platform": "tsnd src/infra/typeorm/seeds/video-platforms.ts",
        }
        Object.assign(package, { "scripts": scripts });
        fs.writeFile(packageFileName, JSON.stringify(package), (err) => {
            if (err) {
                throw err;
            }
            console.log("scripts salvo com sucesso no arquivo package.json.");
        });

        // verifica se chave dependencies existe
        if (package.dependencies) {
            // se chave dependencies já existe, só atualiza pacotes do artisan no arquivo package.json
            const dependencies = {
                "@types/uuid": "^8.3.4",
                "bcrypt": "^5.0.1",
                "dotenv": "^16.0.0",
                "express": "^4.17.3",
                "express-async-errors": "^3.1.1",
                "jest": "^27.5.1",
                "jsonwebtoken": "^8.5.1",
                "multer": "^1.4.4",
                "mysql2": "^2.3.3",
                "reflect-metadata": "^0.1.13",
                "tsyringe": "^4.6.0",
                "typeorm": "^0.2.44",
                "uuid": "^8.3.2",
                "yup": "^0.32.11"
            }

            // const dataDependencies = JSON.stringify(dependencies);
            Object.assign(package.dependencies, dependencies)
            fs.writeFile(packageFileName, JSON.stringify(package), (err) => {
                if (err) {
                    throw err;
                }
                console.log("dependencies salvas com sucesso no arquivo package.json.");
            });
        } else {
            // criar chave dependencies e inserir no package.json
            const dependencies = {
                "@types/uuid": "^8.3.4",
                "bcrypt": "^5.0.1",
                "dotenv": "^16.0.0",
                "express": "^4.17.3",
                "express-async-errors": "^3.1.1",
                "jest": "^27.5.1",
                "jsonwebtoken": "^8.5.1",
                "multer": "^1.4.4",
                "mysql2": "^2.3.3",
                "reflect-metadata": "^0.1.13",
                "tsyringe": "^4.6.0",
                "typeorm": "^0.2.44",
                "uuid": "^8.3.2",
                "yup": "^0.32.11"
            }

            // const dataDependencies = JSON.stringify(devDependencies);
            Object.assign(package, dependencies);
            fs.writeFile(packageFileName, JSON.stringify(package), (err) => {
                if (err) {
                    throw err;
                }
                console.log("dependencies salvas com sucesso no arquivo package.json.");
            });
        }

        // verifica se chave devDependencies existe
        if (package.devDependencies) {
            // se chave devDependencies já existe, só atualiza pacotes do artisan no arquivo package.json
            const devDependencies = {
                "@types/bcrypt": "^5.0.0",
                "@types/express": "^4.17.13",
                "@types/jest": "^27.4.1",
                "@types/jsonwebtoken": "^8.5.8",
                "@types/multer": "^1.4.7",
                "@typescript-eslint/eslint-plugin": "^5.15.0",
                "@typescript-eslint/parser": "^5.15.0",
                "eslint": "^8.11.0",
                "eslint-config-airbnb-base": "^15.0.0",
                "eslint-config-prettier": "^8.5.0",
                "eslint-import-resolver-typescript": "^2.5.0",
                "eslint-plugin-import": "^2.25.2",
                "eslint-plugin-prettier": "^4.0.0",
                "prettier": "^2.6.0",
                "ts-node-dev": "^1.1.8",
                "ts-node-paths": "^1.0.1",
                "typescript": "^4.6.3"
            }

            // const dataDependencies = JSON.stringify(dependencies);
            Object.assign(package.devDependencies, devDependencies)
            fs.writeFile(packageFileName, JSON.stringify(package), (err) => {
                if (err) {
                    throw err;
                }
                console.log("devDependencies salvas com sucesso no arquivo package.json.");
            });
        } else {
            // criar chave devDependencies e inserir no package.json
            const devDependencies = {
                "@types/bcrypt": "^5.0.0",
                "@types/express": "^4.17.13",
                "@types/jest": "^27.4.1",
                "@types/jsonwebtoken": "^8.5.8",
                "@types/multer": "^1.4.7",
                "@typescript-eslint/eslint-plugin": "^5.15.0",
                "@typescript-eslint/parser": "^5.15.0",
                "eslint": "^8.11.0",
                "eslint-config-airbnb-base": "^15.0.0",
                "eslint-config-prettier": "^8.5.0",
                "eslint-import-resolver-typescript": "^2.5.0",
                "eslint-plugin-import": "^2.25.2",
                "eslint-plugin-prettier": "^4.0.0",
                "prettier": "^2.6.0",
                "ts-node-dev": "^1.1.8",
                "ts-node-paths": "^1.0.1",
                "typescript": "^4.6.3"
            }

            // const dataDependencies = JSON.stringify(devDependencies);
            Object.assign(package, {
                "devDependencies": devDependencies
            });
            fs.writeFile(packageFileName, JSON.stringify(package), (err) => {
                if (err) {
                    throw err;
                }
                console.log("devDependencies salvas com sucesso no arquivo package.json.");
            });
        }
    });
}