import { User } from "./user";

export class RegistrationRequest {
    constructor(username: string, password: string, confirmPassword: string) {
        this.username = username;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    public username: string;
    public password: string;
    public confirmPassword: string;
}