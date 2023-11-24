import { useState } from 'react';

import { AuthForm } from '../Forms/AuthForm/AuthForm';
import { ResetForm } from '../Forms/ResetForm/ResetForm';
import { Blur } from '../Blur/Blur';
import { FourBolts } from '../Icons/FourBolts/FourBolts';

import { EnumForms } from '@/types/types';
import classes from './FormsContainer.module.scss';

export const FormsContainer = () => {
  const [form, setForm] = useState<EnumForms>(EnumForms.LOGIN);

  return (
    <div className={classes.formContainer}>
      <FourBolts />
      <Blur />
      {form === EnumForms.LOGIN ? <AuthForm setForm={setForm} /> : <ResetForm setForm={setForm} />}
    </div>
  );
};
