import userData from './db.json';
import { TypeUser } from '@/types/types';

export const emulateServerResponse = ({
  email,
  password,
}: TypeUser): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isValidUser = checkUser({ email, password });
      resolve({ success: isValidUser });
    }, 1000);
  });
};
export const emulateServerResponseEmail = (email: string): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isValidEmail = checkEmail(email);
      resolve({ success: isValidEmail });
    }, 1000);
  });
};

const checkUser = ({ email, password }: TypeUser) => {
  const findUser = userData.find((user) => user.email === email && user.password === password);
  return !!findUser;
};

const checkEmail = (email: string) => {
  const findEmail = userData.find((user) => user.email === email);
  return !!findEmail;
};
