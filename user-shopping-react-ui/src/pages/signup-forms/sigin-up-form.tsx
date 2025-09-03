import { useEffect, useState } from "react";
import "./sigin-up-form.scss"
import { signUpService } from "../../services/signup";
import { Alert } from '@mui/material';
import { useNavigate } from "react-router";

const SignUpForm = () => {
    const navigate = useNavigate();
    const [createUser, setCreateUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [showError, setShowError] = useState({
        fName: "",
        lName: "",
        email: "",
        pwd: "",
        confirmPwd: ""
    });

    const [userName, setUserName] = useState("");

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const validate = () =>{
        let valid = true;
        let newErrors = {
            fName: "",
            lName: "",
            email: "",
            pwd:"",
            confirmPwd:""
        }

        if(createUser.firstName.trim().length===0){
            newErrors.fName="Enter valid first name"
            valid=false;
        }else if(createUser.lastName.trim().length===0){
            newErrors.lName="Enter valid last name";
            valid=false;
        }else if(!validateEmail(createUser.email)){
            newErrors.email="Enter valid email";
            valid=false;
        }else if(createUser.password.trim().length<6){
            newErrors.pwd="Password must be at least 6 characters long";
            valid=false;
        }else if(createUser.password!==createUser.confirmPassword){
            newErrors.confirmPwd="Password and Confirm Password must be match";
            valid=false;
        }

        setShowError(newErrors);
        return valid;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!validate()) return;
        signUpService(createUser).then(data=>{
            setUserName(data.userName);
        }).catch(err=>{
            console.error(err);
        });
    }

    const handleNavigate = ()=>{
        navigate('/login');
    }

    useEffect(()=>{
        userName && setTimeout(()=>{
            setUserName("");
            navigate('/login');
        }, 5000)
    },[userName])
    return <div className="signup">
    <form onSubmit={handleSubmit} className="signup-form">
        {userName && <Alert  variant="filled" severity="success">User USERNAME: {userName} registered successfully, try to login</Alert>}
        <h2 className="signup-form__header">Sign Up</h2>
        <div className="signup-form__fields">
            <div className="signup-form__fields-field">
            <label className="signup-form__fields-label" htmlFor="">First Name</label>
            <input 
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setCreateUser(prev=>({...prev,firstName: e.target.value}));
                setShowError(prev=>({...prev,fName:""}))
            }} 
            value={createUser.firstName} 
            className="signup-form__fields-input" 
            type="text" 
            name="firstName" />
            <br />
            </div>
            {showError.fName && <span className="signup-form__fields-error">{showError.fName}</span>}
            <div className="signup-form__fields-field">
            <label className="signup-form__fields-label" htmlFor="">Last Name</label>
            <input 
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setCreateUser(prev=>({...prev,lastName: e.target.value}))
                setShowError(prev=>({...prev,lName:""}))
            }} 
            value={createUser.lastName} 
            className="signup-form__fields-input" 
            type="text" 
            name="lastName" />
            <br />
            {showError.lName && <span className="signup-form__fields-error">{showError.lName}</span>}
            </div>
            <div className="signup-form__fields-field">
            <label className="signup-form__fields-label" htmlFor="">Enter your mail</label>
            <input 
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setCreateUser(prev=>({...prev,email: e.target.value}))
                setShowError(prev=>({...prev,email:""}))
            }} 
            value={createUser.email} 
            className="signup-form__fields-input" 
            type="email" 
            name="email" />
            <br />
            {showError.email && <span className="signup-form__fields-error">Invalid Email Address</span>}
            </div>

            <div className="signup-form__fields-field">

            <label className="signup-form__fields-label" htmlFor="">Enter your Password</label>
            <input 
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setCreateUser(prev=>({...prev,password: e.target.value}))
                setShowError(prev=>({...prev,pwd:""}))}} 
            value={createUser.password} className="signup-form__fields-input" 
            type="password" 
            name="password" />
            <br />
            {showError.pwd && <span className="signup-form__fields-error">{showError.pwd}</span>}
            </div>
            <div className="signup-form__fields-field">
            <label className="signup-form__fields-label" htmlFor="">Confirm password</label>
            <input 
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setCreateUser(prev=>({...prev,confirmPassword: e.target.value}))
                setShowError(prev=>({...prev,confirmPwd:""}))}} 
            value={createUser.confirmPassword}
            className="signup-form__fields-input" 
            type="password" />
            <br />
            {showError.confirmPwd && <span className="signup-form__fields-error">{showError.confirmPwd}</span>}
            </div>
            <div className="signup-form__btn">
        <button className="signup-form__btn-login" type="button" onClick={handleNavigate}>Login</button>
        <button className="signup-form__btn-signup" type="submit">Sign Up</button>
        </div>
        </div>
    </form>
    </div>
}

export default SignUpForm;