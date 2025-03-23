import { IUser } from './IUser';
export interface IRegisterController {
    handleSubmit: (user: IUser) => void;
  }