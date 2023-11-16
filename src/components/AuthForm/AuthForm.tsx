import { useState } from 'react';

import { CustomInput } from '../CustomInput/CustomInput';
import { LoadingSpinner } from '../Icons/LoadingSpinner/LoadingSpinner';
import { ValidateMessage } from '../ValidateMessage/ValidateMessage';

import { emulateServerResponse } from '@/service/AuthService';
import { isValidEmail, isValidPassword, isValidUser } from '@/utils/utils';
import { TypeUser } from '@/types/types';
import classes from './AuthForm.module.scss';

export const AuthForm = () => {
  const [inputs, setInputs] = useState<TypeUser>({
    email: '',
    password: '',
  });

  const [isValidInput, setIsValidInput] = useState({
    email: true,
    password: true,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs((state) => ({
      ...state,
      [name]: value,
    }));
    if (name === 'email') {
      const testEmail = isValidEmail(value);
      setIsValidInput((state) => ({
        ...state,
        [name]: testEmail,
      }));
    }
    if (name === 'password') {
      const testPassword = isValidPassword(value);
      setIsValidInput((state) => ({
        ...state,
        [name]: testPassword,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (isValidUser(inputs)) {
      try {
        const result = await emulateServerResponse(inputs);
        console.log(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  return (
    <form className={classes.form} onSubmit={(e) => void handleSubmit(e)}>
      <CustomInput
        placeholder="// Enter your email..."
        type="email"
        required={true}
        onChange={handleChangeInput}
        errorMessage={<ValidateMessage message="Incorrect Email" isValid={isValidInput.email} />}
      />

      <CustomInput
        placeholder="// Enter your password..."
        type="password"
        required={true}
        onChange={handleChangeInput}
        errorMessage={
          <ValidateMessage message="Incorrect Password" isValid={isValidInput.password} />
        }
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <button type="submit" className={classes.submitBtn}>
          SIGN IN
        </button>
      )}
    </form>
  );
};
