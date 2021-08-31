import React, { useState } from 'react';
import { Lock, User } from 'react-feather';
import {
  ActionsContainer,
  InputContainer,
  FormContainer,
  FormTitle,
} from '../../assets/styles/components/loginform';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useGlobalContext } from '../../providers/GlobalProvider/GlobalProvider';
import loginApi from '../../utils/services/login.api';

const LoginForm = () => {
  const [username, setUsername] = useState('wizeline');
  const [password, setPassword] = useState('Rocks!');

  const { toggleModalCall, setUserCall } = useGlobalContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await loginApi(username, password);
      setUserCall(user);
      toggleModalCall();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Login</FormTitle>
      <InputContainer>
        <Input
          handleSearch={setUsername}
          search={username}
          type="text"
          placeholder="Username"
        >
          <User width={16} />
        </Input>
      </InputContainer>
      <InputContainer>
        <Input
          handleSearch={setPassword}
          search={password}
          type="password"
          placeholder="Password"
        >
          <Lock width={16} />
        </Input>
      </InputContainer>
      <ActionsContainer>
        <Button color="cancel" onClick={toggleModalCall}>
          CANCEL
        </Button>
        <Button color="success" type="submit" mLeft>
          LOGIN
        </Button>
      </ActionsContainer>
    </FormContainer>
  );
};

export default LoginForm;
