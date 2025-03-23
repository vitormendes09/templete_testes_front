import { IUser } from './IUser';
export interface IRegisterController {
    user: IUser;
    handleSubmit: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }