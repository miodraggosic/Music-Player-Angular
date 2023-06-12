export interface Login {
  email: string;
  password: string;
}

export interface SignUp extends Login {
  firstName: string;
  lastName: string;
  role: string;
}
export interface User {
  email: string;
  fullName: string;
  createdAt: string;
  password: string;
  role: string;
  id?: number;
}
