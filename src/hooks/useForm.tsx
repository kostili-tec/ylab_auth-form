import { useState } from 'react';

import { isValidEmail, isValidPassword, isValidUser } from '@/utils/utils';
import { emulateServerResponse, emulateServerResponseEmail } from '@/service/AuthService';
import { EnumPopupMessages, TypeUser } from '@/types/types';

interface status {
  type: EnumPopupMessages;
  isShoving: boolean;
}

export const useForm = () => {
  const [loginInputs, setLoginInputs] = useState<TypeUser>({
    email: '',
    password: '',
  });

  const [resetInput, setResetInput] = useState('');

  const [isValidLoginInputs, setIsValidLoginInputs] = useState({
    email: true,
    password: true,
  });

  const [isValidResetInput, setIsValidResetInput] = useState(true);

  const [popupStatus, setPopupStatus] = useState<status>({
    type: EnumPopupMessages.DISABLED,
    isShoving: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginInputs((state) => ({
      ...state,
      [name]: value,
    }));
    if (name === 'email') {
      const testEmail = isValidEmail(value);
      setIsValidLoginInputs((state) => ({
        ...state,
        [name]: testEmail,
      }));
    }
    if (name === 'password') {
      const testPassword = isValidPassword(value);
      setIsValidLoginInputs((state) => ({
        ...state,
        [name]: testPassword,
      }));
    }
  };

  const handleChangeResetInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setResetInput(value);
    const testEmail = isValidEmail(value);
    setIsValidResetInput(testEmail);
  };

  const handleSubmitLoginForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (isValidUser(loginInputs)) {
      try {
        const result = await emulateServerResponse(loginInputs);
        if (result.success === true) {
          setPopupStatus({ isShoving: true, type: EnumPopupMessages.SUCCES } as status);
        } else {
          setPopupStatus({ isShoving: true, type: EnumPopupMessages.ERROR } as status);
        }
      } catch (error) {
        setPopupStatus({ isShoving: true, type: EnumPopupMessages.ERROR } as status);
      } finally {
        setIsLoading(false);
        // костыль
        setTimeout(
          () => setPopupStatus({ isShoving: false, type: EnumPopupMessages.DISABLED } as status),
          5000
        );
      }
    } else {
      setIsLoading(false);
    }
  };

  const handleSubmitResetForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (isValidLoginInputs) {
      try {
        const result = await emulateServerResponseEmail(resetInput);
        if (result.success === true) {
          setPopupStatus({ isShoving: true, type: EnumPopupMessages.SUCCES } as status);
        } else {
          setPopupStatus({ isShoving: true, type: EnumPopupMessages.ERROR } as status);
        }
      } catch (error) {
        setPopupStatus({ isShoving: true, type: EnumPopupMessages.ERROR } as status);
        console.error(error);
      } finally {
        setIsLoading(false);
        // костыль2
        setTimeout(
          () => setPopupStatus({ isShoving: false, type: EnumPopupMessages.DISABLED } as status),
          5000
        );
      }
    } else {
      setIsLoading(false);
    }
  };

  return {
    isValidLoginInputs,
    isValidResetInput,
    isLoading,
    popupStatus,
    handleSubmitLoginForm,
    handleSubmitResetForm,
    handleChangeInput,
    handleChangeResetInput,
  };
};
