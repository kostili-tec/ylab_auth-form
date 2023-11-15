import { CustomInput } from '../CustomInput/CustomInput';
import classes from './AuthForm.module.scss';

export const AuthForm = () => {
  return (
    <form className={classes.form}>
      <CustomInput placeholder="Enter your email..." type="email" required={true} />
      <CustomInput placeholder="Enter your password..." type="password" required={true} />
    </form>
  );
};
