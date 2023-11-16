import { useState } from 'react';

import { CustomInput } from '../CustomInput/CustomInput';
import { emulateServerResponse } from '@/service/AuthService';
import { isValidUser } from '@/utils/utils';
import classes from './AuthForm.module.scss';

export const AuthForm = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidUser(inputs)) {
      try {
        const { email, password } = inputs;
        const result = await emulateServerResponse(email, password);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    } else {
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
      <button type="submit" className={classes.submitBtn}>
        SIGN IN
      </button>
    </form>
  );
};
