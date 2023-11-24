import { FC } from 'react';

import { CustomInput } from '../../CustomInput/CustomInput';
import { ValidateMessage } from '../../ValidateMessage/ValidateMessage';
import { LoadingSpinner } from '../../Icons/LoadingSpinner/LoadingSpinner';
import { Popup } from '../../Popup/Popup';

import { useForm } from '@/hooks/useForm';
import { EnumForms, EnumPopupMessages } from '@/types/types';
import classes from '../styles/sharedForm.module.scss';

interface ResetFormProps {
  setForm: React.Dispatch<React.SetStateAction<EnumForms>>;
}

export const ResetForm: FC<ResetFormProps> = ({ setForm }) => {
  const {
    isValidResetInput,
    handleSubmitResetForm,
    handleChangeResetInput,
    isLoading,
    popupStatus,
  } = useForm();
  const { isShoving, type } = popupStatus;

  const handleClickLink = () => {
    setForm(EnumForms.LOGIN);
  };

  return (
    <form className={classes.form} onSubmit={(e) => void handleSubmitResetForm(e)}>
      <CustomInput
        placeholder="// Enter your email..."
        type="email"
        required={true}
        onChange={handleChangeResetInput}
        errorMessage={<ValidateMessage message="Incorrect Email" isValid={isValidResetInput} />}
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
      {isShoving && <Popup type={type as EnumPopupMessages} />}
    </form>
  );
};
