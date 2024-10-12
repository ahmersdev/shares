export interface ISignInFormProps {
  mt?: number;
  textAlign?: "start" | "center";
}

export interface IPasswordVisibility {
  password: boolean;
}

export interface ITogglePasswordVisibility {
  (field: keyof IPasswordVisibility): void;
}

export interface IFormData {
  email: string;
  password: string;
}
