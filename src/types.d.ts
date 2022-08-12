export interface IUser {
  name: string;
  email: string;
}

export interface IAuth{
  user: IUser | null;
  authIsReady: boolean;
}

export interface Inputs {
  id: number;
  label: string;
  type: string;
  placeholder?: string;
}
