import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvicer";
import { MysqlUsersRepository } from "../../repositories/implementations/MysqlUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapProvider = new MailtrapMailProvider();
const mysqlUsersRepository = new MysqlUsersRepository();

const createUserUseCase = new CreateUserUseCase(mysqlUsersRepository, mailTrapProvider);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController }