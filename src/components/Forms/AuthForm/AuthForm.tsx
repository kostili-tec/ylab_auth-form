import { FC } from 'react';

import { CustomInput } from '../../CustomInput/CustomInput';
import { LoadingSpinner } from '../../Icons/LoadingSpinner/LoadingSpinner';
import { ValidateMessage } from '../../ValidateMessage/ValidateMessage';
import { Popup } from '../../Popup/Popup';

import { useForm } from '@/hooks/useForm';
import { EnumForms, EnumPopupMessages } from '@/types/types';
import classes from '../styles/sharedForm.module.scss';

interface AuthFormProps {
  setForm: React.Dispatch<React.SetStateAction<EnumForms>>;
}

export const AuthForm: FC<AuthFormProps> = ({ setForm }) => {
  const { isLoading, isValidInput, popupStatus, handleChangeInput, handleSubmit } = useForm();
  const { isShoving, type } = popupStatus;

  const handleClickLink = () => {
    setForm(EnumForms.RESET);
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
      <a onClick={handleClickLink} className={classes.link}>
        Forgot password?
      </a>
      {isShoving && <Popup type={type as EnumPopupMessages} />}
    </form>
  );
};
