import { MySQLDataSource as dataSource } from '../database/appDataSource';
import { User } from "../entities/User";
import { usersRepository } from '../repositories/UserRepository';

interface CreateUserRequest {
    name: string;
    email: string;
    password: string;
}

interface CreateUserResponse {
    user: Omit<User, 'password'>
}

class CreateUserService {
    public async execute({ name, email, password }: CreateUserRequest): Promise<CreateUserResponse> {

        const userRepository = dataSource.getRepository(User)

        const findUserWithSameEmail = await usersRepository.findByEmail(email);

        if (findUserWithSameEmail) throw Error('This email already in use by another user')

        const user = userRepository.create({ name, email, password });

        const { password: pw, ...response } = await userRepository.save(user)

        return { user: { ...response } };
    }

}

export default CreateUserService;