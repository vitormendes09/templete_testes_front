"use client";
import React from 'react';
import RegisterForm  from '../components/RegisterForm';
import { RegisterController } from '../controllers/RegisterController';


const RegisterView: React.FC = () => {
    return <RegisterForm onSubmit={RegisterController.handleSubmit} />;
  };
  
  export default RegisterView;