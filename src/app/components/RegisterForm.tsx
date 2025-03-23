import React from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { IRegisterFormProps } from "../contracts/IRegisterFormProps";

const RegisterForm: React.FC<IRegisterFormProps> = ({ user, onChange, onSubmit }) => {
  return (
    <Grid container spacing={2} direction="column">
      <Typography variant="h4" align="center">Registro de Usuário</Typography>

      <TextField label="Nome" name="firstName" placeholder="Nome" value={user.firstName} onChange={onChange} />
      <TextField label="Sobrenome" name="lastName" placeholder="Sobrenome" value={user.lastName} onChange={onChange} />
      <TextField label="E-mail" name="email" placeholder="E-mail" type="email" value={user.email} onChange={onChange} />
      <TextField label="Senha" name="password" placeholder="Senha" type="password" value={user.password} onChange={onChange} />

      <Grid container spacing={1}>
        <Grid item xs={4}>
          <TextField label="Dia" name="birthDay" placeholder="Dia" value={user.birthDay} onChange={onChange} />
        </Grid>
        <Grid item xs={4}>
          <TextField label="Mês" name="birthMonth" placeholder="Mês" value={user.birthMonth} onChange={onChange} />
        </Grid>
        <Grid item xs={4}>
          <TextField label="Ano" name="birthYear" placeholder="Ano" value={user.birthYear} onChange={onChange} />
        </Grid>
      </Grid>

      <Button variant="contained" color="primary" onClick={onSubmit}>
        Registrar
      </Button>
    </Grid>
  );
};

export default RegisterForm;
