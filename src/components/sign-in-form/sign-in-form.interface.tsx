export interface ISignInFormProps {
  mt?: number;
  textAlign?: "start" | "center";
}

export interface IPasswordVisibility {
  password: boolean;
}

interface IComponentProps {
  name: string;
  label: string;
  placeholder: string;
  borderRadius?: number;
  type?: string;
  InputProps?: {
    endAdornment: JSX.Element;
  };
}

export interface IFormArrayItem {
  id: number;
  componentProps: IComponentProps;
  component: React.ElementType;
}

export interface ITogglePasswordVisibility {
  (field: keyof IPasswordVisibility): void;
}
