import { useState } from 'react';

import { CustomInput } from '../CustomInput/CustomInput';
import { LoadingSpinner } from '../Icons/LoadingSpinner/LoadingSpinner';
import { emulateServerResponse } from '@/service/AuthService';
import { isValidUser } from '@/utils/utils';
import { TypeUser } from '@/types/types';
import classes from './AuthForm.module.scss';

export const AuthForm = () => {
  const [inputs, setInputs] = useState<TypeUser>({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
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
      console.error('Invalid user data');
    }
  };

  return (
    <form className={classes.form} onSubmit={(e) => void handleSubmit(e)}>
      <CustomInput
        placeholder="// Enter your email..."
        type="email"
        required={true}
        onChange={handleChangeInput}
      />
      <CustomInput
        placeholder="// Enter your password..."
        type="password"
        required={true}
        onChange={handleChangeInput}
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
