import { IUser } from './IUser';
export interface IRegisterFormProps {
    onSubmit: (user: IUser) => void;
  }