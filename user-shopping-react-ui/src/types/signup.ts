export interface CreateUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface SignIn {
    username: string;
    password: string;
}