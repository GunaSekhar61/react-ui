import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
    const token = localStorage.getItem("token");
    if(!token){
       return <Navigate to="/login" /> 
    }
    
    return <Outlet />
}

export default ProtectedRoutes;