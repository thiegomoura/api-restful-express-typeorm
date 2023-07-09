// import { IController } from "../interfaces/IController";
// import { IRequest } from "../interfaces/IRequest";
// // import { CreateUser } from "../../../app/use-cases/create-user";
// // import { UserViewModel } from "../view-models/user-view-model";

// export class UserController implements IController {
//   constructor(private createUser: CreateUser) {}

//   async handler(request: IRequest): Promise<IResponse> {
//     const { firstName, lastName, birthday, email, password } = request.body;

//     const { user } = await this.createUser.execute({
//       firstName,
//       lastName,
//       birthday,
//       email,
//       password,
//     });

//     return {
//       statusCode: 201,
//       data: {
//         user: UserViewModel.toHTTP(user),
//       },
//     };
//   }
// }
