export interface IPasswordVisibility {
  password: boolean;
}

export interface IComponentProps {
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
  md: number;
}

export interface ITogglePasswordVisibility {
  (field: keyof IPasswordVisibility): void;
}

export interface IGetSignInDataArray {
  togglePasswordVisibility: ITogglePasswordVisibility;
  passwordVisibility: IPasswordVisibility;
}
