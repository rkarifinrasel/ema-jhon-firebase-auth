import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { AuthContext } from '../AuthProvider/AuthProvider';
const Login = () => {
    const [show,setShow]=useState(false)
const [error,setError]=useState('')
const navigate=useNavigate()
const location=useLocation();
const from=location.state?.from?.pathname||'/';
    const {signIn}=useContext(AuthContext)

    const handleSignIn=event=>{
        event.preventDefault()
        
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
setError('')
signIn(email,password)
.then(result=>{
    const signUser=result.user;
    console.log(signUser)
    alert('successfully login')
    form.reset()
    navigate(from,{replace:true})
})
.catch(error=>{
    console.log(error.message)
    setError(error.message)
})
    }
    return (
        <div className='form-containeer'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSignIn}>
<div className="form-control">
    <label htmlFor="email">Email:</label>
    <input type="email"name='email'required />
</div>
<div className="form-control">
    <label htmlFor="password">Password:</label>
    <input type={show ? 'text':'password'}name='password'required />
    <p onClick={()=>setShow(!show)}><span>
        {
            show ?<span>Hide password</span>
            :<span>Show password</span>
        }
        </span></p>
</div>
<input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='btn-link'>
                <small>New to ema-jhon? 
                    <Link to='/signup'> Create New Account</Link>
                </small>
            </p>

        </div>
    );
};

export default Login;