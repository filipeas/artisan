module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name, dir) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const file = path.join(dir, name) + ".usecase.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".usecase.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
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
            if (err) throw err;
            console.log(name + ".usecase.ts has created successfuly.");
        });
    }
}