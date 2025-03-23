import {useState } from 'react';
import { IRegisterController } from '../contracts/IRegistercontroller';
import { IUser } from '../contracts/IUser';

export const useRegisterController = (): IRegisterController => {
    const [user, setUser] = useState<IUser>({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthDay: "",
      birthMonth: "",
      birthYear: "",
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = () => {
      if (!user.email.includes("@")) {
        alert("E-mail inválido");
        return;
      }
      alert("Registro realizado com sucesso!");
    };
  
    return { user, handleChange, handleSubmit };
  };