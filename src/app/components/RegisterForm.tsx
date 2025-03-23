"use client";
import React from "react";
import { TextField, Button, Grid, Typography, Box} from "@mui/material";
import { IRegisterFormProps } from "../contracts/IRegisterFormProps";


const RegisterForm: React.FC<IRegisterFormProps> = ({ onSubmit }) => {
  const [user, setUser] = React.useState({
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

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',  backgroundColor: "#f0f2f5",}}>

      <Grid 
      container spacing={2} 
      direction="column" 
      sx={{ width: "400px", 
            padding: "20px", 
            borderRadius: "12px", 
            border: "1px solid #ccc", 
            boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.2)", 
            backgroundColor: "#fff",
            textAlign: "center", }} 
            >
        <Typography variant="h4" align="center">Registro de Usuário</Typography>

        <TextField label="Nome" name="firstName" placeholder="Nome" onChange={handleChange} />
        <TextField label="Sobrenome" name="lastName" placeholder="Sobrenome" onChange={handleChange} />
        <TextField label="E-mail" name="email" placeholder="E-mail" type="email" onChange={handleChange} />
        <TextField label="Senha" name="password" placeholder="Senha" type="password" onChange={handleChange} />

        <Grid container spacing={1}>
          <Grid item xs={4}>
            <TextField label="Dia" name="birthDay" placeholder="Dia" onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Mês" name="birthMonth" placeholder="Mês" onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
          <TextField label="Ano" name="birthYear" placeholder="Ano" onChange={handleChange} />
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" onClick={() => onSubmit(user)}>
          Registrar
        </Button>
      </Grid>
    </Box>
    
    </>
    
  );
};

export default RegisterForm;
