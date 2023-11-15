import { AuthFormContainer } from '@/components/AuthFormContainer/AuthFormContainer';
import classes from './AuthPage.module.scss';

export const AuthPage = () => {
  return (
    <main className={classes.authPage}>
      <AuthFormContainer />
    </main>
  );
};
