import { AuthForm } from '../AuthForm/AuthForm';
import { Blur } from '../Blur/Blur';
import { FourBolts } from '../Icons/FourBolts/FourBolts';
import classes from './AuthFormContainer.module.scss';

export const AuthFormContainer = () => {
  return (
    <div className={classes.formContainer}>
      <FourBolts />
      <Blur />
      <AuthForm />
    </div>
  );
};
