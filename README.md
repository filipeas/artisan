## Projeto Artisan
* Sistema de construção de estrutura em um projeto.

* [artisan - npm](https://www.npmjs.com/package/@filipeas/artisan)

## Dependências
1. [nodejs](https://nodejs.org/en/)

## Instalação
1. Instale o pacote no seu projeto com o comando ``` npm i @filipeas/artisan ```.
2. Digite o camando ``` yarn ``` para instalar as dependências.

## Desintalação
1. Digite o comando ``` npm rm @filipeas/artisan ``` para remover o link global do pacote nas dependências do npm.

## Comandos
* Comando base:
``` npx artisan ```.
1. create --entity <nome_da_entidade>
2. --help
3. --version

## Estrutura
* Após executar a criação de alguma entidade no seu projeto, esse pacote irá criar a seguinte estrutura na raíz:
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