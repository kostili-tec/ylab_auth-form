import { CustomInput } from '../CustomInput/CustomInput';
import { LoadingSpinner } from '../Icons/LoadingSpinner/LoadingSpinner';
import { ValidateMessage } from '../ValidateMessage/ValidateMessage';

import { useForm } from '@/hooks/useForm';
import classes from './AuthForm.module.scss';

export const AuthForm = () => {
  const { isLoading, handleChangeInput, handleSubmit, isValidInput } = useForm();

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
