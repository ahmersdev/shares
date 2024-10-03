export interface IPasswordVisibilityState {
  password: boolean;
  confirmPassword: boolean;
}

export type TPasswordFieldKeys = keyof IPasswordVisibilityState;
