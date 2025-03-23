import { IUser } from './IUser';
export interface IRegisterFormProps {
    user: IUser;    
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
  }