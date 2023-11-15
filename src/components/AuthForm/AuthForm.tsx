import { useState } from 'react';

import { CustomInput } from '../CustomInput/CustomInput';
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

  return (
    <form className={classes.form}>
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
