
import { Request, Response, Router } from "express";
import { MySQLDataSource as dataSource } from "../database/appDataSource";
import { User } from "../entities/User";
import CreateUserService from "../services/CreateUserService";
import DeleteUserService from "../services/DeleteUserService";

const userRouter = Router();
const usersRepository = dataSource.getRepository(User);

userRouter.get("/", async (_, res: Response) => {

    const users = await usersRepository.find({
        select: {
            name: true, email: true, id: true, createdAt: true, updatedAt: true
        }
    });

    return res.json(users)
});

userRouter.get("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const { password, ...user } = await usersRepository.findOneByOrFail({ id });

        return res.json({ ...user })
    } catch (error: any) {
        return res.status(400).json({ error: error.message })
    }
});

userRouter.post("/", async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name,
            email,
            password
        })

        return res.json(user)
    } catch (error: any) {
        return res.status(400).json({ error: error.message })
    }
});

userRouter.put("/:id/change-password", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { password, newPassword } = req.body

        const user = await usersRepository.findOneOrFail({ where: { id } })

        const passwordMatch = user.password === password
        if (!passwordMatch) throw new Error('Invalid password')

        user.password = newPassword

        await usersRepository.save(user)

        return res.sendStatus(201);
    } catch (error: any) {
        return res.status(400).json({ error: error.message })
    }
})

userRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const deleteUserService = new DeleteUserService();

        await deleteUserService.execute({ id })

        return res.sendStatus(200);
    } catch (error: any) {
        return res.status(400).json({ error: error.message })
    }
})

export default userRouter;
