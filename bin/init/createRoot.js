module.exports = { createFile: createFile };

const fs = require("fs");
const path = require("path");

function createFile(destinationRaiz) {
    // criando .env.example
    fs.appendFile(
        path.join(destinationRaiz, ".env.example"),
        `
        # App configuration
        APP_PORT=
        APP_URL=
        
        # Database configuration
        DB_TYPE=
        DB_HOST=
        DB_PORT=
        DB_USER=
        DB_PASSWORD=
        DB_DATABASE=
        
        # ORM configuration
        DB_MIGRATIONS_PATH=./src/infra/typeorm/migrations/*.ts
        DB_ENTITIES=./src/domain/**/entities/*.ts
        DB_MIGRATIONS_DIR=./src/infra/typeorm/migrations
        
        #key authentication
        KEY_AUTH=
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo .env.example criado com sucesso.");
    });

    // criando .editorconfig
    fs.appendFile(
        path.join(destinationRaiz, ".editorconfig"),
        `
        # EditorConfig is awesome: https://EditorConfig.org

        # top-most EditorConfig file
        root = true

        [*]
        indent_style = space
        indent_size = 4
        end_of_line = lf
        charset = utf-8
        trim_trailing_whitespace = true
        insert_final_newline = true
        end_of_line = lf
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo .editorconfig criado com sucesso.");
    });

    // criando .eslintignore
    fs.appendFile(
        path.join(destinationRaiz, ".eslintignore"),
        `
        /*.js
        node_modules
        dist
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo .eslintignore criado com sucesso.");
    });

    // criando .eslintrc.json
    fs.appendFile(
        path.join(destinationRaiz, ".eslintrc.json"),
        `
        {
            "env": {
                "es2021": true,
                "node": true
            },
            "extends": [
                "airbnb-base",
                "plugin:@typescript-eslint/recommended",
                "plugin:prettier/recommended"
            ],
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "ecmaVersion": "latest",
                "sourceType": "module"
            },
            "plugins": [
                "@typescript-eslint",
                "prettier"
            ],
            "rules": {
                "class-methods-use-this": "off",
                "no-useless-constructor": "off",
                "import/prefer-default-export": "off",
                "no-use-before-define": "off",
                "@typescript-eslint/no-use-before-define": [
                    "error"
                ],
                "import/extensions": [
                    "error",
                    "ignorePackages",
                    {
                        "ts": "never"
                    }
                ],
                "prettier/prettier": "error"
            },
            "settings": {
                "import/resolver": {
                    "typescript": {}
                }
            }
        }        
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo .eslintrc.json criado com sucesso.");
    });

    // criando ormconfig.js
    fs.appendFile(
        path.join(destinationRaiz, "ormconfig.js"),
        `
        require('dotenv/config');

        module.exports = {
          name: 'default',
          type: process.env.DB_TYPE,
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
          migrations: [process.env.DB_MIGRATIONS_PATH],
          entities: [process.env.DB_ENTITIES],
          cli: {
            migrationsDir: process.env.DB_MIGRATIONS_DIR
          }
        }        
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo ormconfig.js criado com sucesso.");
    });

    // criando prettier.config.js
    fs.appendFile(
        path.join(destinationRaiz, "prettier.config.js"),
        `
        module.exports = {
            singleQuote: true,
            trailingComma: 'all',
            arrowParens: 'avoid',
        }               
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo prettier.config.js criado com sucesso.");
    });

    // criando tsconfig.json
    fs.appendFile(
        path.join(destinationRaiz, "tsconfig.json"),
        `
        {
            "compilerOptions": {
                "target": "es2021",
                "experimentalDecorators": true,
                "emitDecoratorMetadata": true,
                "module": "commonjs",
                "esModuleInterop": true,
                "forceConsistentCasingInFileNames": true,
                "strict": true,
                "skipLibCheck": true,
                "baseUrl": ".",
                "paths": {
                    "@domain/*": [
                        "./src/domain/*"
                    ],
                    "@infra/*": [
                        "./src/infra/*"
                    ]
                }
            }
        }                      
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo tsconfig.json criado com sucesso.");
    });
}