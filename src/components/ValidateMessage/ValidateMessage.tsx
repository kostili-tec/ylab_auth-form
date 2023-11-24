import { FC } from 'react';

import classes from './ValidateMessage.module.scss';
import { TypeErrorMessages } from '@/types/types';

interface ValidateMessageProps {
  message: TypeErrorMessages;
  isValid: boolean;
}

export const ValidateMessage: FC<ValidateMessageProps> = ({ message, isValid }) => {
  return (
    <div className={classes.messageContainer}>
      {!isValid ? <span className={classes.message}>{message}</span> : <span></span>}
    </div>
  );
};
