import userData from './db.json';

export const emulateServerResponse = (
  email: string,
  password: string
): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isValidUser = checkUser(email, password);
      resolve({ success: isValidUser });
    }, 1000);
  });
};

const checkUser = (email: string, password: string) => {
  const findUser = userData.find((user) => user.email === email && user.password === password);
  return !!findUser;
};
