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
}

export interface SuccessResponseData {
  message: string;
}
