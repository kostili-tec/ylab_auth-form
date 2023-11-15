import { FC, HTMLInputTypeAttribute } from 'react';

import { LoginIcon } from '../Icons/LoginIcon';
import { PasswordIcon } from '../Icons/PasswordIcon';
import classes from './CustomInput.module.scss';

interface CustomInputProps {
  placeholder: string;
  required: boolean;
  type: HTMLInputTypeAttribute;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput: FC<CustomInputProps> = (props) => {
  const { placeholder, required, type, onChange } = props;

  const getIcon = (type: HTMLInputTypeAttribute) => {
    switch (type) {
      case 'email':
        return <LoginIcon className={classes.icon} />;
      case 'password':
        return <PasswordIcon className={classes.icon} />;
    }
  };

  return (
    <div className={classes.inputContainer}>
      <input
        className={classes.input}
        type={type}
        placeholder={placeholder}
        required={required}
        name={type}
        onChange={onChange}
        autoComplete="on"
      />
      {getIcon(type)}
    </div>
  );
};
