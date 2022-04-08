## Artisan
* Structuring system for an ExpressJs project.
* Version [Production] release 0.2.0
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