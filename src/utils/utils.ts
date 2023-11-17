import { TypeUser } from '@/types/types';

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[\w@$!%*?&#]{8,}$/;
// минимум 8 символов. включая большие, маленькие буквы, цифры и символы  @, $, !, %, *, ? и #.

export const isValidUser = ({ email, password }: TypeUser) =>
  emailRegex.test(email) && passwordRegex.test(password);

export const isValidEmail = (email: string) => emailRegex.test(email);

export const isValidPassword = (password: string) => passwordRegex.test(password);
