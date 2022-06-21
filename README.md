<h1 align="center">Artisan</h1>
<h3 align="center">Package for structuring projects with NodeJs and ExpressJs</h3>
<p align="center">
        <a href="https://github.com/filipeas/artisan/releases/tag/0.3.2" alt="Version">
        <img src="https://img.shields.io/badge/version-0.3.2-green" /></a>
</p>

## Dependencies

1. fs-extra
2. yargs

## Contributors

1. [Filipe A.S](https://github.com/filipeas)

## Instalation Guide

Below you can see the instalation methods.

### Install with npm (package in production)

For install in your project, use this command: ``` npm i @filipeas/artisan ```.

To remove it, just delete the import line in package.json and run the command ``` npm install ``` in your project.

PS: You need package.json file in your project.

### Install with npm link

Use the command: ``` sudo npm link ``` inside this repository for create a link of the package in your machine.

If you want remove this link, execute: ``` sudo npm rm --global artisan ``` for remove the link of the package in your machine. Check if the package is still installed with command: ``` npm ls --global artisan ```. If it is not removed, go to the package folder where the link is and manually delete the linked folder.

## Commands

Use this commands:

Comand for start initial structure of pattern of artisan package:

- (yarn or npx) artisan --init

Commands for create some entity:

- (yarn or npx) artisan --create entity usecases
- (yarn or npx) artisan --create entity providers
- (yarn or npx) artisan --create entity repositories
- (yarn or npx) artisan --create entity domain
- (yarn or npx) artisan --create entity errors
- (yarn or npx) artisan --create entity controllers
- (yarn or npx) artisan --create entity routes

<!-- 
## Artisan
* Structuring system for an ExpressJs project.
* Version [Production] release 0.2.11
* [artisan - npm package](https://www.npmjs.com/package/@filipeas/artisan)

## Dependencies
1. [nodejs](https://nodejs.org/en/)

## Installations
1. Install the package in your project with the command ``` npm i @filipeas/artisan ```.
2. Digit the command ``` yarn ``` for install dependencies.

## Uninstall
1. Digit the command ``` npm rm @filipeas/artisan ``` for remove package in yours dependencies.

## Commands
* All commands of artisan:
``` npx artisan ```.
1. --create entity <nome_da_entidade> [create a entity in src/domain/]
2. --init [initialize a project]
3. --help [get help for commands]
4. --version [get version of artisan]

## Structure
* The command ``` artisan --create entity <entity> ``` creates an entity in the ``` src/domain/ ``` directory at the root of your project:
- ``` src/ ```
- ``` ---/domain/ ```
- ``` ----------/entity/ ```
- ``` -----------------/dtos/ ```
- ``` -----------------/infra/ ```
- ``` -----------------------/typeorm/ ```
- ``` -------------------------------/entities/ ```
- ``` -------------------------------/repositories/ ```
- ``` -----------------/repositories/ ```
- ``` -----------------/request/ ```
- ``` -----------------/response/ ```
- ``` -----------------/useCases/ ```

* The command ``` artisan --init ``` command performs the initial structuring of the project with the artisan pattern:
- ``` src/ ```
- ``` ---/domain/ ```
- ``` ----------/entity/ ```
- ``` -----------------/dtos/ ```
- ``` -----------------/infra/ ```
- ``` -----------------------/typeorm/ ```
- ``` -------------------------------/entities/ ```
- ``` -------------------------------/repositories/ ```
- ``` -----------------/repositories/ ```
- ``` -----------------/request/ ```
- ``` -----------------/response/ ```
- ``` -----------------/useCases/ ```
- ``` ---/@types/ ```
- ``` ----------/express/ ```
- ``` ---/infra/ ```
- ``` ---------/http/ ```
- ``` --------------/container/ ```
- ``` --------------/errors/ ```
- ``` --------------/middlewares/ ```
- ``` --------------/routes/ ```
- ``` --------------/validations/ ```
- ``` ---------/typeorm/ ```
- ``` -----------------/migrations/ ```

* The ``` --init ```` command creates the structure in the ``` infra/ ``` directory.

* The ``` --init ``` command also creates the ``` User ``` entity in the ``` domain/ ``` directory.

* In addition, the command ``` --init ``` creates in the file ``` package.json ``` the project execution scripts and the command to create typeorm migrations. It also adds the following list of production and development dependencies:
```
"scripts": { 
        "dev:server": "tsnd -r tsconfig-paths/register --inspect --ignore-watch node_modules --transpile-only --respawn src/infra/http/server.ts", 
        "typeorm": "tsnd -r tsconfig-paths/register ./node_modules/typeorm/cli", 
        "seed:platform": "tsnd src/infra/typeorm/seeds/video-platforms.ts" 
    }, 
    "devDependencies": { 
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
    }, 
    "dependencies": { 
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
``` -->