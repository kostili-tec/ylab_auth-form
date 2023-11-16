import { useState } from 'react';

import { isValidEmail, isValidPassword, isValidUser } from '@/utils/utils';
import { emulateServerResponse } from '@/service/AuthService';
import { TypeUser } from '@/types/types';

export const useForm = () => {
  const [inputs, setInputs] = useState<TypeUser>({
    email: '',
    password: '',
  });

  const [isValidInput, setIsValidInput] = useState({
    email: true,
    password: true,
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

  return {
    isValidInput,
    isLoading,
    handleSubmit,
    handleChangeInput,
  };
};
