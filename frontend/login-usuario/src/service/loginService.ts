import { UnauthorizedError } from "../exceptions/loginExceptions";

export interface loginDTO {
    email: string,
    pass: string
} 

export async function login(loginForm: loginDTO) {
    const response = await fetch('http://localhost:8090/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginForm)
    });

    if (response.status !== 202) {
        throw new UnauthorizedError();
    }
}
