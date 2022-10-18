module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name, dir) {
<<<<<<< HEAD
    name = name.charAt(0).toUpperCase() + name.slice(1);
=======
>>>>>>> bf348cb313fcaf4f5b247b15145db205507b133f
    const file = path.join(dir, name) + ".usecase.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".usecase.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
<<<<<<< HEAD
            `type IRequest = {
    attribute: string;
}

type IResponse = Either<NotFoundError | BadRequestError, I${name}Dto>;

@injectable()
export class ${name}UseCase {
    constructor(
        @inject('${name}Repository')
        private ${name.toLowerCase()}Repository: I${name}Repository
    ){}

    async run({attribute}: IRequest): Promise<IResponse> {
        const ${name.toLowerCase()} = ${name}.create({ attribute });
        await this.${name.toLowerCase()}Repository.create(${name.toLowerCase()});
        return right(${name}Mapper.toDto(${name.toLowerCase()}));
    }
}
`, function (err) {
=======
            `
            type IRequest = {
                attribute: string;
            }

            type IResponse = Either<NotFoundError | BadRequestError, I${name}Dto>;

            @injectable()
            export class ${name}UseCase {
                constructor(
                    @inject('${name}Repository')
                    private ${name.toLowerCase()}Repository: I${name}Repository
                ){}

                async run({attribute}: IRequest): Promise<IResponse> {
                    const ${name.toLowerCase()} = ${name}.create({
                        attribute
                    });

                    await this.${name.toLowerCase()}Repository.create(${name.toLowerCase()});

                    return right(${name}Mapper.toDto(${name.toLowerCase()}));
                }
            }
            `, function (err) {
>>>>>>> bf348cb313fcaf4f5b247b15145db205507b133f
            if (err) throw err;
            console.log(name + ".usecase.ts has created successfuly.");
        });
    }
}