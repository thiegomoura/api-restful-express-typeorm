import { Repository } from 'typeorm';
import { MySQLDataSource as dataSource } from '../database/appDataSource';
import { User } from "../entities/User";

export const usersRepository = dataSource.getRepository(User).extend({
    async findByEmail(email: string) {
        const user = await this.findOne({
            where: { email }
        });

        return user || null;
    },

    async findById(id: string) {
        const user = await this.findOne({ where: { id } });

        return user || null;
    }
})

class UserRepository extends Repository<User> {
    public async findByEmail(email: string): Promise<User | null> {
        const user = await this.findOne({
            where: { email }
        });

        return user || null;
    }
}

export default UserRepository
