import type { SignIn } from "../types/signup";


export const loginService = async (data: SignIn) => {
    
    const response = await fetch("http://localhost:8080/api/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Failed to login');
    }
    const responseData = await response.json();
    localStorage.setItem("token",responseData?.token);
    return responseData;
}