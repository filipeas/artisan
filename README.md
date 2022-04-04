## Projeto Artisan
* Sistema de construção de estrutura em um projeto.

## Dependências
1. [nodejs](https://nodejs.org/en/)

## Instalação
1. yarn ou npm install

## Comandos
* Comando base:
``` npx artisan ```
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
- ``` -----------------/repositories/ ```
- ``` -----------------/request/ ```
- ``` -----------------/response/ ```
- ``` -----------------/useCases/ ```