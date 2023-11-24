import { FormsContainer } from '@/components/FormsContainer/FormsContainer';
import classes from './AuthPage.module.scss';

export const AuthPage = () => {
  return (
    <main className={classes.authPage}>
      <FormsContainer />
    </main>
  );
};
