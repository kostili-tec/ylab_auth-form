import { useState } from 'react';

import { isValidEmail, isValidPassword, isValidUser } from '@/utils/utils';
import { emulateServerResponse } from '@/service/AuthService';
import { EnumPopupMessages, TypeUser } from '@/types/types';

interface status {
  type: EnumPopupMessages;
  isShoving: boolean;
}

export const useForm = () => {
  const [inputs, setInputs] = useState<TypeUser>({
    email: '',
    password: '',
  });

  const [isValidInput, setIsValidInput] = useState({
    email: true,
    password: true,
  });

  const [popupStatus, setPopupStatus] = useState<status>({
    type: EnumPopupMessages.DISABLED,
    isShoving: false,
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
        if (result.success === true) {
          setPopupStatus({ isShoving: true, type: EnumPopupMessages.SUCCES } as status);
        } else {
          setPopupStatus({ isShoving: true, type: EnumPopupMessages.ERROR } as status);
        }
        console.log(result);
      } catch (error) {
        setPopupStatus({ isShoving: true, type: EnumPopupMessages.ERROR } as status);
        console.error(error);
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

  return {
    isValidInput,
    isLoading,
    popupStatus,
    handleSubmit,
    handleChangeInput,
  };
};
