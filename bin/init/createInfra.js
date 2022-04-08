module.exports = { createFile: createFile };

const fs = require("fs");
const path = require("path");

function createFile(
    destinationInfraHttp,
    destinationInfraHttpContainer,
    destinationInfraHttpErrors,
    destinationInfraHttpMiddlewares,
    destinationInfraHttpRoutes,
    destinationInfraHttpValidation,
    destinationInfraTypeOrm
) {
    // cria arquivo http/container/index.ts
    fs.appendFile(
        path.join(destinationInfraHttpContainer, "index.ts"),
        `
        import { container } from 'tsyringe';
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo http/container/index.ts criado com sucesso.");
    });

    // cria arquivo http/errors/AppError
    fs.appendFile(
        path.join(destinationInfraHttpErrors, "AppError.ts"),
        `
        export class AppError {
            public readonly message!: string;

            public readonly status_code!: number;

            public readonly type_error!: string;

            constructor(message: string, status_code: number, type_error: string) {
              this.message = message;
              this.status_code = status_code;
              this.type_error = type_error;
            }
          }
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo http/errors/AppError.ts criado com sucesso.");
    });

    // cria arquivo http/errors/BadRequestError
    fs.appendFile(
        path.join(destinationInfraHttpErrors, "BadRequestError.ts"),
        `
        import { AppError } from './AppError';

        export class BadRequestError extends AppError {
        constructor(message: string) {
            super(message, 400, 'bab_request_error');
        }
        }
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo http/errors/BadRequestError.ts criado com sucesso.");
    });

    // cria arquivo http/errors/ForbiddenError
    fs.appendFile(
        path.join(destinationInfraHttpErrors, "ForbiddenError.ts"),
        `
        import { AppError } from './AppError';

        export class ForbiddenError extends AppError {
        constructor(message: string) {
            super(message, 403, 'forbidden_error');
        }
        }
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo http/errors/ForbiddenError.ts criado com sucesso.");
    });

    // cria arquivo http/errors/NotFoundError
    fs.appendFile(
        path.join(destinationInfraHttpErrors, "NotFoundError.ts"),
        `
        import { AppError } from './AppError';

        export class NotFoundError extends AppError {
        constructor(message: string) {
            super(message, 404, 'not_found_error');
        }
        }
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo http/errors/NotFoundError.ts criado com sucesso.");
    });

    // cria arquivo http/errors/UnauthorizedError
    fs.appendFile(
        path.join(destinationInfraHttpErrors, "UnauthorizedError.ts"),
        `
        import { AppError } from './AppError';

        type TypeError = 'auth_error' | 'expired_error';

        export class UnauthozitedError extends AppError {
        constructor(message: string, type_error: TypeError = 'auth_error') {
            super(message, 401, type_error);
        }
        }
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo http/errors/UnauthorizedError.ts criado com sucesso.");
    });

    // cria arquivo http/middlewares/ensureAuthenticated
    fs.appendFile(
        path.join(destinationInfraHttpMiddlewares, "ensureAuthenticated.ts"),
        `
        import { TypeOrmUserRepository } from '@domain/users/infra/typeorm/repositories/TypeOrmUserRepository';
        import { BadRequestError } from '@infra/http/errors/BadRequestError';
        import { UnauthozitedError } from '@infra/http/errors/UnauthorizedError';
        import { NextFunction, Request, Response } from 'express';
        import { TokenExpiredError, verify } from 'jsonwebtoken';

        interface IPayload {
            sub: string;
        }

        export async function ensureAuthenticated(
            request: Request,
            response: Response,
            next: NextFunction,
        ) {
            const authHeader = request.headers.authorization;

            if (!authHeader) {
                throw new UnauthozitedError('Falha na autenticação');
            }

            const [, token] = authHeader.split(' ');

            try {
                const { sub: id } = verify(token, String(process.env.KEY_AUTH)) as IPayload;

                const usersRepository = new TypeOrmUserRepository();
                const user = await usersRepository.findById(id);

                if (!user) {
                    throw new BadRequestError('Usuário não encontrado');
                }

                request.user = {
                    id: user.id,
                };

                next();
            } catch (error) {
                if (error instanceof TokenExpiredError) {
                    throw new UnauthozitedError('Token expirado', 'expired_error');
                }

                throw new UnauthozitedError('Token inválido');
            }
        }
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo http/middlewares/ensureAuthenticated.ts criado com sucesso.");
    });

    // cria arquivo http/middlewares/handleException
    fs.appendFile(
        path.join(destinationInfraHttpMiddlewares, "handleException.ts"),
        `
        import { NextFunction, Request, Response } from 'express';

        import { AppError } from '@infra/http/errors/AppError';
        import { MulterError } from 'multer';

        export async function handleException(
        error: AppError | Error,
        request: Request,
        response: Response,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _next: NextFunction,
        ): Promise<Response> {
        if (error instanceof AppError) {
            return response
            .status(error.status_code)
            .json({ error: error.message, type_error: error.type_error });
        }
        if (error instanceof MulterError) {
            return response.status(400).json({
            error: 'Selecione um arquivo válido.',
            type_error: 'bad_request_error',
            });
        }

        return response.status(500).json({
            error: \`Internal server error - $\{error.message}\`,
            type_error: 'server_error',
        });
        }
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo http/middlewares/handleException.ts criado com sucesso.");
    });

    // cria arquivo http/middlewares/validation
    fs.appendFile(
        path.join(destinationInfraHttpMiddlewares, "validation.ts"),
        `
        import { AnySchema } from 'yup';
        import { NextFunction, Request, Response } from 'express';

        const validate =
            (schema: AnySchema) =>
                async (request: Request, response: Response, next: NextFunction) => {
                    try {
                        await schema.validate(request.body);
                        return next();
                    } catch (error) {
                        return response.status(400).send(error);
                    }
                };

        export default validate;
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo http/middlewares/validation.ts criado com sucesso.");
    });

    // cria arquivo http/routes/index.ts
    fs.appendFile(
        path.join(destinationInfraHttpRoutes, "index.ts"),
        `
        import { response, Router } from 'express';
        import { authenticateRouter } from './authenticate.routes';
        import { usersRouter } from './user.routes';

        const routes = Router();

        routes.get('/', (request, response) => {
            return response
                .json({
                    author: 'Filipe A.s',
                    message:
                        'Welcome to Artisan package!',
                })
                .send();
        });

        routes.use('/auth', authenticateRouter);
        routes.use('/users', usersRouter);

        export { routes };
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo http/routes/index.ts criado com sucesso.");
    });

    // cria arquivo http/routes/authenticate.routes.ts
    fs.appendFile(
        path.join(destinationInfraHttpRoutes, "authenticate.routes.ts"),
        `
        import { Router } from 'express';

        import { AuthUserController } from '@domain/users/useCases/auth-user/AuthUserController';

        const authenticateRouter = Router();

        const authUserController = new AuthUserController();

        authenticateRouter.post('/', authUserController.handle);

        export { authenticateRouter };
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo http/routes/authenticate.routes.ts criado com sucesso.");
    });

    // cria arquivo http/routes/user.routes.ts
    fs.appendFile(
        path.join(destinationInfraHttpRoutes, "user.routes.ts"),
        `
        import { Router } from 'express';

        const usersRouter = Router();

        export { usersRouter };
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo http/routes/user.routes.ts criado com sucesso.");
    });

    // cria arquivo http/validations/CreateUserSchema.ts
    fs.appendFile(
        path.join(destinationInfraHttpValidation, "CreateUserSchema.ts"),
        `
        import { object, string } from 'yup';

        export const CreateUserSchema = object({
        name: string().min(1).required(),
        email: string().min(1).required(),
        password: string().min(1).required(),
        });
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo http/validations/CreateUserSchema.ts criado com sucesso.");
    });

    // cria arquivo http/validations/UpdateUserSchema.ts
    fs.appendFile(
        path.join(destinationInfraHttpValidation, "UpdateUserSchema.ts"),
        `
        import { object, string } from 'yup';

        export const UpdateUserSchema = object({
        name: string().min(1).required(),
        });
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo http/validations/UpdateUserSchema.ts criado com sucesso.");
    });

    // cria arquivo http/validations/UpdatePasswordUserSchema.ts
    fs.appendFile(
        path.join(destinationInfraHttpValidation, "UpdatePasswordUserSchema.ts"),
        `
        import { object, string } from 'yup';

        export const UpdatePasswordUserSchema = object({
            c_password: string().min(1).required(),
            new_password: string().min(1).required(),
        });
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo http/validations/UpdatePasswordUserSchema.ts criado com sucesso.");
    });

    // cria arquivo http/server.ts
    fs.appendFile(
        path.join(destinationInfraHttp, "server.ts"),
        `
        import 'dotenv/config';
        import 'reflect-metadata';
        import 'express-async-errors';

        import express from 'express';

        import { handleException } from './middlewares/handleException';

        import './container';

        import createConnection from '../typeorm';

        import { routes } from './routes';

        createConnection();
        const app = express();

        app.use(express.json());

        app.use(routes);

        app.use(handleException);

        app.listen(process.env.APP_PORT, () => {
            console.log(\`Server on ${process.env.APP_URL}\`);
        });
    `, function (err) {
        if (err) throw err;
        console.log("Arquivo http/server.ts criado com sucesso.");
    });

    // cria arquivo http/typeorm/index.ts
    fs.appendFile(
        path.join(destinationInfraTypeOrm, "index.ts"),
        `
        import 'dotenv/config';
        import { Connection, createConnection, getConnectionOptions } from 'typeorm';

        export default async (host = process.env.DB_HOST): Promise<Connection> => {
            const defaultOptions = await getConnectionOptions();
            return createConnection(
                Object.assign(defaultOptions, {
                    host,
                }),
            );
        };
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo http/typeorm/index.ts criado com sucesso.");
    });
}
