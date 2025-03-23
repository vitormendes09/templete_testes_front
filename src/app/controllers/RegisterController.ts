import { IRegisterController } from "../contracts/IRegistercontroller";
import { IUser } from "../contracts/IUser";

export const RegisterController: IRegisterController = {
    handleSubmit: (user: IUser) => {
      if (!user.email.includes("@")) {
        alert("E-mail inválido");
        return;
      }
      alert("Registro realizado com sucesso!");
    },
  };
