import { FC } from 'react';
import { createPortal } from 'react-dom';

import { EnumPopupMessages } from '@/types/types';
import classes from './Popup.module.scss';

interface PopupProps {
  type: EnumPopupMessages;
}

export const Popup: FC<PopupProps> = ({ type }) => {
  const getPopup = (type: EnumPopupMessages) => {
    switch (type) {
      case EnumPopupMessages.SUCCES:
        return <p className={classes.succes}>Succes</p>;
      case EnumPopupMessages.ERROR:
        return <p className={classes.error}>Error</p>;
    }
  };
  const popupElement = <div className={classes.popupContainer}>{getPopup(type)}</div>;

  return createPortal(popupElement, document.body);
};
