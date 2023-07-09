import { IRequest } from "./IRequest";
import { IResponse } from "./IResponse";

export interface IController {
  handler(req: IRequest): Promise<IResponse>;
}
