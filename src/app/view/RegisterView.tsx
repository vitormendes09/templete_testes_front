import React from 'react';
import RegisterForm  from '../components/RegisterForm';
import { useRegisterController } from '../controllers/RegisterController';


const RegisterView: React.FC = () => {
    const { user, handleChange, handleSubmit } = useRegisterController();
  
    return <RegisterForm user={user} onChange={handleChange} onSubmit={handleSubmit} />;
  };
  
  export default RegisterView;