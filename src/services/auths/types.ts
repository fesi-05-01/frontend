export interface ErrorResponseData {
  data: {
    code: string;
    message: string;
  };
}

export interface SigninData {
  email: string;
  password: string;
}

export interface TokenResponseData {
  token: string;
}

export interface Signuptype {
  name: string;
  email: string;
  companyName: string;
  password: string;
  confirmPassword: string;
}

export interface SuccessResponseData {
  message: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  companyName: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserEditType {
  companyName?: string;
  image?: string;
}
