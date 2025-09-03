import { useState } from "react";
import "./login.scss"
import { loginService } from "../../services/login";
import { Link, useNavigate } from "react-router";
const Login = () => {
    const navigate = useNavigate();
    const [loginData,setLoginData] = useState({
        username: "",
        password: ""
    });


    const handleLogin = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(loginData.username.trim().length===0 || loginData.password.trim().length===0) return;
        console.log(loginData);
        loginService(loginData).then(data=>{
            navigate('/');
        }).catch(err=>{
            console.error(err);
        });
    }
    return <>
    <div  className="signin-page">
        <form onSubmit={handleLogin} className="login">
            <h2 className="login__header">Login Form</h2>
            <div className="login__fields">
                <div className="login__fields-field">
                <label className="login__fields-label" htmlFor="">User Name</label>
                <input 
                onChange={(event)=>setLoginData({...loginData,username: event.target.value})} 
                className="login__fields-input" 
                type="text" 
                value={loginData.username}
                name="username" />
                </div>
                <div className="login__fields-field">
                <label className="login__fields-label" htmlFor="">Password</label>
                <input 
                onChange={(event)=>setLoginData({...loginData,password: event.target.value})}
                className="login__fields-input" 
                type="password" 
                value={loginData.password}
                name="password" />
                </div>
                 <button className="login__fields-btn btn">Login</button>
                 <p>No account ? Please register <Link to='/signup'>Sign up</Link></p>
            </div>
        </form>
        </div>

    </>
}

export default Login;