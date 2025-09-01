import type { CreateUser } from "../types/signup";

export const signUpService = async (createUser: CreateUser) => {
    const response = await fetch("http://localhost:8080/api/signup", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(createUser)
    });
    if (!response.ok) {
        throw new Error('Failed to sign up');
    }

    return response.json();
}