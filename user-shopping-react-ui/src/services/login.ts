import type { SignIn } from "../types/signup";


export const loginService = async (data: SignIn) => {
    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(data.username + ":" + data.password));
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    
    const response = await fetch("http://localhost:8080/api/login",{
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error('Failed to login');
    }
    const responseData = await response.json();
    localStorage.setItem("token",responseData);
    return responseData;
}