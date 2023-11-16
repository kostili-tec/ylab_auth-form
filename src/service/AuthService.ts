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

const checkUser = ({ email, password }: TypeUser) => {
  const findUser = userData.find((user) => user.email === email && user.password === password);
  return !!findUser;
};
