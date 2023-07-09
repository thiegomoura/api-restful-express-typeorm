import { MySQLDataSource as dataSource } from '../database/appDataSource';
import { User } from "../entities/User";
import { usersRepository } from '../repositories/UserRepository';

interface Request {
    id: string;
}

class DeleteUserService {
    public async execute({ id }: Request): Promise<void> {

        const userRepository = dataSource.getRepository(User)

        const checkIfUserExists = await usersRepository.findById(id);

        console.log('checkIfUserExists: ', checkIfUserExists);

        if (!checkIfUserExists) throw Error('User not found')

        await userRepository.delete(id);
    }

}

export default DeleteUserService;