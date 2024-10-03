export interface IPasswordVisibilityState {
  newPassword: boolean;
  confirmPassword: boolean;
}

export type TPasswordFieldKeys = keyof IPasswordVisibilityState;
