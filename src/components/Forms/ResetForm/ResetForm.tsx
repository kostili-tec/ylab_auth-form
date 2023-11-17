import { FC, useState } from 'react';

import { CustomInput } from '../../CustomInput/CustomInput';
import { ValidateMessage } from '../../ValidateMessage/ValidateMessage';
import { LoadingSpinner } from '../../Icons/LoadingSpinner/LoadingSpinner';

import { emulateServerResponseEmail } from '@/service/AuthService';
import { isValidEmail } from '@/utils/utils';
import { EnumForms } from '@/types/types';
import classes from '../styles/sharedForm.module.scss';

interface ResetFormProps {
  setForm: React.Dispatch<React.SetStateAction<EnumForms>>;
}

export const ResetForm: FC<ResetFormProps> = ({ setForm }) => {
  const [resetInput, setResetInput] = useState('');
  const [isValidInput, setIsValidInput] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setResetInput(value);
    const testEmail = isValidEmail(value);
    setIsValidInput(testEmail);
  };

  const handleClickLink = () => {
    setForm(EnumForms.LOGIN);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (isValidInput) {
      try {
        const result = await emulateServerResponseEmail(resetInput);
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
        errorMessage={<ValidateMessage message="Incorrect Email" isValid={isValidInput} />}
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <button type="submit" className={classes.submitBtn}>
          RESET PASSWORD
        </button>
      )}

      <a onClick={handleClickLink} className={classes.link}>
        Go back
      </a>
    </form>
  );
};
