export type TypeUser = {
  email: string;
  password: string;
};

export type TypeErrorMessages = 'Incorrect Email' | 'Incorrect Password';

export enum EnumPopupMessages {
  SUCCES = 'Succes',
  ERROR = 'Error',
  DISABLED = 'Disabled',
}

export enum EnumForms {
  LOGIN = 'login',
  RESET = 'reset',
}
